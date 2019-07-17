const { User } = require('../graphqlModels');

const userResolvers = {
  Query: {
    users: () => User.all(),
  },
};

module.exports = {
  userResolvers,
};
