var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  skill: String,
  address: String
});

module.exports = mongoose.model('users', TodoSchema);
