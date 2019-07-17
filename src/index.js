require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { GetCurrentDate } = require('./utils/date.js');

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
  },
});

server.listen().then(({ url }) => {
  console.log(GetCurrentDate());
  console.log(`Server ready at ${url}`);
});
