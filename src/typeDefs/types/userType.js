const { gql } = require('apollo-server');

const userType = gql`
  type User {
    login: String!
    username: String!
    password: String!
    friends: [Int]
    attending: [Int]
    interested: [Int]
    id: ID!
  }
`;

module.exports = {
  userType,
};
