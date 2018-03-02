var mongoose = require('mongoose');

var DailyReportSchema = new mongoose.Schema({
	date: String,
	morningCash:Number,
	morningCoins:Number,
	eveningCash:Number,
	eveningCoins:Number,
	lottoPaidOut:Number,
	vendorCoupons:Number,
	paidOut:Number,
	foodStamp:Number,
	creditCards:Number,
	refunds:Number,
	total:Number,
	totalMopSale:Number
});

module.exports = mongoose.model('dailyReports', DailyReportSchema);