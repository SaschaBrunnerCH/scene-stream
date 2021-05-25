<script lang="ts">
  import UpdatingMapList from "./UpdatingMapList.svelte";
  import Swal from "sweetalert2";
  import ProgressBar from "./progressBar.svelte";

  let progressBarElement;
</script>

<div class="grid-container">
  <div class="column-24">
    <nav
      class="class-top-nav-list right"
      role="navigation"
      aria-labelledby="usernav"
    >
      <button
        class="btn btn-transparent margin-left-1"
        on:click={() => {
          Swal.fire({
            title: "About Scene Stream",
            html: `<p>This web app shows the most recently updated public web scenes in ArcGIS Online. More info on <a href="https://github.com/SaschaBrunnerCH/scene-stream">GitHub</a>.</p>
              <p>Created by <a href="https://gavinr.com">Gavin Rehkemper</a> and adopted for scene by <a href="https://github.com/SaschaBrunnerCH">Sascha Brunner</a>.</p>`,
            showCloseButton: true,
            showConfirmButton: false,
          });
        }}
      >
        <span class="icon-ui-question" />
      </button>
      <div
        class="margin-left-1"
        style="display: inline-block; padding: 0.375rem 1rem;"
      >
        <ProgressBar bind:this={progressBarElement} />
      </div>
    </nav>

    <h1>Scene Stream</h1>

    <UpdatingMapList
      on:resetTimer={(res) => {
        progressBarElement.reset(res.detail);
      }}
    />
  </div>
</div>

<style>
  button {
    float: right;
  }
</style>
