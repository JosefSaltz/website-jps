<script lang="ts">
	import About from "$components/About/About.svelte";
	import ContactForm from "$components/Forms/ContactForm.svelte";
	import Hero from "$components/Hero/Hero.svelte";
	import Skills from "$components/Skills/Skills.svelte";
	
	const sectionPaddingSizes = "px-10 py-20" as Tailwind
	const sharedProps = { sectionPaddingSizes }
</script>

<Hero />
<About {...sharedProps} />
<Skills {...sharedProps} />
<ContactForm {...sharedProps} />