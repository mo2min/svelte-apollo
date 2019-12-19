<script>
import ApolloClient from "apollo-boost";
  import { setClient, getClient, query, mutate } from "svelte-apollo";
  import { gql } from "apollo-boost";

  export let name;

  const client = new ApolloClient({
    // uri: "https://api.graphqlplaceholder.com/",
    uri: "https://graphql.fauna.com/graphql",
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: `Bearer fnADf6-pRAACAuz6tgsIthhD6mg_OPXmSu3YXkqu` 
        }
      })
    },
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    }
  });

  setClient(client);
  const GET_POST = gql`
  {
    post(postId:5){
      title
    }
  }
  `;

  const ALL_WAREHOUSES = gql`
  {
    allWarehouses{
      data{
        name
      }
    }
  }
  `;

  const newclient = getClient();
  const todoOp = query(newclient, { query: ALL_WAREHOUSES });
</script>

<main>
	<h1>Hello {name} !</h1>
	<div>
    {#await $todoOp}
      <p>.. loading</p>
    {:then data}
      {(console.log(data), '')}
      <!--
      {data.data.post.title}
      -->
      <h2> {data.data.allWarehouses.data[0].name} </h2>
     
    {:catch e}
      {e}
    {/await}
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>