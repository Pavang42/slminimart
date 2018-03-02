var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var DailyReport = require('../models/DailyReport.js');

/* GET /DailyReports listing. */
router.get('/', function(req, res, next) {
  DailyReport.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /DailyReports */
router.post('/', function(req, res, next) {
  debugger;
 // console.log("in POST " + req.body.name);
  console.log("in POST " + req.body.username);
  DailyReport.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /DailyReports/id */
router.get('/:id', function(req, res, next) {
  DailyReport.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /DailyReports/:id */
router.put('/:id', function(req, res, next) {
  DailyReport.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /DailyReports/:id */
router.delete('/:id', function(req, res, next) {
  DailyReport.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/images', function(req,res){
  console.log(req.files);
  res.json({success:true});
});

module.exports = router;