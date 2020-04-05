import ApolloClient from "apollo-boost";

export const gitclient = new ApolloClient({
  // uri: "https://api.graphqlplaceholder.com/",
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer 85a3b062db9be4f240bf9e9937737f014722bb87`, // github fireb1003 Svelte Planner
      },
    });
  },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});
