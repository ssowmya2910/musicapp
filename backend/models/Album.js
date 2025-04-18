// models/Album.js
const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: String,
  image: String,
  backgroundColor: String,
});

module.exports = mongoose.model('Album', albumSchema);
