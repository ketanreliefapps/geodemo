import { GraphQLNonNull, GraphQLString, GraphQLInputObjectType } from "graphql";
import User from "../models/user.model";
import { UserType, LocationType } from "../type";

/**
 * Create a new dashboard.
 * Throw an error if not logged or authorized, or arguments are invalid.
 */
export default {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: LocationType},
  },
  async resolve(parent, args, context) {
    const userData = new User({
      email: args.email,
      name: args.name,
      location: args.location, //first parameter is longitude and secodn is latitude
    });

    return await userData.save();
  },
};
