<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { searchItems } from "@esri/arcgis-rest-portal";
  import type { ISearchOptions, IItem } from "@esri/arcgis-rest-portal";
  import Item from "./Item.svelte";

  let items: IItem[];
  $: items = [];

  /**
   * Compare newItems to existing (`items`) and insert new only.
   * @param newItems
   */
  const mergeItems = (newItems) => {
    if (items && items.length > 0) {
      // item hash is ID + modified date
      const itemHashes = new Set(
        items.map((item) => {
          return `${item.id}-${item.modified}`;
        })
      );

      newItems = newItems.map((item) => {
        const hash = `${item.id}-${item.modified}`;
        if (!itemHashes.has(hash)) {
          item.new = true;
        }
        return item;
      });
      items = newItems;
    } else {
      items = newItems;
    }
  };

  const looper = async () => {
    const searchOptions: ISearchOptions = {
      q: '((type: "Web Scene"))',
      sortField: "modified",
      sortOrder: "desc",
      num: 50,
    };
    const searchItemsResults = await searchItems(searchOptions);
    mergeItems(searchItemsResults.results);

    const duration = 10000;
    setTimeout(looper, duration);
    dispatch("resetTimer", duration);
  };

  onMount(async () => {
    looper();
  });
</script>

<div>
  <div class="itemsWrapper">
    <!-- `https://www.arcgis.com/home/item.html?id=${item.id}` -->
    {#each items as item (item.id + item.modified)}
      <Item {item} />
    {/each}
  </div>
</div>

<style>
  .itemsWrapper {
    padding-top: 20px;
  }
</style>
