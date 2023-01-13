import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import GraphQLJSON from "graphql-type-json";
import { GeoEnumType } from "../const/enumType";

/** GraphQL dashboard type definition */
export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    location: { type: new GraphQLObjectType({
      name: 'Location',
      fields: () => ({
        type: { type: GeoEnumType },
        coordinates: { type: GraphQLJSON }
      }),
    })}
  }),
});
