const typeDefs = `
  type User {
    id: Int!
    name: String!
    userName: String
    email: String!
  }

  type Query {
    isLoggedIn: Boolean!
    user: User
  }
`;

export default typeDefs;
