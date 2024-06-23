import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query GetUserDetails($login: String!) {
    user(login: $login) {
      avatarUrl
      login
      name
      location
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;
