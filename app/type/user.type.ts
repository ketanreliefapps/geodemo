import { gql } from "apollo-server";

const typeDefs = gql`
    type Location {
        type: String
        coordinates: [Float]
    }
    type User {
        id: String
        email: String
        name: String
        location: Location
    }
    type common {
        status: Boolean
    }

    input LocationInput {
        type: String
        coordinates: [Float]
    }
    input UserInput {
        email: String
        name: String
        location: LocationInput
    }

    type Query {
        users: [User]
        user(id:String): User
    }
    type Mutation {
        addUser(user: UserInput): common
        editUser(id:String, user: UserInput): common
    }
`;

export default typeDefs;