<script>
  import { getClient, query } from "svelte-apollo";
  import { ALL_PAGES } from "../../graph/pages";
  let result = query(getClient(), { query: ALL_PAGES });
  let src = "images/blank-page.svg";
  let greenPage = "images/blank-page-green.svg";
</script>

<style>
  img {
    max-width: 230px;
  }
</style>

<div class="inline-flex ">
  {#await $result}
    <p>.. loading</p>
  {:then data}
    {(console.log(data), '')}
    {#each data.data.allPages.data as { _id, page, content }, i}
      <div class="flex-1 m-8">
        <a href="#/page/{_id}">
          {#if content}
            <img src={greenPage} alt="blank page" width="100%" />
          {:else}
            <img {src} alt="blank page" width="100%" />
          {/if}
          <br />
          <b>{page}</b>
        </a>
      </div>
    {/each}

  {:catch e}
    {e}
  {/await}
</div>
