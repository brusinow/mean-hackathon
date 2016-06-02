var express= require('express');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Event = require('./models/event');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));

mongoose.connect('mongodb://localhost/fivethings');
    

app.get('/api', function(req, res) {
    var today = new Date();
    var date = today.getDate();
        if (date < 10) {
        date = '0' + date;
        }
    var month = today.getMonth(); // month (in integer 0-11)
        month = month + 1;
        if (month < 10) {
        month = '0'+ month;
        }

    var year = today.getFullYear();
    var todayDate = year + '-' + month + '-' + date;

    var url = 'http://www.thestranger.com/events//' + todayDate + '?picks=true';

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request
        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html, {normalizeWhitespace: true});

            

            $('.calendar-post').map(function(i, value) {
              var title = $(value).find('.calendar-post-left .calendar-post-title a').text();
              var date = $(value).find('.calendar-post-date').text();
              var location = $(value).find('.calendar-post-neighborhood').text();
              // if (!location){
              //   location = null;
              // }
              var price = $(value).find('.calendar-post-event-price').text();
              // if (!price){
              // price = null;
              // }
              var category = $(value).find('.calendar-category').text();
              var link = $(value).find('.calendar-post-title a').attr("href");
              var image = $(value).find('.calendar-post-image img').attr("src");

              //creating a new event  
              var newEvent = Event({
                  "title": title, 
                  "location": location, 
                  "date": date, 
                  "price": price, 
                  "category": category, 
                  "link": link,
                  "image": image
              });


               var title = newEvent.title; 
               //checking if there is a matching event in the db
               Event.findOne({ "title" : title }, function (err, event) {
                    if (err) return handleError(err);
                   // var dbTitle = event.title;
                   //  console.log("dbTitle inside find: " + dbTitle); 
                   //  if(dbTitle !== title){
                        newEvent.save(function(err) {
                        if (err) console.log(err);
                        console.log('Event created!');
                        });
                   //  }
                    });

            });
          

        }
    })
    res.send('');
});

app.get('/api/results', function(req, res) {
  Event.find({}, function(err, events) {
    if (err) return res.send(err);
    res.send(events);
    console.log(events);
  });
});

app.listen(process.env.PORT || 3000)
