import { ApolloServer } from "apollo-server";

import typeDefs from './schema/type-definitions';
import resolvers from './schema/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
