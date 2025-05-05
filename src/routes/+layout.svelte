<script lang="ts">
	import Navbar from '$components/Navbar/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
</script>

{@render children()}
