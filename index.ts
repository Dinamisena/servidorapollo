import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schemes/typeDefs'
import { resolvers } from './schemes/resolvers'

const startApolloServer = async ()=>{
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    const apolloServer = await server.listen()

    console.log('servidor en: '+ apolloServer.url);
    }

    startApolloServer()