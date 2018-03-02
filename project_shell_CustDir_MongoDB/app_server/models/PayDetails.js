var mongoose = require('mongoose');

var PayDetails = new mongoose.Schema({
	username: String,
	payPerHour : Number,
	payTotal : Number,
	payTaken : Number
});

module.exports = mongoose.model('payDetails', PayDetails);