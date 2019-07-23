const Gig = require('../mongooseModels/gigs');
const { GetCurrentFormattedDate } = require('../utils/date.js');

const gigResolvers = {
  Query: {
    gigCount: () => Gig.collection.countDocuments(),
    upcoming: () => Gig.find({ formattedDate: { $gt: GetCurrentFormattedDate() } }),
  },
};

module.exports = {
  gigResolvers,
};
