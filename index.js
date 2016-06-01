var express= require('express');
var app = express();
var db = require("./models");
var request = require('request');
var bodyParser = require('body-parser');
var flash = require('connect-flash');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.use(flash());



