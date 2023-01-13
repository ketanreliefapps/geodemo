import { GraphQLInputObjectType, GraphQLNonNull} from "graphql";
import GraphQLJSON from "graphql-type-json";
import { GeoEnumType } from "../const/enumType";

/** GraphQL dashboard type definition */
export const LocationType = new GraphQLInputObjectType({
    name: 'EditLocationInputType',
    fields: () => ({
      type: { type: new GraphQLNonNull(GeoEnumType) },
      coordinates: { type: new GraphQLNonNull(GraphQLJSON) },
    })
  })
