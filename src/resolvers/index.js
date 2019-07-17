const { gigResolvers } = require('./gigResolvers');
const { userResolvers } = require('./userResolvers');

const resolvers = [gigResolvers, userResolvers];

module.exports = {
  resolvers,
};
