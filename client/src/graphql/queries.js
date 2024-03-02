import { gql } from '@apollo/client'

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
        username
      }
    }
  }
`

export const AUTHENTICATE = gql`
  query {
    authenticate {
      _id
      username
    }
  }
`

// export const GET_USER_N = gql`
//   query {
//     getUserNotes {
//       _id
//       text
//     }
//   }
// `
