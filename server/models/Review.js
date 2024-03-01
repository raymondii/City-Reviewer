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
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
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
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    nightLifeRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    dayActivitiesRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    peopleRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    safetyRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    weatherRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    costRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },

    outdoorActivitiesRating: {
      type: Number,
      default: 0,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },
  },
  {
    timestamps: false,
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;

// // Get all star elements
// const stars = document.querySelectorAll('.star');

// // Add event listener to each star
// stars.forEach((star) => {
//   star.addEventListener('click', () => {
//     const value = parseInt(star.getAttribute('data-value'));
//     setRating(value);
//   });
// });

// // Function to set the rating
// function setRating(value) {
//   stars.forEach((star) => {
//     const starValue = parseInt(star.getAttribute('data-value'));
//     if (starValue <= value) {
//       star.classList.add('active');
//     } else {
//       star.classList.remove('active');
//     }
//   });
// }
