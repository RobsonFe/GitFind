import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query {
    viewer {
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
