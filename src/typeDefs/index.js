const { query } = require('./query');
const { gigType } = require('./types');
const { userType } = require('./types');

const typeDefs = [query, gigType, userType];

module.exports = {
  typeDefs,
};
