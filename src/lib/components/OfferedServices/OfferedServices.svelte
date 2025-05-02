<script lang="ts">
  import chatIcon from "$lib/assets/svg/chat.svelte"
  import computerIcon from "$lib/assets/svg/computer.svelte"
  import serverIcon from "$lib/assets/svg/server.svelte"
  import CombinedAppGear from "$lib/assets/svg/combined-app-gear.svelte";
	import ServiceTile from "$components/OfferedServices/ServiceTile.svelte";

  let { class: className = '', headerSize = '' } = $props();
</script>

<div id="services" class={`w-full flex flex-col items-center px-10 ${className}`}>
  <h1 class={`font-semibold mb-8 self-start ${headerSize}`}>Services</h1>
  <div id="services-tile-container" class="flex flex-wrap md:flex-row justify-center sm:space-x-8 md:space-x-18">
    <ServiceTile name={'App Development'} icons={[CombinedAppGear]} />
    <ServiceTile name={'Consulting'} icons={[chatIcon]} />
    <ServiceTile name={'Hosting'} icons={[serverIcon]} />
    <ServiceTile name={'Web Sites'} icons={[computerIcon]} />
  </div>
</div>