import { GraphQLNonNull, GraphQLString } from 'graphql';
import User from '../models/user.model';
import { UserType, LocationType } from '../type';


/**
 * Create a new dashboard.
 * Throw an error if not logged or authorized, or arguments are invalid.
 */
export default {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: LocationType},
  },
  async resolve(parent, args, context) {
    const user = await User.findOne({_id:args.id});
    user.email = args.user.email
    user.name = args.user.name
    user.location = args.user.location
    await user.save();
    
    
    return user;
  },
};
