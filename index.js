// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Using json parser
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json()); 

// Creating routes
app.use('/get', require('./action/get'));
app.use('/post', require('./action/post'))
app.use('/', express.static('files'));

app.listen(process.env.PORT);

