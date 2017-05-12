//  requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./modules/db');
var assignmentRoutes = require('./routes/routes');

// global
var port =  process.env.PORT || 8000;

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
//pac man starts at server, eats this part of path and then calls assignmentRoutes, which calls routes/routes and ends with / in router.post
app.use('/assignments', assignmentRoutes);

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});
