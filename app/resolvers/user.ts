import User from '../models/user.model';

const resolvers: any = {
    Mutation: {
        addUser: async (root: any, args: {
            user:{
                email: string, 
                name: string,
                location:{
                    type: string
                    coordinates: [number]
                }
            }
        }) => {
            const userData = new User({
                'email': args.user.email,
                'name': args.user.name,
                "location": args.user.location //first parameter is longitude and secodn is latitude
            });
            
            await userData.save();
            
            return {status:true};
        },
        editUser: async (root: any, args: {
            id: string,
            user:{
                email: string, 
                name: string,
                location:{
                    type: string
                    coordinates: [number]
                }
            }
        }) => {
            const user = await User.findOne({_id:args.id});
            user.email = args.user.email
            user.name = args.user.name
            user.location = args.user.location
            await user.save();
           
            
            return {status:true};
        },
    },
    Query: {
        users: async() => {
            const userList = await User.find(
                {
                  location:
                    { $near:
                       {
                         $geometry: { type: "Point",  coordinates: [-0.351563, 51.345196 ] }, //first parameter is longitude and secodn is latitude
                         $maxDistance: 1000
                       }
                    }
                }
            )
            return userList
        },
        user: async(root: any, args: {
            id: string
        }) => {
            const user = await User.findOne({_id:args.id})
            return user
        },
    },
};

export default resolvers;