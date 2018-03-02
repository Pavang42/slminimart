var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
	date: String,
	name : String,
	path : String
});

module.exports = mongoose.model('imageReports', ImageSchema);