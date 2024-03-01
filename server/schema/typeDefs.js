const gql = String.raw;

const typeDefs = gql`
  type Review {
    _id: ID
    stars: Int
    body: String
    user: User
    createdAt: String
    updatedAt: String
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
    hello: String
    another: String
    getAllReviews: [Review]
    getUserReviews: [Review]
    authenticate: User
  }

  type Mutation {
    createReview(text: String!): Success
    registerUser(username: String, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    logoutUser: Success
  }
`;

module.exports = typeDefs;
