<script>
  import marked from "marked";
  import { createEventDispatcher } from "svelte";
  import nunjucks from "nunjucks";
  nunjucks.configure({ autoescape: true });

  const nunme = function(what) {
    let returned = "";
    try {
      returned = nunjucks.renderString(what, {
        data: { title: "خراشي", testing: "تجربة" },
        count: 10
      });
    } catch (error) {
      //console.error(error);
      returned = what;
    }
    return returned;
  };

  const dispatch = createEventDispatcher();
  export let md;
  export let title;
  const saveContent = () => {
    dispatch("save", { md });
  };
  document.onkeydown = function(e) {
    if (e.ctrlKey && String.fromCharCode(e.which).toLowerCase() == "s") {
      e.preventDefault(); // prevent save whole page
      saveContent();
    }
  };
</script>

<style>
  .header {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .markdown-editor {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .left-panel,
  .right-panel {
    width: 50%;
    border: solid 1px black;
    height: 70vh;
    background: #ffffff;
  }
  .right-panel {
    overflow: auto;
  }
  .source {
    border: none;
    width: 100%;
    height: 100%;
    direction: rtl;
    background: #001628;
    color: #83ba52;
  }
  .source:focus {
    outline: none;
  }
  .output {
    padding: 1em;
    text-align: right;
    direction: rtl;
  }
</style>

<main class="bg-secondary py-4 px-8">
  <header class="header">
    <h1 class="text-teal-800">{title}</h1>
  </header>

  <div class="markdown-editor">
    <div class="left-panel">
      <textarea bind:value={md} class="source" />
    </div>

    <div class="right-panel">
      <div class="output">
        {@html marked(nunme(md), { breaks: true })}
      </div>
    </div>
  </div>
  <button
    class="bg-primary hover:bg-blue-300 text-white font-bold py-2 px-4 rounded
    mt-2"
    on:click={saveContent}>
    Save
  </button>
</main>
