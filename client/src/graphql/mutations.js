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
  mutation CreateReview($cityName: String!, $cityRating: Int!, $body: String!) {
    createReview(cityName: $cityName, cityRating: $cityRating, body: $body) {
      _id
      cityName
      cityRating
      body
    }
  }
`;

// export const CREATE_REVIEW = gql`
//   mutation CreateReview(   $cityName: String!
//       $cityRating: Int!
//       $body: String!
//       $dayActivitiesRating: Int!
//       $outdoorActivitiesRating: Int!
//       $nightLifeRating: Int!
//       $costRating: Int!
//       $foodRating: Int!
//       $peopleRating: Int!
//       $safetyRating: Int!
//       $weatherRating: Int!) {
//     createReview(text: $text) {
//       _id
//       cityName
//       cityRating
//       body
//       dayActivitiesRating
//       outdoorActivitiesRating
//       nightLifeRating
//       costRating
//       foodRating
//       peopleRating
//       safetyRating
//       weatherRating
//     }
//   }
// `;

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser {
      message
    }
  }
`;

// export const EDIT_NOTE = gql`
//   mutation EditNote($text: String!, $note_id: ID) {
//     editNote(text: $text, note_id: $note_id) {
//       message
//     }
//   }
// `

// export const DELETE_NOTE = gql`
//   mutation DeleteNote($note_id: ID) {
//     deleteNote(note_id: $note_id) {
//       message
//     }
//   }
// `
