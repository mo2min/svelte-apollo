<script>
  import { createEventDispatcher } from "svelte";
  import { getClient, mutate } from "svelte-apollo";
  import { ADD_SITE } from "../../graph/sites";
  const dispatch = createEventDispatcher();
  let sitename = "";
</script>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>

<h2>🎉 Add Site 🍾</h2>
<form class="w-full max-w-sm">
  <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
    <input
      bind:value={sitename}
      class="appearance-none bg-transparent border-none w-full text-gray-700
      mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="text"
      placeholder="Site Name" />
    <button
      on:click={async () => {
        await mutate(getClient(), {
          mutation: ADD_SITE,
          variables: { name: sitename }
        });
        dispatch('fireit', { name: sitename });
      }}
      class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
      hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      type="button">
      Add
    </button>
    <button
      class="flex-shrink-0 border-transparent border-4 text-teal-500
      hover:text-teal-800 text-sm py-1 px-2 rounded"
      type="button">
      Cancel
    </button>
  </div>
</form>
