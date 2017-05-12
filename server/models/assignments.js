var express = require('express');
var mongoose = require ('mongoose');


//schema
var AssignmentSchema = mongoose.Schema ({
  assignment: String,
  student: String,
  score: Number,
  date_completed: Number
});

//model
var assignments = mongoose.model('assignments', AssignmentSchema);

module.exports = {
  assignments: assignments,
  AssignmentSchema: AssignmentSchema
};
