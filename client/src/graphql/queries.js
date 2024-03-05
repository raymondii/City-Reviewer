import { gql } from '@apollo/client';

export const GET_ALL_REVIEWS = gql`
  query {
    getAllReviews {
      _id
      cityName
      cityRating
      body
      dayActivitiesRating
      nightLifeRating
      outdoorActivitiesRating
      costRating
      foodRating
      peopleRating
      safetyRating
      weatherRating
      user {
        _id
        username
      }
    }
  }
`;

export const GET_REVIEW_BY_ID = gql`
  query GetReviewById($review_id: ID!) {
    getReviewById(review_id: $review_id) {
      _id
      cityName
      cityRating
      body
      dayActivitiesRating
      nightLifeRating
      outdoorActivitiesRating
      costRating
      foodRating
      peopleRating
      safetyRating
      weatherRating
      user {
        username
      }
    }
  }
`;

export const AUTHENTICATE = gql`
  query {
    authenticate {
      _id
      username
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($user_id: ID!) {
    getUserbyId(user_id: $user_id) {
      _id
      username
      email
      reviews {
        _id
        cityName
        cityRating
        body
        dayActivitiesRating
        nightLifeRating
        outdoorActivitiesRating
        costRating
        foodRating
        peopleRating
        safetyRating
        weatherRating
      }
    }
  }
`;
