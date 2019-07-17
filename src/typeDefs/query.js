const { gql } = require('apollo-server');

const query = gql`
  type Query {
    gigs: [Gig]
    users: [User]
    upcoming: [Gig]
  }
`;

module.exports = {
  query,
};
