<script>
  import { getClient, query, mutate } from "svelte-apollo";
  import { FIND_PAGE, UPDATE_PAGE } from "../../graph/pages";
  import Markdown from "../Markdown.svelte";
  export let params;
  let result = query(getClient(), {
    query: FIND_PAGE,
    variables: { id: params._id }
  });
</script>

{#await $result}
  <p>.. loading</p>
{:then data}
  <!--
    <span on:click={() => console.log(data.data.findPageByID.content)}>
      Log
    </span>
    -->

  <Markdown
    title={data.data.findPageByID.page}
    md={data.data.findPageByID.content}
    on:save={async e => {
      await mutate(getClient(), {
        mutation: UPDATE_PAGE,
        variables: {
          id: data.data.findPageByID._id,
          page: data.data.findPageByID.page,
          content: e.detail.md
        }
      });
      location.reload();
    }} />
{:catch e}
  {e}
{/await}
