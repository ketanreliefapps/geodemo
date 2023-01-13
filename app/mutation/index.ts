import { GraphQLObjectType } from 'graphql';
import addUser from "./addUser.mutation";
import editUser from "./editUser.mutation";

/** GraphQL mutation definition */
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser,
    editUser,
  },
});

export default Mutation;
