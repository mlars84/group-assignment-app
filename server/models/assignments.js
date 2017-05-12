var express = require('express');
var mongoose = require ('mongoose');


//schema
var AssignmentSchema = mongoose.Schema ({
  assignment: String,
  name: String,
  score: Number,
  date_completed: Number
});

//model
var assignments = mongoose.model('assignments', AssignmentSchema);
// export both schema and model
module.exports = {
  assignments: assignments,
  AssignmentSchema: AssignmentSchema
};
