var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var PayDetails = require('../models/PayDetails.js');

/* GET /PayDetails listing. */
router.get('/', function(req, res, next) {
  PayDetails.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /PayDetails */
router.post('/', function(req, res, next) {
  debugger;
 // console.log("in POST " + req.body.name);
  PayDetails.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /PayDetails/id */
router.get('/:id', function(req, res, next) {
  PayDetails.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /PayDetails/:id */
router.put('/:id', function(req, res, next) {
  PayDetails.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /PayDetails/:id */
router.delete('/:id', function(req, res, next) {
  PayDetails.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;