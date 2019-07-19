const { gql } = require('apollo-server');

const query = gql`
  type Query {
    gigs: [Gig]
    findUser(username: String!): [User]
    upcoming: [Gig]
    userCount: Int!
  }
`;

module.exports = {
  query,
};
