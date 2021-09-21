import { gql } from '@apollo/client';

export const QUERY_ALL_CUSTOMERS = gql`
  query {
    customers {
      firstName
      lastName
      dateOfBirth
    }
  }
`;
