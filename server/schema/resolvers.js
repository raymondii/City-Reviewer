const { createToken, verifyToken, protect } = require('../../config/auth');
const { GraphQLError, GraphQLString } = require('graphql');
const { User } = require('../../models');

module.exports = {
  queries: {
    async authenticate(_, __, { req }) {
      const token = req.cookies.token;

      if (!token) return null;

      try {
        const user_id = verifyToken(token);

        const user = await User.findById(user_id);

        return user;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
  },
};

// const user_resolvers = require('./lib/user_resolvers')
// const note_resolvers = require('./lib/note_resolvers')

// const resolvers = {
//   Query: {
//     ...user_resolvers.queries,
//     ...note_resolvers.queries,
//   },

//   Mutation: {
//     ...user_resolvers.mutations,
//     ...note_resolvers.mutations,
//   }
// }

// module.exports = resolvers
