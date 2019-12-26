<script>
  import { getContext } from "svelte";
  import Add from "./sites/Add.svelte";

  const { open } = getContext("simple-modal");

  const showContent = () => {
    open(Add, { message: "It's a modal!" });
  };
</script>

<p>
  <button on:click={showContent}>Show me a Add!</button>
</p>
