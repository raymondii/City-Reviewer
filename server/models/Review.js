const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    cityName: {
      type: String,
      required: [true, 'Please enter city name!'],
    },

    cityRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    body: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    foodRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    nightLifeRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    dayActivitiesRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    peopleRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    safetyRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    weatherRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    costRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },

    outdoorActivitiesRating: {
      type: Number,
      default: 0,
      required: [true, 'Please enter a rating!'],
    },
  },
  {
    timestamps: false,
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;
