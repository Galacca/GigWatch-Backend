const { query } = require('./query');
const { gigType } = require('./types');
const { userType } = require('./types');
const { mutation } = require('./mutations');

const typeDefs = [query, gigType, userType, mutation];

module.exports = {
  typeDefs,
};
