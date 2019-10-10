const { gql } = require('apollo-server');

const mutation = gql`
type Mutation {
    addUserAsFriend(myId: String!, IdToAddAsFriend: String!): User
    removeUserFromFriends(myId: String!, IdToRemoveFromFriends: String!): User
    attendGig(myId: String!, gigId: String!): User
    interestedGig(myId: String!, gigId: String!): User
    statusSwitch(myId: String!, gigId: String!, switchFrom: AttendingInterested!, switchTo: AttendingInterested!): User
}
`;

module.exports = {
  mutation,
};
