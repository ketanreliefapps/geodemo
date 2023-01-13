import { GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';
import User from '../models/user.model';
import { UserType } from '../type';

export default {
  type: UserType,
  args: {},
  async resolve(parent, args, context) {
    const user = await User.findOne({_id:args.id})
    return user
  },
};
