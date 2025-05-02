<script lang="ts">
	import ProTitle from "./ProTitle.svelte";
	import Summary from "./Summary.svelte";

	import WorkCarousel from "$components/WorkCarousel/WorkCarousel.svelte";
  import selfie from "$assets/img/selfie.webp"
	import OfferedServices from "$components/OfferedServices/OfferedServices.svelte";

  export const aboutHeaderSizes = 'text-xl sm:text-2xl lg:text-4xl'
</script>

<div id="about" class="min-h-screen flex flex-col items-center bg-white pt-20 pb-10 space-y-14">
  <div id="personal-section" class="flex flex-row-reverse p-10">
    <!-- Selfied Image -->
    <img class="hidden sm:block w-auto rounded-md ml-6 mb-6 xl:m-0 h-[16em] sm:h-[24em] md:h-[36em] xl:h-[48em]" src={selfie} alt="self-portrait">
    <!-- Title and Summary -->
    <div id="title-and-summary-container" class="md:flex md:flex-col md:justify-center md:pb-24 md:space-y-16">
      <div class="flex items-center justify-between">
        <ProTitle class="mb-1 w-[10em] sm:w-auto" />
        <!-- Mobile Portrait -->
        <img id="mobile-portrait" class="w-auto rounded-md h-[12em] sm:hidden" src={selfie} alt="self-portrait">
      </div>
      <div id="summary-container" class="w-full max-w-6xl">
        <h4 class={`font-semibold mb-2 md:mb-4 ${aboutHeaderSizes}`}>About</h4>
        <Summary class="md:pr-16 text-md sm:text-xl lg:text-2xl" />
      </div>
    </div>
  </div>
  <OfferedServices class="" headerSize={aboutHeaderSizes} />
  <WorkCarousel class="px-20" headerSize={aboutHeaderSizes} />
</div>
