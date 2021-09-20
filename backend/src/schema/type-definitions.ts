import { gql } from "apollo-server";

const typeDefinitions = gql`
  scalar Date
  scalar DateTime

  enum InsuranceType {
    LIABILITY
    HOUSEHOLD
    HEALTH
  }

  enum PolicyStatus {
    ACTIVE
    PENDING
    CANCELLED
    DROPPED_OUT
  }

  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    dateOfBirth: Date!
  }

  type Policy {
    policyNumber: ID!
    customer: Customer!
    provider: String!
    insuranceType: InsuranceType!
    status: PolicyStatus!
    startDate: Date!
    endDate: Date!
    createdAt: DateTime!
  }

  input CustomerInput {
    firstName: String!
    lastName: String!
    dateOfBirth: Date!
  }
  
  input EditCustomerInput {
    id: ID!

    firstName: String
    lastName: String
    dateOfBirth: Date
  }
  
  input DeleteCustomerInput {
    id: ID!
  }

  input CreatePolicyInput {
    customer: CustomerInput!
    provider: String!
    insuranceType: InsuranceType!
    status: PolicyStatus!
    startDate: Date!
    endDate: Date!
  }

  input EditPolicyInput {
    policyNumber: ID!

    customer: CustomerInput
    provider: String
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date
    endDate: Date
    createdAt: DateTime
  }

  input DeletePolicyInput {
    policyNumber: ID!
  }

  type Query {
    customers: [Customer!]
    customer(id: ID!): Customer
    
    policies: [Policy!]
    policy(policyNumber: ID!): Policy
  }

  type Mutation {
    createCustomer(input: CustomerInput!): Customer!
    editCustomer(input: EditCustomerInput!): Customer!
    deleteCustomer(input: DeleteCustomerInput!): Customer

    createPolicy(input: CreatePolicyInput!): Policy!
    editPolicy(input: EditPolicyInput!): Policy!
    deletePolicy(input: DeletePolicyInput!): Policy
  }
`;

export default typeDefinitions;
