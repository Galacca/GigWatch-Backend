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
  friends: {
    type: [String],
  },
  attending: {
    type: [String],
  },
  interested: {
    type: [String],
  },
});
module.exports = mongoose.model('Users', schema);
