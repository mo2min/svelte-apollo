<script>
  import { createEventDispatcher } from "svelte";
  import { getClient, mutate } from "svelte-apollo";
  import { ADD_PAGE } from "../../graph/pages";
  let page = "";
</script>

<div>
  <b>Add new Page</b>
  <input
    type="text"
    name="page"
    id="page"
    bind:value={page}
    placeholder="page name" />

  <button
    on:click={async () => {
      await mutate(getClient(), {
        mutation: ADD_PAGE,
        variables: { page: page, content: '' }
      });
      page = '';
      location.reload();
    }}
    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
    hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
    type="button">
    Add
  </button>
</div>
