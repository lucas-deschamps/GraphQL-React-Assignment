import { gql } from '@apollo/client';

export const QUERY_ALL_POLICIES = gql`
  query {
    policies {
      customer {
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
