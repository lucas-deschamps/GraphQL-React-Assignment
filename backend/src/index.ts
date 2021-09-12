import { ApolloServer, gql } from "apollo-server";
import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date';

const typeDefs = gql`
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

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
