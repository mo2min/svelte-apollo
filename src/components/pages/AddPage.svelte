<script>
  import { createEventDispatcher } from "svelte";
  import { getClient, mutate } from "svelte-apollo";
  import { ADD_PAGE } from "../../graph/pages";
  let page = "";
  const dispatch = createEventDispatcher();

  async function handleCreate() {
    console.log(page);
    await mutate(getClient(), {
      mutation: ADD_PAGE,
      // STOP YOU USED ID INSTEAD OF REF ,,, good app should catch it !!?
      variables: { page: page, content: "", site_ref: "262181209679856139" }
    });
    dispatch("PAGE_ADDED_EVT", page);
    page = "";
  }
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
    on:click={handleCreate}
    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
    hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
    type="button">
    Add
  </button>
</div>
