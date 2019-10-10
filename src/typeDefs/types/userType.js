const { gql } = require('apollo-server');

// The enum is used only for a mutation where the user switches their status

const userType = gql`
  type User {
    login: String!
    username: String!
    password: String!
    friends: [String]
    attending: [String]
    interested: [String]
    id: ID!
  }
  enum AttendingInterested {
    attending,
    interested
  }
`;

module.exports = {
  userType,
};
