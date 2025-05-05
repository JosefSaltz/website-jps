<script lang="ts">
	import About from "$components/About/About.svelte";
	import ContactMe from "$components/Contact/ContactMe.svelte";
	import Hero from "$components/Hero/Hero.svelte";
	import Skills from "$components/Skills/Skills.svelte";
	
	const sectionPaddingSizes = "px-10 py-20"
	const sharedContentSizes = 'sm:text-md md:text-lg lg:text-xl';
	const sharedHeaderSizes = 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
	const sharedProps = { sectionPaddingSizes, sharedContentSizes, sharedHeaderSizes }
</script>

<Hero />
<About {...sharedProps} />
<Skills {...sharedProps} />
<ContactMe {...sharedProps} />