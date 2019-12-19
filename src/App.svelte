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

  <div class="flex bg-blue-600 text-white text-sm font-bold px-4 py-3" role="alert">
    <svg class="fill-current text-yellow-300 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
    <p class="flex-auto justify-center"> Svelte + Apollo Client + Tailwind = Magic ! 🔮</p>
  </div>

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