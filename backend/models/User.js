const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  likedSongs:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  recentlyPlayed:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
});

module.exports = mongoose.model('User', UserSchema);
