var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: String,
  price: String,
  category: String,
  link: String,
  image: String
});

var Event = mongoose.model('Event', eventSchema);

// make this available to our other files
module.exports = Event;