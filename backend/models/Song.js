const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  file: String, 
  albumId: String, 
});


module.exports = mongoose.model('Song', songSchema);