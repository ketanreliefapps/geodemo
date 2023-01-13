import { GraphQLObjectType } from 'graphql';
import users from './users.query';
import user from './user.query';

/** GraphQL query type definition */
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      users,
      user
    },
  });
  
  export default Query;