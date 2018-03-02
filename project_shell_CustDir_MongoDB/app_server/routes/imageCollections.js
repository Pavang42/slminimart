var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var ImageInfo = require('../models/ImageUpload.js');

/* GET /ImageInfo listing. */
router.get('/', function(req, res, next) {
  ImageInfo.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /ImageInfo */
router.post('/', function(req, res, next) {
  debugger;
 // console.log("in POST " + req.body.name);
  console.log("in POST " + req.body.username);
  ImageInfo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /ImageInfo/id */
router.get('/:id', function(req, res, next) {
  ImageInfo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /ImageInfo/:id */
router.put('/:id', function(req, res, next) {
  ImageInfo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /ImageInfo/:id */
router.delete('/:id', function(req, res, next) {
  ImageInfo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;