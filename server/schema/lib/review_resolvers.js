const { User, Review } = require('../../models'); // Import your Review model
const { GraphQLError } = require('graphql');
const { protect } = require('../../config/auth');

const resolvers = {
  Query: {
    getAllReviews: async () => {
      try {
        const reviews = await Review.find();
        return reviews;
      } catch (error) {
        throw new Error('Failed to fetch reviews');
      }
    },
    getReviewById: async (_, { id }) => {
      try {
        const review = await Review.findById(id);
        return review;
      } catch (error) {
        throw new Error('Failed to fetch review');
      }
    },
    addStarToReview: async (_, { id, stars }) => {
      try {
        // Find the review by ID
        const review = await Review.findById(id);

        // Check if the review exists
        if (!review) {
          throw new Error('Review not found');
        }

        // Update the star count of the review
        review.stars = stars;
        await review.save();

        // Return the updated review
        return review;
      } catch (error) {
        throw new Error('Failed to update review stars');
      }
    },
  },

  Mutation: {
    createReview: protect(async (_, args, { req, res, user_id }) => {
      try {
        console.log('Review Resolver', args);

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

        for (let prop in err.errors) {
          errors.push(err.errors[prop].message);
        }

        throw new GraphQLError(errors);
      }
    }),

    updateReview: async (_, { id, input }) => {
      try {
        const review = await Review.findByIdAndUpdate(id, input, { new: true });
        return review;
      } catch (error) {
        throw new Error('Failed to update review');
      }
    },
    deleteReview: async (_, { id }) => {
      try {
        const review = await Review.findByIdAndDelete(id);
        return review;
      } catch (error) {
        throw new Error('Failed to delete review');
      }
    },
  },
};

module.exports = resolvers;
