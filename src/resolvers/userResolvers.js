const User = require('../mongooseModels/users');

const userResolvers = {
  Query: {
    findUser: (root, args) => User.find({ username: { $regex: args.username } }),
    userCount: () => User.collection.countDocuments(),
  },
};

module.exports = {
  userResolvers,
};
