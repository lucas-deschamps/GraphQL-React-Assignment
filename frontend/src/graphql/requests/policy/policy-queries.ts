import { gql } from '@apollo/client';

export const QUERY_ALL_POLICIES = gql`
  query GetAllPolicies {
    policies {
      customer {
        id
        firstName
        lastName
        dateOfBirth
      }
      provider
      insuranceType
      status
      policyNumber
      startDate
      endDate
      createdAt
    }
  }
`;
