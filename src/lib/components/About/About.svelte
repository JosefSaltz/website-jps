<script lang="ts">
	import PersonalSection from "$components/About/PersonalSection.svelte";
  import OfferedServices from "$components/OfferedServices/OfferedServices.svelte";
  import WorkCarousel from "$components/WorkCarousel/WorkCarousel.svelte";
  // Responsive Sizing Strings
  const aboutHeaderSizes = 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
  const aboutContentSizes = 'sm:text-md md:text-lg lg:text-xl';
  const sharedContentSizing = {
    aboutHeaderSizes,
    aboutContentSizes
  } ;
</script>

<div id="about" class="min-h-screen flex flex-col bg-white px-20 2xl:px-[48rem] py-20 space-y-14">
  <PersonalSection { ...sharedContentSizing } />
  <OfferedServices { ...sharedContentSizing } />
  <WorkCarousel { ...sharedContentSizing } />
</div>
