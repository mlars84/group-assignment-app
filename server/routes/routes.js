var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assignmentModel = require ('../models/assignments');

// get

router.post('/', function(req, res) {
  console.log('post call');
  console.log('req.body', req.body);
  var newRecords = assignmentModel.assignments(req.body);
  newRecords.save().then(function(){
    res.sendStatus(200);
  });
});

module.exports = router;
