// routes/songs.js
const express = require('express');
const router = express.Router();
const Song = require('../models/Song');
const Album = require('../models/Album');

// Get all albums
router.get('/albums', async (req, res) => {
  const albums = await Album.find();
  res.json(albums);
});

// Get all songs of an album
router.get('/album/:id/songs', async (req, res) => {
  const albumId = req.params.id;
  const songs = await Song.find({ albumId });
  res.json(songs);
});

// Add a new album
router.post('/album', async (req, res) => {
  const newAlbum = new Album(req.body);
  await newAlbum.save();
  res.json({ success: true });
});

// Add a new song
router.post('/song', async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.json({ success: true });
});

module.exports = router;
