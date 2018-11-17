import gql from 'graphql-tag';


const userQuery = gql`
query GetUsers {
  users @client {
    id
    text
    name
    userName
    department
    access
    completed
  }
}
`;

const resolvers = {
  Mutation: {
    //  Add User

    addUser: (_, variables, { cache }) => {
      console.log("addUser")
    },
    
    //  Update User

    updateUser: (_, variables, { cache }) => {
      console.log("update User")
    },

    // Delete User

    deleteUser: (_, variables, { cache }) => {
      console.log("delete User")
    }
  },
};

export default resolvers;