import ApolloClient from "apollo-boost";

export const gitclient = new ApolloClient({
  // uri: "https://api.graphqlplaceholder.com/",
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        //authorization: `Bearer fnADf6-pRAACAuz6tgsIthhD6mg_OPXmSu3YXkqu`
        authorization: `Bearer 330455b8c34538339d2dafaf02fe0d7439273bae`, // github
      },
    });
  },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});
