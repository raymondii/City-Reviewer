import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      _id
      email
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      email
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview(
    $cityName: String!
    $cityRating: Int!
    $body: String!
    $dayActivitiesRating: Int!
    $outdoorActivitiesRating: Int!
    $nightLifeRating: Int!
    $costRating: Int!
    $foodRating: Int!
    $peopleRating: Int!
    $safetyRating: Int!
    $weatherRating: Int!
  ) {
    createReview(
      cityName: $cityName
      cityRating: $cityRating
      body: $body
      dayActivitiesRating: $dayActivitiesRating
      outdoorActivitiesRating: $outdoorActivitiesRating
      nightLifeRating: $nightLifeRating
      costRating: $costRating
      foodRating: $foodRating
      peopleRating: $peopleRating
      safetyRating: $safetyRating
      weatherRating: $weatherRating
    ) {
      _id
      cityName
      cityRating
      body
      cityName
      dayActivitiesRating
      outdoorActivitiesRating
      nightLifeRating
      costRating
      foodRating
      peopleRating
      safetyRating
      weatherRating
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser {
      message
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($review_id: ID) {
    deleteReview(review_id: $review_id) {
      message
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation UpdateReview(
    $cityName: String!
    $cityRating: Int!
    $body: String!
    $dayActivitiesRating: Int!
    $outdoorActivitiesRating: Int!
    $nightLifeRating: Int!
    $costRating: Int!
    $foodRating: Int!
    $peopleRating: Int!
    $safetyRating: Int!
    $weatherRating: Int!
    $review_id: ID
  ) {
    updateReview(
      cityName: $cityName
      cityRating: $cityRating
      body: $body
      dayActivitiesRating: $dayActivitiesRating
      outdoorActivitiesRating: $outdoorActivitiesRating
      nightLifeRating: $nightLifeRating
      costRating: $costRating
      foodRating: $foodRating
      peopleRating: $peopleRating
      safetyRating: $safetyRating
      weatherRating: $weatherRating
      review_id: $review_id
    ) {
      message
    }
  }
`;
