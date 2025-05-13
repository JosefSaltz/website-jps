<script lang="ts">
  import selfie from "$assets/img/selfie.webp"
  import ProTitle from "$components/About/ProTitle.svelte";
  import Summary from "$components/About/Summary.svelte";
  
  let { 
    class: className = '', 
    aboutHeaderSizes, 
    aboutContentSizes 
  } = $props();
  
  const desktopPortraitSizes = 'h-[16rem] sm:h-[24rem] md:h-[32rem] xl:h-[44rem]';
</script>

<section id="personal-section" class={`flex ${className}`}>
  <div id="summary-and-desktop-portrait" class="flex max-w-[100rem]">
    <!-- Title and Summary -->
    <div id="title-and-summary-container" class="md:flex md:flex-col md:pb-24 md:space-y-10">
      <div id="title-and-mobile-portrait" class="w-full flex justify-between">
        <ProTitle class="w-[10em] sm:w-auto" />
        <!-- Mobile Portrait -->
        <img id="mobile-portrait" class="w-auto rounded-md h-[12em] sm:hidden" src={selfie} alt="self-portrait">
      </div>
      <div id="summary-container" class="w-full max-w-6xl">
        <h4 class={`font-semibold mb-2 md:mb-4 ${aboutHeaderSizes}`}>About</h4>
        <Summary class={`md:pr-8 lg:pr-16 text-md ${aboutContentSizes}`} />
      </div>
    </div>
    <!-- Desktop Portrait -->
    <img class={`hidden w-auto sm:block rounded-md ml-6 mb-6 xl:m-0 ${desktopPortraitSizes} shadow-lg`} src={selfie} alt="self-portrait">
  </div>
</section>