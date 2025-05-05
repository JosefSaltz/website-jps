<script lang="ts">
	import Navbar from '$components/Navbar/Navbar.svelte';
import '../app.css';
	let { children } = $props();
</script>

{@render children()}
