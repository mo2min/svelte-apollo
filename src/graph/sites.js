import { gql } from "apollo-boost";

export const ALL_SITES = gql`
  {
    allSites {
      data {
        _id
        name
        handle
      }
    }
  }
`;

export const ADD_SITE = gql`
  mutation createSite($name: String!) {
    createSite(data: { name: $name, handle: $name }) {
      _id
    }
  }
`;
