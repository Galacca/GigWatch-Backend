// const { User } = require('../graphqlModels');
const User = require('../mongooseModels/users');

const userResolvers = {
  Query: {
    users: () => User.find({}),
    userCount: () => User.collection.countDocuments(),
  },
};

module.exports = {
  userResolvers,
};
