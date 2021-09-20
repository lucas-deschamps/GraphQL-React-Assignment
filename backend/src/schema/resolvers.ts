import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';
import { v4 as uuidv4 } from 'uuid';

import { customers } from '../db/customers';
import { PolicyStatus, InsuranceType, policies } from '../db/policies';

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    customers: (parent: any, args: any) => customers,
    policies: (parent: any, args: any) => policies,
  },
  Mutation: {
    // Customer resolvers
    createCustomer: (parent: any, args: any) => {
      return "hi";
    },
    editCustomer: (parent: any, args: any) => {
      return "hi";
    },
    deleteCustomer: (parent: any, args: any) => {
      return "hi";
    },
    
    // Policy resolvers
    createPolicy: (parent: any, args: any) => {
      const policy = args.input;
      const customer = policy.customer;

      const dateNumbers = policy.startDate.toJSON().split('-');
      
      customer.id = uuidv4();
      policy.policyNumber = uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join('');
      policy.createdAt = new Date(
        dateNumbers[0], 
        Number(dateNumbers[1]) - 1, 
        dateNumbers[2][0] + dateNumbers[2][1]
      ).toISOString();

      policies.push(policy);

      return policy;
    },
    editPolicy: (parent: any, args: any) => {
      return "hi";
    },
    deletePolicy: (parent: any, args: any) => {
      return "hi";
    },
  }
};

export default resolvers;
