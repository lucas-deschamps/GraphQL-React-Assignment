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
    policies: [Policy!]
  }
`;

export default typeDefinitions;
