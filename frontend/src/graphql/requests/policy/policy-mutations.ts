import { gql } from '@apollo/client';

export const CREATE_POLICY = gql`
  mutation CreatePolicy($createPolicyInput: CreatePolicyInput!) {
    createPolicy(input: $createPolicyInput) {
      customer {
        id
        firstName
        lastName
        dateOfBirth
      }
      provider
      insuranceType
      policyNumber
      status
      startDate
      endDate
      createdAt
    }
  }
`;

export const EDIT_POLICY = gql`
  mutation EditPolicy($editPolicyInput: EditPolicyInput!) {
    editPolicy(input: $editPolicyInput) {
      customer {
        id
        firstName
        lastName
        dateOfBirth
      }
      policyNumber
      provider
      insuranceType
      status
      startDate
      endDate
      createdAt
    }
  }
`;
