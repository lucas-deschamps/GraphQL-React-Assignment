import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    // 
  }
};

export default resolvers;
