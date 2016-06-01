var mongoose = require('mongoose');
var Event = require('./models/event');
mongoose.connect('mongodb://localhost/fivethings');

var newEvent = Event({
  title: 'Music Festival',
  location: 'Seattle, WA',
  date: 'June 10th',
  price: '$20',
  category: 'Music',
  link: 'www.music.com',
  image: 'www.google.com'
});

// save the event
newEvent.save(function(err) {
  if (err) console.log(err);
  console.log('Event created!');
});

//to seed in CLI run node seed.js