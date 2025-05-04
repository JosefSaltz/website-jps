<script lang="ts">
  import chatIcon from "$lib/assets/svg/chat.svelte"
  import computerIcon from "$lib/assets/svg/computer.svelte"
  import serverIcon from "$lib/assets/svg/server.svelte"
  import CombinedAppGear from "$lib/assets/svg/combined-app-gear.svelte";
	import ServiceTile from "$components/OfferedServices/ServiceTile.svelte";

  let { class: className = '', aboutHeaderSizes } = $props();
</script>

<div id="services" class={`${className}`}>
  <h1 class={`font-semibold mb-8 ${aboutHeaderSizes}`}>Services</h1>
  <div id="services-tile-container" class="w-full flex justify-center flex-wrap md:flex-row sm:space-x-12 md:space-x-16">
    <ServiceTile name={'App Development'} icons={[CombinedAppGear]} />
    <ServiceTile name={'Consulting'} icons={[chatIcon]} />
    <ServiceTile name={'Hosting'} icons={[serverIcon]} />
    <ServiceTile name={'Web Sites'} icons={[computerIcon]} />
  </div>
</div>