<script lang="ts">
	import ProTitle from "./ProTitle.svelte";
	import Summary from "./Summary.svelte";

	import WorkCarousel from "$components/WorkCarousel/WorkCarousel.svelte";
  import selfie from "$assets/img/selfie.webp"
	import OfferedServices from "$components/OfferedServices/OfferedServices.svelte";
</script>

<div id="about" class="min-h-screen flex flex-col items-center bg-white py-20 space-y-14">
  <div id="personal-section" class="flex flex-row-reverse p-10">
    <img class="w-auto rounded-sm ml-6 mb-6 xl:m-0 h-[16em] sm:h-[24em] md:h-[48em]" src={selfie} alt="self-portrait">
    <div class="md:flex md:flex-col md:justify-center md:pb-24 md:space-y-16">
      <ProTitle class="mb-10" />
      <div id="summary-container" class="w-full max-w-6xl md:px-20">
        <h4 class="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">About</h4>
        <Summary class="md:pr-16" />
      </div>
    </div>
  </div>
  <OfferedServices />
  <WorkCarousel />
</div>
