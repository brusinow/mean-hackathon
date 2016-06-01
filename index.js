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
    url = 'http://www.thestranger.com/events//2016-06-01?picks=true';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);
            $('.calendar-post-row').filter(function(){
            var data = $(this);
            console.log(data);
            });
            // Finally, we'll define the variables we're going to capture
           //  for (i=0;i<data.length;i++)
           //   var title, date, category, location, price;
           //   var json = { title : "", date : "", category : "", location : "", price : ""};
           // }
        }
    })
    res.send('hey sup hello');
});

app.listen(3000);