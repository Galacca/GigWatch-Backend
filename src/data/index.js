// Dummy data used in early stages

const gigs = [
  {
    band: 'Upcoming Gig',
    genre: 'Test',
    date: '24.12.2019',
    formattedDate: 20191224,
    time: '22:00',
    venueCity: 'City1',
    venue: 'Venue1',
    id: 1,
  },
  {
    band: 'Past Gig',
    genre: 'Test',
    date: '5.5.2019',
    formattedDate: 20190505,
    time: '22:00',
    venueCity: 'City2',
    venue: 'Venue1',
    id: 2,
  },
];

const users = [
  {
    login: 'Tester1',
    username: 'Tester Upcoming',
    password: '123',
    friends: [3],
    attending: [1],
    interested: [],
    id: 1,
  },
  {
    login: 'Tester2',
    username: 'Tester Past',
    password: '123',
    friends: [3],
    attending: [2],
    interested: [],
    id: 2,
  },
  {
    login: 'Tester3',
    username: 'Tester 3 Friend',
    password: '123',
    friends: [1, 2],
    attending: [],
    interested: [],
    id: 3,
  },
];
module.exports = {
  gigs, users,
};
