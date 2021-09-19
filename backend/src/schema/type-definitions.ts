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
    customer: Customer!
    provider: String!
    insuranceType: InsuranceType!
    status: PolicyStatus!
    policyNumber: String!
    startDate: Date!
    endDate: Date!
    createdAt: DateTime!
  }

  input CreateCustomerInput {
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
    provider: String!
    insuranceType: InsuranceType!
    status: PolicyStatus!
    policyNumber: String!
    startDate: Date!
    endDate: Date!
  }

  input EditPolicyInput {
    policyNumber: String!

    provider: String
    insuranceType: InsuranceType
    status: PolicyStatus
    startDate: Date
    endDate: Date
    createdAt: DateTime
  }

  input DeletePolicyInput {
    policyNumber: String!
  }

  type Query {
    customers: [Customer!]
    policies: [Policy!]
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer!
    editCustomer(input: EditCustomerInput!): Customer!
    deleteCustomer(input: DeleteCustomerInput!): Customer

    createPolicy(input: CreatePolicyInput!): Policy!
    editPolicy(input: EditPolicyInput!): Policy!
    deletePolicy(input: DeletePolicyInput!): Policy
  }
`;

export default typeDefinitions;
