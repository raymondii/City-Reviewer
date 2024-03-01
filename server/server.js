const express = require('express');
const path = require('path');

require('dotenv').config();
const db = require('./config/connection');

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cookieParser = require('cookie-parser');
const { typeDefs, resolvers } = require('./schema');

const app = express();
const PORT = process.env.PORT || 3030;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Open Middleware
  app.use(express.json());

  // Open Cookie Middleware
  // Cookies middleware to be able to pull it later
  app.use(cookieParser());

  // Apollo/GraphQL Middleware
  // using both servers to interact with each other (Apollo and our sever)
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context(data) {
        return {
          req: data.req,
          res: data.res,
        };
      },
    })
  );

  // Heroku Stuff
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/dist'));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Confirm DB connection
  db.on('open', () => {
    app.listen(PORT, () => console.log('Server started on port', PORT));
  });
}

startServer();
