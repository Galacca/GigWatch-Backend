const User = require('../mongooseModels/users');

// These will be changed to use context later,
// for now it would seem a bit too much like early optimization

const userResolvers = {
  Query: {
    findUser: (root, args) => User.find({ username: { $regex: args.username } }),
    userCount: () => User.collection.countDocuments(),
  },
  Mutation: {
    addUserAsFriend: async (root, args) => {
      const currentUser = await User.findById(args.myId);
      currentUser.friends = currentUser.friends.concat(args.IdToAddAsFriend);
      await currentUser.save();
    },
  },
};

module.exports = {
  userResolvers,
};
