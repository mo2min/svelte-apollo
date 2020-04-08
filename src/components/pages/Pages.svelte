<script>
  import { getClient, query, mutate } from "svelte-apollo";
  import { DELETE_PAGE } from "../../graph/pages";
  import { createEventDispatcher } from "svelte";
  import { Confirm } from "svelte-confirm";
  import { getContext } from "svelte";

  export let pages;
  const dispatch = createEventDispatcher();
  let client = getClient();
  let site_ref = getContext("ctx");
  let src = "images/blank-page.svg";
  let greenPage = "images/blank-page-green.svg";

  async function handleDelete(_id) {
    await mutate(client, {
      mutation: DELETE_PAGE,
      variables: { id: _id }
    });
    dispatch("PAGE_DELETED_EVT");
  }
</script>

<style>
  img {
    max-width: 230px;
  }
</style>

<div class="inline-flex ">
  {(console.log(pages), '')} Selected_Site: {$site_ref.site_ref}
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
      <Confirm let:confirm={confirmThis}>
        <div
          on:click={() => confirmThis(handleDelete, _id)}
          class="text-red-500 font-bold">
          DELETE
        </div>
      </Confirm>
    </div>
  {/each}
</div>
