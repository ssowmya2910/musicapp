const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  file: String, // URL or path to the audio file
  albumId: String, // ID of the related album
});

module.exports = mongoose.model('Song', songSchema);