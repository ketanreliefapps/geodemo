import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import express from 'express';
import { connection } from './connection';
import resolvers from "./resolvers/user";
import typeDefs from "./type/user.type";

const startServer = async () => {
    connection();
    
    const app = express()
    
    const apolloServer = new ApolloServer({
        typeDefs, 
        resolvers,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })
    await apolloServer.start();
    
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => {
        console.log(`server started on 4000`);
    })
}
startServer();