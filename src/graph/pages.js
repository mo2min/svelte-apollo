import { gql } from "apollo-boost";

export const ALL_PAGES = gql`
  {
    allPages {
      data {
        _id
        page
        content
      }
    }
  }
`;

export const ADD_PAGE = gql`
  mutation createPage($page: String!, $content: String!) {
    createPage(data: { page: $page, content: $content }) {
      _id
    }
  }
`;

export const FIND_PAGE = gql`
  query findPageByID($id: ID!) {
    findPageByID(id: $id) {
      _id
      page
      _ts
      content
    }
  }
`;

export const UPDATE_PAGE = gql`
  mutation updatePage($id: ID!, $page: String!, $content: String!) {
    updatePage(id: $id, data: { page: $page, content: $content }) {
      _id
    }
  }
`;

export const DELETE_PAGE = gql`
  mutation deletePage($id: ID!) {
    deletePage(id: $id) {
      _id
    }
  }
`;

export const INDEX_QUERY = gql`
  query index {
    repository(owner: "fireb1003", name: "alex24-live") {
      id
      content: object(expression: "master:index.md") {
        ... on Blob {
          text
        }
      }
      config: object(expression: "master:config.json") {
        ... on Blob {
          text
        }
      }
      pages: object(expression: "master:pages") {
        ... on Tree {
          entries {
            name
            object {
              ... on Blob {
                text
                byteSize
              }
            }
          }
        }
      }
    }
  }
`;
