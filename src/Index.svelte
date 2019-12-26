<script>
  import { getClient, query } from "svelte-apollo";
  import { HELLO } from "./graph/graph";
  import SelectSite from "./components/sites/Select.svelte";
  import AddPage from "./components/pages/AddPage.svelte";
  import Pages from "./components/pages/Pages.svelte";

  let result = query(getClient(), { query: HELLO });
</script>

<div>
  {#await $result}
    <p>.. loading</p>
  {:then data}
    {(console.log(data), '')}
    <h2>{data.data.sayHello}</h2>
  {:catch e}
    {e}
  {/await}
</div>
<SelectSite />
<Pages />
<hr />
<AddPage />
