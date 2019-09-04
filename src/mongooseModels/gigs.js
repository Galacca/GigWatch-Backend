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
  attending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    }],
  interested: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    }],
  rating: [{
    stars: Number,
    raterID: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  }],
});
module.exports = mongoose.model('Gigs', schema);
