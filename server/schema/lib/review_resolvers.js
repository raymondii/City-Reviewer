const { User, Review } = require('../../models'); // Import your Review model
const { GraphQLError } = require('graphql');
const { protect } = require('../../config/auth');

const resolvers = {
  // GET ALL REVIEWS
  queries: {
    getAllReviews: async () => {
      try {
        const reviews = await Review.find().populate('user');
        return reviews;
      } catch (error) {
        throw new Error('Failed to fetch reviews');
      }
    },

    // GET REVIEW BY ID
    getReviewById: async (_, { review_id }) => {
      try {
        console.log('Review ID:', review_id);
        const review = await Review.findById(review_id).populate('user');
        return review;
      } catch (error) {
        throw new Error('Failed to fetch review');
      }
    },
  },

  mutations: {
    // CREATE REVIEW
    createReview: protect(async (_, args, { req, res, user_id }) => {
      try {
        console.log(user_id);

        const user = await User.findById(user_id);
        const review = await Review.create({
          cityName: args.cityName,
          cityRating: args.cityRating,
          body: args.body,
          dayActivitiesRating: args.dayActivitiesRating,
          nightLifeRating: args.nightLifeRating,
          outdoorActivitiesRating: args.outdoorActivitiesRating,
          costRating: args.costRating,
          foodRating: args.foodRating,
          peopleRating: args.peopleRating,
          safetyRating: args.safetyRating,
          weatherRating: args.weatherRating,
          user: user_id,
        });

        // Pushing to user's review array
        user.reviews.push(review._id);
        user.save();

        return review;
      } catch (err) {
        let errors = [];
        console.log('Review Resolver', args);
        for (let prop in err.errors) {
          errors.push(err.errors[prop].message);
        }

        throw new GraphQLError(errors);
      }
    }),

    // UPDATE REVIEW
    updateReview: protect(async (_, args) => {
      try {
        const review = await Review.findByIdAndUpdate(args.review_id, {
          cityName: args.cityName,
          cityRating: args.cityRating,
          body: args.body,
          dayActivitiesRating: args.dayActivitiesRating,
          nightLifeRating: args.nightLifeRating,
          outdoorActivitiesRating: args.outdoorActivitiesRating,
          costRating: args.costRating,
          foodRating: args.foodRating,
          peopleRating: args.peopleRating,
          safetyRating: args.safetyRating,
          weatherRating: args.weatherRating,
        });

        return {
          message: 'Review updated successfully!',
        };
      } catch (err) {
        throw new Error('Failed to update review');
      }
    }),

    // DELETE REVIEW
    deleteReview: protect(async (_, args, { user_id }) => {
      try {
        await Review.findByIdAndDelete(args.review_id);
        await User.findByIdAndUpdate(user_id, {
          $pull: {
            reviews: args.review_id,
          },
        });

        return {
          message: 'Review deleted successfully!',
        };
      } catch (err) {
        throw new Error('Failed to delete review');
      }
    }),
  },
};

module.exports = resolvers;
