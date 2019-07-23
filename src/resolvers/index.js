const { gigResolvers } = require('./gigResolvers');
const { userResolvers } = require('./userResolvers');
const { combinedResolvers } = require('./combinedResolvers');

const resolvers = [gigResolvers, userResolvers, combinedResolvers];

module.exports = {
  resolvers,
};
