const user_resolvers = require('./lib/user_resolvers');
const review_resolvers = require('./lib/review_resolvers');

const resolvers = {
  Query: {
    ...user_resolvers.queries,
    ...review_resolvers.queries,
  },

  Mutation: {
    ...user_resolvers.mutations,
    ...review_resolvers.mutations,
  },
};

module.exports = resolvers;
