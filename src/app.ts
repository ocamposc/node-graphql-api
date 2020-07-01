import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {PersonaResolver} from './resolvers/PersonaResolver'
import {buildSchema} from 'type-graphql'


export async function start(){ 
    const app = express();
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PersonaResolver]
        }),
        context: ({req, res}) => ({req, res})
    })
    
    server.applyMiddleware({app, path: '/graphql'});
    return app;
}
    
     