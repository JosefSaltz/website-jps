<script lang="ts">
	import { onMount } from "svelte";

  let scrollPosition = $state(0)
  let scrollDirection = $state(0)
  let isHidden = $derived(!scrollDirection)
  
  const handleScroll = (e: Event) => {
    scrollDirection = window.scrollY > scrollPosition ? 1 : -1;
    scrollPosition = window.scrollY
  }

  onMount(() => {
    document.addEventListener("scroll", handleScroll);
  })
</script>

<nav id="navbar" class={`
  ${isHidden ? 'h-0' : 'h-16'} w-full 
  fixed top-0 z-[100] flex
  transition-all ease-in-out 
  bg-white`
}>
  <ul class="flex w-full items-center justify-center lg:text-lg font-semibold list-none">
    <a class="navlink" href="#hero"><li>Home</li></a>
    <a class="navlink" href="#about"><li>About</li></a>
    <a class="navlink" href="#skills"><li>Skills</li></a>
    <a class="navlink" href="#contact"><li>Contact</li></a>
  </ul>
</nav>

<style>
  li:hover {
    background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
  }
  li {
    padding: 1rem;
  }
</style>