<script>
  import Router from "svelte-spa-router";
  import Index from "./Index.svelte";
  import Nav from "./components/Nav.svelte";
  import FaunaIndex from "./FaunaIndex.svelte";
  import PageEditor from "./components/pages/PageEditor.svelte";
  import { setClient } from "svelte-apollo";
  import { client } from "./graph/graph";
  setClient(client);

  const routes = {
    "/": Index,
    "/page/:_id": PageEditor,
    "/fauna": FaunaIndex
  };
</script>

<style>
  main {
    text-align: center;

    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Nav />
<main class="">

  <Router {routes} />
</main>
