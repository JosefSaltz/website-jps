<script lang="ts">
	import type { Component, SvelteComponent } from "svelte";

  type Props = {
    name: string,
    icons: Component[]
  }
  let { name, icons }: Props = $props();
</script>

<div class="tile">
  <h3 class="h-10 pt-2">{ name }</h3>
  <div class="relative justify-center items-center">
    {#each icons as Icon, i}
      <Icon className={` w-32 sm:w-24`}></Icon>
    {/each}
  </div>
</div>

<style>
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 12rem;
    width: fit-content;
    min-width: 12rem;
    border: solid thin black;
    border-radius: 8px;

  }
</style>