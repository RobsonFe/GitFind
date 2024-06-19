import { gql } from "@apollo/client";

export const GET_USER_REPOS = gql`
  query GetUserRepos($username: String!, $perPage: Int!, $cursor: String) {
    user(login: $username) {
      repositories(
        first: $perPage
        after: $cursor
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        edges {
          node {
            name
            url
            primaryLanguage {
              name
            }
            description
            stargazers {
              totalCount
            }
            forkCount
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
