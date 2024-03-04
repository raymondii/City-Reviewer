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
    getReviewById(review_id: ID!): Review
    getUserbyId(user_id: ID!): User
    authenticate: User
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    logoutUser: Success

    createReview(
      cityName: String!
      cityRating: Int!
      body: String!
      dayActivitiesRating: Int!
      outdoorActivitiesRating: Int!
      nightLifeRating: Int!
      costRating: Int!
      foodRating: Int!
      peopleRating: Int!
      safetyRating: Int!
      weatherRating: Int!
    ): Review
    updateReview(
      cityName: String
      cityRating: Int
      body: String
      dayActivitiesRating: Int
      outdoorActivitiesRating: Int
      nightLifeRating: Int
      costRating: Int
      foodRating: Int
      peopleRating: Int
      safetyRating: Int
      weatherRating: Int
      review_id: ID
    ): Success
    deleteReview(review_id: ID): Success
  }
`;

module.exports = typeDefs;
