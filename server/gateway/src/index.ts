import { ApolloGateway, IntrospectAndCompose }  from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'post-service', url: 'http://post-service:4001' },
      { name: 'user-service', url: 'http://user-service:4002' },
      // ...additional subgraphs...
    ],
  }),
});


const server = new ApolloServer({
  gateway,
});


const { url } = await startStandaloneServer(server, {
  listen: {port: 4000}
});

console.log(`🚀  GateWay ready at ${url}`);


