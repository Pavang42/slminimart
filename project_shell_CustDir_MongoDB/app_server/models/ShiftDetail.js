var mongoose = require('mongoose');

var ShiftSchema = new mongoose.Schema({
	date: String,
	name: String,
	shift: String,
	hours: Number,
	voidtickets : Number,
	errorcorrections : Number
});

module.exports = mongoose.model('shiftDetail', ShiftSchema);