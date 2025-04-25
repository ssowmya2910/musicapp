const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const Song = require('./models/Song');
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MDB Connection successful"))
  .catch((err) => console.log("Check your connection string", err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/songs', require('./routes/songs'));


// Test route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend</h1>");
});
app.get('/api/songs/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ error: 'Song not found' });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3001, () => console.log("Server running on port 3001"));
