const { createToken, verifyToken, protect } = require('../../config/auth');
const { GraphQLError } = require('graphql');
const { User } = require('../../models');

module.exports = {
  queries: {
    // AUTHETICATE USER BY COOKIE TOKEN
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

    // GET USER BY ID
    getUserbyId: async (_, { user_id }) => {
      try {
        console.log('User ID:', user_id);
        const user = await User.findById(user_id).populate('reviews');

        if (!user) {
          throw new Error('User not found');
        }

        return user;
      } catch (error) {
        throw new Error('Failed to fetch user');
      }
    },
  },

  mutations: {
    // CREATE USER
    async registerUser(_, args, { res }) {
      console.log('User:', args);
      try {
        const user = await User.create(args);

        const token = createToken(user._id);

        res.cookie('token', token, {
          httpOnly: true,
        });

        return user;
      } catch (err) {
        console.log(err);

        if (err.code === 11000) {
          throw new GraphQLError(
            'A user with that username or email address already exists'
          );
        }

        if (err.errors) {
          let errors = [];

          for (let prop in err.errors) {
            errors.push(err.errors[prop].message);
          }

          throw new GraphQLError(errors);
        }
      }
    },

    // LOG IN USER
    async loginUser(_, args, { res }) {
      console.log('User:', args);
      const user = await User.findOne({
        email: args.email,
      });

      if (!user) {
        throw new GraphQLError('A user with that email address was not found');
      }

      const pass_valid = await user.validatePass(args.password);

      if (!pass_valid) {
        throw new GraphQLError('Your password is incorrect');
      }

      const token = createToken(user._id);

      res.cookie('token', token, { httpOnly: true });

      return user;
    },

    // LOG OUT USER
    logoutUser(_, __, { res }) {
      try {
        res.clearCookie('token');

        return {
          message: 'Logged out successfully',
        };
      } catch (err) {
        console.log(err);
      }
    },
  },
};
