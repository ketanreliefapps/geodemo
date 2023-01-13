import 'reflect-metadata';
import { GraphQLSchema } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import express from 'express';
import { connection } from './connection';
import Query from './query';
import Mutation from './mutation';


const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
  });
  

const startServer = async () => {
    connection();
    
    const app = express()
    
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })
    await apolloServer.start();
    
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => {
        console.log(`server started on 4000`);
    })
}
startServer();