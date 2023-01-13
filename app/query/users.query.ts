import { GraphQLList } from 'graphql';
import User from '../models/user.model';
import { UserType } from '../type';

export default {
  type: new GraphQLList(UserType),
  args: {},
  async resolve(parent, args, context) {
    /* const userList = await User.find(
        {
          location:
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [2.336477, 48.836092 ] }, //first parameter is longitude and secodn is latitude
                 $maxDistance: 1000
               }
            }
        }
    ) */
    const userList = await User.find(
      {
        location: {
          $geoIntersects: {
             $geometry: {
                type: "Polygon" ,
                coordinates: [
                  [ [ 0, 0 ], [ 3, 6 ], [ 6, 2 ], [ 0, 0 ] ]
                ]
             }
          }
        }
      }
   )

   return userList;
  },
};

