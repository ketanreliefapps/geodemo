import { GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';
import User from '../models/user.model';
import { UserType } from '../type';

export default {
  type: new GraphQLList(UserType),
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent, args, context) {
    const userList = await User.find(
        {
          location:
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [-0.349588, 51.350987 ] }, //first parameter is longitude and secodn is latitude
                 $maxDistance: 1000
               }
            }
        }
    )
    return userList;
  },
};

