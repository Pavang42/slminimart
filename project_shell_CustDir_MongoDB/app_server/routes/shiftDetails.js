var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var ShiftDetails = require('../models/ShiftDetail.js');

/* GET /ShiftDetails listing. */
router.get('/', function(req, res, next) {
  ShiftDetails.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /ShiftDetails */
router.post('/', function(req, res, next) {
  debugger;
 // console.log("in POST " + req.body.name);
  ShiftDetails.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /ShiftDetails/id */
router.get('/:id', function(req, res, next) {
  ShiftDetails.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /ShiftDetails/:id */
router.put('/:id', function(req, res, next) {
  ShiftDetails.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /ShiftDetails/:id */
router.delete('/:id', function(req, res, next) {
  ShiftDetails.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;