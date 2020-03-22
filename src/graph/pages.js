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
