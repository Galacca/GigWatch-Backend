require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/mongooseModels/users');

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const users = new User(
  {
    login: 'Tester3',
    username: 'Tester 3 Friend',
    password: '123',
    friends: [1, 2],
    attending: [],
    interested: [],
    id: 3,
  },
);

users.save().then((response) => {
  console.log(response);
  console.log('User saved!');
  mongoose.connection.close();
});
