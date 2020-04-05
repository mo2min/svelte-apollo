<script>
  import Router from "svelte-spa-router";
  import Index from "./Index.svelte";
  import Nav from "./components/Nav.svelte";
  import PageEditor from "./components/pages/PageEditor.svelte";
  import { setClient } from "svelte-apollo";
  import { client } from "./graph/graph";
  import { gitclient } from "./graph/gitgraph";
  setClient(gitclient);

  const routes = {
    "/": Index,
    "/page/:_id": PageEditor
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
