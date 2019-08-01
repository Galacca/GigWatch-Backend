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
    _id: ID!
    attending: [String]
    rating: [Rating]
  },
  type Rating {
  stars: Int
  raterID: String
}
`;

module.exports = {
  gigType,
};
