<script lang="ts">
	import PersonalSection from "$components/About/PersonalSection.svelte";
	import ScrollToSectionButton from "$components/Hero/ScrollToSectionButton.svelte";
  import OfferedServices from "$components/OfferedServices/OfferedServices.svelte";
  import WorkCarousel from "$components/WorkCarousel/WorkCarousel.svelte";
  
  let { sectionPaddingSizes = '' } = $props()
  // Responsive Sizing Strings
  const aboutHeaderSizes = 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
  const aboutContentSizes = 'sm:text-md md:text-lg lg:text-xl';
  const sharedContentSizing = {
    aboutHeaderSizes,
    aboutContentSizes
  };
</script>

<div id="about" class={`min-h-screen flex flex-col bg-white ${sectionPaddingSizes} space-y-14`}>
  <PersonalSection { ...sharedContentSizing } />
  <OfferedServices { ...sharedContentSizing } />
  <WorkCarousel { ...sharedContentSizing } />
  <!-- Desktop Button -->
  <div class={`
    hidden
    sm:flex flex-col items-center justify-center
  `}>
    <ScrollToSectionButton class={'hidden sm:block'} buttonText={"See The Tech"} targetID="#skills" />
  </div>
</div>
