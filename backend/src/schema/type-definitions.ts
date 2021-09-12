import { gql } from "apollo-server";

const typeDefinitions = gql`
  scalar Date
  scalar DateTime

  enum InsuranceType {
    Liability
    Household
    Health
  }

  enum PolicyStatus {
    Active
    Pending
    Cancelled
    Dropped out
  }

  type Customer {
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

  type Query {
    customers: [Customer!]
  }
`;

export default typeDefinitions;
