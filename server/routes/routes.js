var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// .. to climb out from routes up to server then into models
var assignmentModel = require ('../models/assignments');

// get
router.get('/', function(req, res) {
  console.log('GET');
  assignmentModel.assignments.find().then(function(data) {
    console.log('data:', data);
    res.send(data);
  });
});

//see comment line 16 in app.js, re: path name
router.post('/', function(req, res) {
  console.log('post call');
  console.log('req.body', req.body);
  // (Matt) model now takes name of global variable assignmentModel, which gets the assignment model and schema
  // (Jim) to get the exported model and schema from assignment.js, we required it above and put it in variable assignmentModel.
  // to get the model name, we use object dot notation.
  var newRecords = assignmentModel.assignments(req.body);
  newRecords.save().then(function(){
    res.sendStatus(200);
  });
});

module.exports = router;
