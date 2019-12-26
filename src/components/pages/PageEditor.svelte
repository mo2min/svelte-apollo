<script>
  import { getClient, query } from "svelte-apollo";
  import { FIND_PAGE } from "../../graph/pages";
  export let params;
  let result = query(getClient(), {
    query: FIND_PAGE,
    variables: { id: params._id }
  });
</script>

<div>
  {#await $result}
    <p>.. loading</p>
  {:then data}
    {(console.log(data), '')} {data.data.findPageByID.page}
  {:catch e}
    {e}
  {/await}
</div>
