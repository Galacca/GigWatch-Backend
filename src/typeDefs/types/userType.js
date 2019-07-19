const { gql } = require('apollo-server');

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
`;

module.exports = {
  userType,
};
