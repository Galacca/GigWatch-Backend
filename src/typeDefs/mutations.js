const { gql } = require('apollo-server');

const mutation = gql`
type Mutation {
    addUserAsFriend(myId: String!, IdToAddAsFriend: String!): User
}
`;

module.exports = {
  mutation,
};
