import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';
import { v4 as uuidv4 } from 'uuid';

import { customers } from '../db/customers';
import { PolicyStatus, InsuranceType, policies } from '../db/policies';

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    // Customer queries
    customers: (parent: any, args: any) => customers,

    // Policy queries
    policies: (parent: any, args: any) => policies,
  },
  Mutation: {
    // Customer mutations
    createCustomer: (parent: any, args: any) => {
      return;
    },
    editCustomer: (parent: any, args: any) => {
      return;
    },
    deleteCustomer: (parent: any, args: any) => {
      return;
    },
    
    // Policy mutations
    createPolicy: (parent: any, args: any): Object => {
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
    editPolicy: (parent: any, args: any): Object => {
      const inputPolicyNum = args.input.policyNumber;
      const update = args.input;

      let updatedPolicy = {};

      for (const policy of policies) {
        if (policy.policyNumber === inputPolicyNum) {
          const policyUpdate = {
            ...policy,
            customer: {
              id: policy.customer.id,
              firstName: update.customer && update.customer.firstName ? update.customer.firstName : policy.customer.firstName,
              lastName: update.customer && update.customer.lastName ? update.customer.lastName : policy.customer.lastName,
              dateOfBirth: update.customer && update.customer.dateOfBirth ? update.customer.dateOfBirth : policy.customer.dateOfBirth,
            },
            provider: update.provider ? update.provider : policy.provider,
            insuranceType: update.insuranceType ? update.insuranceType : policy.insuranceType,
            status: update.status ? update.status : policy.status,
            startDate: update.startDate ? update.startDate : policy.startDate,
            endDate: update.endDate ? update.endDate : policy.endDate,
            createdAt: update.createdAt ? update.createdAt : policy.createdAt,
          };

          policies.splice(policies.indexOf(policy), 1, policyUpdate);
          updatedPolicy = policyUpdate;
          break;
        }
      }

      return updatedPolicy;
    },
    deletePolicy: (parent: any, args: any) => {
      return;
    },
  }
};

export default resolvers;
