//  requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
require('./modules/db');
var routes = require('./routes/routes');
var assignments = require ('./models/assignments');

// global
var port =  process.env.PORT || 8000;

// uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/routes', routes);

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
});
