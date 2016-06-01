var express= require('express');
var app = express();


var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree');

app.get('/', function(req, res) {
  res.send('Hi!');
});

app.listen(3000);