// This file contains resolvers that require access to both collections (users and gigs).
// Would probably be optimal to return the usernames of attending friends as well,
// but early optimization etc...
const Gig = require('../mongooseModels/gigs');
const { GetCurrentFormattedDate } = require('../utils/date.js');
const User = require('../mongooseModels/users');

const combinedResolvers = {
  Query: {
    upcomingGigsAttendedByFriends: async (root, args) => {
    // Frontend does not allow this query to be run with an empty friends list
    // Frontend passes the myId argument that identifies the currently logged in user
    // Then we retrieve said user
      const loggedInUser = await User.findOne({ _id: args.myId });
      // Then we get the gigs the users friends are attending and get only the upcoming ones
      return Gig.find({
        attending: { $in: loggedInUser.friends },
        formattedDate: { $gt: GetCurrentFormattedDate() },
      });
    },
  },
};
module.exports = {
  combinedResolvers,
};
