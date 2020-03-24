<script>
  import { getClient, query, mutate } from "svelte-apollo";
  import { DELETE_PAGE } from "../../graph/pages";
  import { createEventDispatcher } from "svelte";

  export let pages;
  const dispatch = createEventDispatcher();
  let client = getClient();

  let src = "images/blank-page.svg";
  let greenPage = "images/blank-page-green.svg";

  async function handleDelete(_id){
    await mutate( client, {
      mutation: DELETE_PAGE,
      variables: { id: _id }
    });
    dispatch('PAGE_DELETED_EVT' );
  }

</script>

<style>
  img {
    max-width: 230px;
  }
</style>

<div class="inline-flex ">
  {(console.log(pages), '')}
  {#each pages as { _id, page, content }, i}
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
      <div on:click={()=>handleDelete(_id)}>DELETE</div>
    </div>
  {/each}
</div>
