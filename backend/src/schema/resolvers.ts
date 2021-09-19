import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';

import { customers } from '../db/customers';
import { PolicyStatus, InsuranceType, policies } from '../db/policies';

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    customers: (parent: any, args: any) => customers,
    policies: (parent: any, args: any) => policies,
  },
};

export default resolvers;
