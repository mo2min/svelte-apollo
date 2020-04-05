import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  // uri: "https://api.graphqlplaceholder.com/",
  uri: "https://graphql.fauna.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        //authorization: `Bearer fnADf6-pRAACAuz6tgsIthhD6mg_OPXmSu3YXkqu` // for aka_cms
        authorization: `Bearer fnADgd8KwmACC1ynjgxPDjFn_B4Fcse27yGKGUU6`, // Fauna for sapperland
      },
    });
  },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});
