const { gql } = require('apollo-server');

// [User]

const query = gql`
  type Query {
    gigs: [Gig]
    users: [User]
    upcoming: [Gig]
    userCount: Int!
  }
`;

module.exports = {
  query,
};
