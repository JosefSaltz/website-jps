<script lang="ts">
	import ProTitle from "./ProTitle.svelte";
	import Summary from "./Summary.svelte";
</script>

<div id="about" class="flex flex-col items-center h-screen bg-white pt-20 space-y-20">
  <div class="w-full max-w-6xl flex flex-row justify-end justify-self-center">
    <ProTitle />
  </div>
  <div class="max-w-6xl">
    <Summary />
  </div>
  <div class="flex flex-col w-full max-w-6xl">
    <h1 class="text-5xl">Services</h1>
    <div id="services-tile-container" class="flex flex-row justify-center space-x-8">
      <div class="service-tile">
        <h3>Consulting</h3>
      </div>
      <div class="service-tile">
        <h3>Static Site Development</h3>
      </div>
      <div class="service-tile">
        <h3>Hosting Solutions</h3>
      </div>
      <div class="service-tile">
        <h3>Web App Development</h3>
      </div>
    </div>
  </div>
  <div>
    <h1>My Work</h1>
  </div>
</div>

<style>
  .service-tile {
    border: solid thin black;
    height: 12rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>