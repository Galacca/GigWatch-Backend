const { gql } = require('apollo-server');

const gigType = gql`
  type Gig {
    band: String!
    genre: String!
    date: String!
    formattedDate: Int!
    time: String!
    venueCity: String!
    venue: String!
    id: ID!
  }
`;

module.exports = {
  gigType,
};
