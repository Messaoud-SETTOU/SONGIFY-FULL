const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  genre: { type: String, required: false },
  duration: { type: String , required: false }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
