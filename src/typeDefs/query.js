const { gql } = require('apollo-server');

const query = gql`
  type Query {
    findUser(username: String!): [User]
    upcoming: [Gig]
    userCount: Int!
    gigCount: Int!
    upcomingGigsAttendedByFriends(myId: String!): [Gig]
    allGigs: [Gig]
  }
`;

module.exports = {
  query,
};
