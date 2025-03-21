<script lang="ts">
	import WorkCard from "$components/Portfolio/WorkCard.svelte";
	import ProTitle from "./ProTitle.svelte";
	import Summary from "./Summary.svelte";
  import chatIcon from "$assets/svg/chat.svelte"
  import computerIcon from "$assets/svg/computer.svelte"
  import gearIcon from "$assets/svg/gear.svelte"
  import serverIcon from "$assets/svg/server.svelte"
  import appIcon from "$assets/svg/app.svelte"
	import ServiceTile from "./ServiceTile.svelte";
</script>

<div id="about" class="flex flex-col items-center md:h-screen bg-white pt-20 space-y-20">
  
  <div class="w-full xl:max-w-6xl px-10 md:px-20 flex flex-row justify-end justify-self-center ">
    <ProTitle />
  </div>
  <div class="max-w-6xl px-10 md:px-20">
    <h4 class="text-3xl md:text-4xl font-semibold mb-2 md:mb-4">About</h4>
    <Summary />
  </div>
  <div class="flex flex-col w-full max-w-6xl px-20">
    <h1 class="text-4xl font-semibold mb-8">Services</h1>
    <div id="services-tile-container" class="flex flex-row flex-wrap justify-center sm:space-8">
      <ServiceTile name={'App Development'} icons={[appIcon, gearIcon]} />
      <ServiceTile name={'Consulting'} icons={[chatIcon]} />
      <ServiceTile name={'Hosting'} icons={[serverIcon]} />
      <ServiceTile name={'Static Site Development'} icons={[computerIcon]} />
    </div>
  </div>
  <div class="flex flex-col w-full max-w-6xl px-20">
    <h3 class="text-4xl font-semibold mb-4">My Work</h3>

    <div class="flex justify-center">
      <WorkCard name={"PIITA"} link={"https://piita.org"} thumbnail={'/img/piita.png'} />
      <WorkCard name={"OneSimplePhone"} link={"https://smscola.vippbx.com"} thumbnail={'/img/1sp.png'} />
      <WorkCard name={"Company C Ballet"} thumbnail={'/img/companyc.png'} />
      <WorkCard name={"KeepOurNetFree"} thumbnail={'/img/keepournetfree.png'} />
    </div>
  </div>
  
</div>

<style>
  
</style>