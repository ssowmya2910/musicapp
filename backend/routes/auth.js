const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const mongoose = require('mongoose');
const SECRET_KEY = "gizliii";
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({ email, password: hashedPassword });
    res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating user" });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ success: false, message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ success: true, token });
});

// Like a song
router.post('/like/:songId', async (req, res) => {
  const { userId } = req.body;
  const { songId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }

  try {
    const user = await User.findById(userId);
    if (!user.likedSongs.includes(songId)) {
      user.likedSongs.push(songId);
      await user.save();
    }
    res.json({ message: 'Song liked' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get liked songs
router.get('/liked/:userId', async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }

  try {
    const likedSongs = await User.findById(userId).select("likedSongs");
    res.json(likedSongs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching liked songs' });
  }
});

// Track recently played
router.post('/play/:songId', async (req, res) => {
  const { userId } = req.body;
  const { songId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.recentlyPlayed = [songId, ...user.recentlyPlayed.filter(id => id != songId)];
    user.recentlyPlayed = user.recentlyPlayed.slice(0, 10); // limit to 10
    await user.save();

    res.json({ message: 'Play updated' });
  } catch (err) {
    res.status(500).json({ error: 'Error updating recently played' });
  }
});

// Get recently played
router.get('/recently-played/:userId', async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }

  try {
    const user = await User.findById(userId).populate('recentlyPlayed');
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user.recentlyPlayed);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching recently played' });
  }
});
module.exports = router;
