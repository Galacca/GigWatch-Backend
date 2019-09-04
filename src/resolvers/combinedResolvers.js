/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
// This file contains resolvers that require access to both collections (users and gigs).
// Also make this use context later on

const { UserInputError } = require('apollo-server');
const Gig = require('../mongooseModels/gigs');
const { GetCurrentFormattedDate } = require('../utils/date.js');
const User = require('../mongooseModels/users');

const combinedResolvers = {
  Query: {
    upcomingGigsAttendedByFriends: async (root, args) => {
    // Frontend does not allow this query to be run with an empty friends list
    // Frontend passes the myId argument that identifies the currently logged in user
    // Then we retrieve said user
      const currentUser = await User.findOne({ _id: args.myId });
      // Then we get the gigs the users friends are attending and get only the upcoming ones
      return Gig.find({
        attending: { $in: currentUser.friends },
        formattedDate: { $gt: GetCurrentFormattedDate() },
      });
    },
  },
  Mutation: {
    attendGig: async (root, args) => {
      const currentUser = await User.findOne({ _id: args.myId });
      const currentGig = await Gig.findOne({ _id: args.gigId });

      if (currentGig.attending.includes(args.myId)) {
        throw new UserInputError('Already attending this gig');
      }

      currentUser.attending = currentUser.attending.concat(args.gigId);
      currentGig.attending = currentGig.attending.concat(args.myId);
      await currentUser.save();
      await currentGig.save();
    },
    interestedGig: async (root, args) => {
      const currentUser = await User.findOne({ _id: args.myId });
      const currentGig = await Gig.findOne({ _id: args.gigId });

      if (currentGig.interested.includes(args.myId)) {
        throw new UserInputError('Already interested in this gig');
      }

      currentUser.interested = currentUser.interested.concat(args.gigId);
      currentGig.interested = currentGig.interested.concat(args.myId);
      await currentUser.save();
      await currentGig.save();
    },
    statusSwitch: async (root, args) => {
      const currentUser = await User.findOne({ _id: args.myId });
      const currentGig = await Gig.findOne({ _id: args.gigId });
      const switchFrom = args.switchFrom; // This should always be interested or attending
      const switchTo = args.switchTo; // As should this

      if (currentUser[switchTo].includes(args.gigId)) {
        throw new UserInputError(`Unexpected operation. Already ${switchTo}`, ' gig.');
      }

      currentUser[switchFrom] = currentUser[switchFrom].filter(s => s != args.gigId);
      currentUser[switchTo] = currentUser[switchTo].concat(args.gigId);
      currentGig[switchFrom] = currentGig[switchFrom].filter(s => s != args.myId);
      currentGig[switchTo] = currentGig[switchTo].concat(args.myId);
      await currentUser.save();
      await currentGig.save();
    },
  },
};
module.exports = {
  combinedResolvers,
};
