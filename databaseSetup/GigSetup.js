require('dotenv').config();
const mongoose = require('mongoose');
const Gig = require('../src/mongooseModels/gigs');

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const gigs = new Gig(
  {
    band: 'Upcoming Gig',
    genre: 'Test',
    date: '24.12.2019',
    formattedDate: 20191224,
    time: '22:00',
    venueCity: 'City1',
    venue: 'Venue1',
    _id: '1',
  },
);

gigs.save().then((response) => {
  console.log(response);
  console.log('Gigs saved!');
  mongoose.connection.close();
});
