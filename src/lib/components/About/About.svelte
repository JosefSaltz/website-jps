<script lang="ts">
	import ProTitle from "./ProTitle.svelte";
	import Summary from "./Summary.svelte";
  import chatIcon from "$lib/assets/svg/chat.svelte"
  import computerIcon from "$lib/assets/svg/computer.svelte"
  import serverIcon from "$lib/assets/svg/server.svelte"
  import CombinedAppGear from "$lib/assets/svg/combined-app-gear.svelte";
	import ServiceTile from "./ServiceTile.svelte";
	import WorkCarousel from "$components/WorkCarousel/WorkCarousel.svelte";
</script>

<div id="about" class="min-h-screen flex flex-col items-center bg-white py-20 space-y-14">
  <div class="w-full xl:max-w-6xl px-10 md:px-20 flex flex-row justify-end justify-self-center ">
    <ProTitle />
  </div>
  <div id="summary-container" class="max-w-6xl px-10 md:px-20">
    <h4 class="text-3xl md:text-4xl font-semibold mb-2 md:mb-4">About</h4>
    <Summary />
  </div>
  <div id="services" class="w-full md:max-w-6xl flex flex-col">
    <h1 class="text-4xl font-semibold mb-8 self-start px-10 md:px-20">Services</h1>
    <div id="services-tile-container" class="flex flex-wrap md:flex-row justify-center sm:space-x-8 md:space-x-18">
      <ServiceTile name={'App Development'} icons={[CombinedAppGear]} />
      <ServiceTile name={'Consulting'} icons={[chatIcon]} />
      <ServiceTile name={'Hosting'} icons={[serverIcon]} />
      <ServiceTile name={'Web Sites'} icons={[computerIcon]} />
    </div>
  </div>
  <WorkCarousel />
</div>