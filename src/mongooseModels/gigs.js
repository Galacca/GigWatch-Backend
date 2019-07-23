const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  band: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  formattedDate: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venueCity: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  attending: {
    type: [String],
  },
});
module.exports = mongoose.model('Gigs', schema);
