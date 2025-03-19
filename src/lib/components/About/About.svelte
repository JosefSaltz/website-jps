<script lang="ts">
	import Social from "$components/Portfolio/Social.svelte";
	import WorkCard from "$components/Portfolio/WorkCard.svelte";
	import ProTitle from "./ProTitle.svelte";
	import Summary from "./Summary.svelte";

</script>

<div id="about" class="flex flex-col items-center h-screen bg-white pt-20 space-y-20">
  <div class="w-full xl:max-w-6xl flex flex-row justify-end justify-self-center px-20">
    <ProTitle />
  </div>
  <div class="max-w-6xl px-20">
    <h4 class="text-4xl font-semibold mb-4">About</h4>
    <Summary />
  </div>
  <div class="flex flex-col w-full max-w-6xl px-20">
    <h1 class="text-4xl font-semibold mb-8">Services</h1>
    <div id="services-tile-container" class="flex flex-row justify-center space-x-8">
      <div class="tile">
        <h3>Consulting</h3>
      </div>
      <div class="tile">
        <h3>Static Site Development</h3>
      </div>
      <div class="tile">
        <h3>Hosting Solutions</h3>
      </div>
      <div class="tile">
        <h3>Web App Development</h3>
      </div>
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
  .tile {
    border: solid thin black;
    border-radius: 8px;
    height: 12rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>