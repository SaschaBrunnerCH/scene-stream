<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { IItem } from "@esri/arcgis-rest-portal";

  export let item: IItem;
  let dateString = "";

  $: {
    const itemDate = new Date(item.modified);

    dateString = new Intl.DateTimeFormat([], {
      timeStyle: "medium",
    }).format(itemDate);
  }
</script>

<div
  class="item card card-wide trailer-1"
  class:new={item.new === true}
  in:fly={{ y: -200, duration: 1000 }}
>
  <figure class="card-wide-image-wrap">
    {#if item.thumbnail}
      <a
        href={`https://www.arcgis.com/home/webscene/viewer.html?webscene=${item.id}`}
        target="_blank"
        aria-label={`${item.title}: Open in scene viewer`}
        title={`${item.title}: Open in scene viewer`}
        ><img
          class="card-wide-image"
          src={`https://www.arcgis.com/sharing/rest/content/items/${item.id}/info/${item.thumbnail}`}
          alt={`${item.title}: Scene thumbanil`}
        /></a
      >
    {/if}
  </figure>

  <div class="card-content">
    <h4 class="trailer-half">
      <a
        href={`https://www.arcgis.com/home/webscene/viewer.html?webscene=${item.id}`}
        target="_blank">{item.title}</a
      >
    </h4>

    <p class="font-size--1 trailer-half" style="min-height: 50px;">
      {#if item.snippet}
        {item.snippet}
      {:else}
        &nbsp;
      {/if}
    </p>

    <p class="font-size--3 trailer-half leader-quarter text-darker-gray">
      <span class="inline-block margin-right-1">Updated: {dateString}</span>
      <span class="inline-block margin-right-1"
        >View Count: {item.numViews.toLocaleString("en-US")} views</span
      >
      <span class="inline-block margin-right-1 card-created"
        >Owner: {item.owner}</span
      >
    </p>
  </div>
</div>

<style>
  .item {
    transition: background-color 1s linear;
  }
  .item.new {
    background-color: rgba(155, 193, 156, 0.2);
  }
</style>
