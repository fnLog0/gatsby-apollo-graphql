const typeDefs = `
  type User {
    id: ID!
    userName: String!
    email: String!
    name: String!
    dataofBirth:String
    bio: String
  }

  input UserInput {
    id: ID!
    userName: String!
    email: String!
    name: String!
    dataofBirth:String
    bio: String
  }

  type Query {
    isLoggedIn: Boolean!
    user: User
  } 

  type Mutation{
    addUser( input : UserInput): User
    updateUser( input : UserInput): User
    deleteUser( id : ID!): User
  }
`;

export default typeDefs;
