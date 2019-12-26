<script>
  import { getClient, query } from "svelte-apollo";
  import { ALL_PAGES } from "../../graph/pages";
  let result = query(getClient(), { query: ALL_PAGES });
  let src = "blank-page.svg";
</script>

<style>
  img {
    max-width: 230px;
  }
</style>

<div>
  {#await $result}
    <p>.. loading</p>
  {:then data}
    {(console.log(data), '')}
    {#each data.data.allPages.data as { _id, page }, i}
      <a href="#/page/{_id}">
        <img {src} alt="blank page" />
        {page}
      </a>
    {/each}

  {:catch e}
    {e}
  {/await}
</div>
