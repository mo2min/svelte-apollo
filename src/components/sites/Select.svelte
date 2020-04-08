<script>
  import { getClient, query } from "svelte-apollo";
  import { ALL_SITES } from "../../graph/sites";
  import Modal from "../Modal.svelte";
  import ModalContent from "../ModalContent.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let selected;
  let result = query(getClient(), { query: ALL_SITES });
</script>

<div>
  {#await $result}
    <p>.. loading</p>
  {:then data}
    {(console.log(data), '')}
    <div class="inline-block relative w-64">
      <select
        on:change={e => {
          console.log(e.target.value);
          dispatch('change_site', e.target.value);
        }}
        value={selected}
        class="block appearance-none w-full bg-white border border-gray-400
        hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight
        focus:outline-none focus:shadow-outline">
        {#each data.data.allSites.data as { _id, name }, i}
          <option value={_id}>{name}</option>
        {/each}
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center
        px-2 text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
            4.343 8z" />
        </svg>
      </div>
    </div>
  {:catch e}
    {e}
  {/await}
  <Modal>
    <ModalContent />
  </Modal>
</div>
