const { Gig } = require('../graphqlModels');

const gigResolvers = {
  Query: {
    gigs: () => Gig.all(),
    upcoming: () => Gig.upcoming(),
  },
};

module.exports = {
  gigResolvers,
};
