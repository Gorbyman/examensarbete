const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  points: Number,
  questNr: Number,
  date: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('User', UserSchema);