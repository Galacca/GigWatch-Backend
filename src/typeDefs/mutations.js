const { gql } = require('apollo-server');

const mutation = gql`
type Mutation {
    addUserAsFriend(myId: String!, IdToAddAsFriend: String!): User
    removeUserFromFriends(myId: String!, IdToRemoveFromFriends: String!): User
}
`;

module.exports = {
  mutation,
};
