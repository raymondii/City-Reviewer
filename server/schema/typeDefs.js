const gql = String.raw;

const typeDefs = gql`
  type Review {
    _id: ID
    cityName: String
    cityRating: Int
    body: String
    createdAt: String
    updatedAt: String
    dayActivitiesRating: Int
    nightLifeRating: Int
    outdoorActivitiesRating: Int
    costRating: Int
    foodRating: Int
    peopleRating: Int
    safetyRating: Int
    weatherRating: Int
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
    createdAt: String
    updatedAt: String
  }

  type Success {
    message: String
  }

  type Query {
    getAllReviews: [Review]
    getUserReviews: [Review]
    authenticate: User
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    logoutUser: Success

    createReview(
      cityRating: Int
      body: String!
      foodRating: Int
      nightLifeRating: Int
      dayActivitiesRating: Int
      peopleRating: Int
      safetyRating: Int
      weatherRating: Int
      costRating: Int
      outdoorActivitiesRating: Int
    ): Success
    deleteReview(review_id: ID): Success
  }
`;

module.exports = typeDefs;
