var express= require('express');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');

app.get('/', function(req, res) {
  res.send('Hi!');
});

app.listen(3000);