const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: this,
    }],
  attending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gigs',
    }],
  interested: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gigs',
  }],
});
module.exports = mongoose.model('Users', schema);
