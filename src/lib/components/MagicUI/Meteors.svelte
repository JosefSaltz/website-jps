<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  let { number = 10 } = $props();

  let meteorStyles: any = $state([]);
  let changeMeteors = (num: number) => {
    meteorStyles = [];
    const styles = [...new Array(num)].map(() => {
      // Spawn potentially between -40vw and up to 100+ vw for even spread
      
      const top = -20
      const left = (Math.random() * -50) + (Math.random() * 120) + "vw"
      return {
        top,
        left,
        animationDelay: Math.random() * 1 + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * 8 + 6) + "s",
      }
    });
    meteorStyles = styles;
  };
  onMount(() => {
    changeMeteors(number);
  });
  //   $: changeMeteors(number);
</script>

{#each meteorStyles as style, idx}
  <span
    id="meteor-{idx+1}"
    class={cn(
      "pointer-events-none absolute size-[2.4px] rotate-[215deg] long-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] z-0"
    )}
    style="
      top: {style.top}px; 
      left: {style.left}; 
      animation-delay: {style.animationDelay}; 
      animation-duration: {style.animationDuration};
    "
  >
    <!-- Meteor Tail  -->
    <div
      class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 via-blue-600/30 to-transparent"
    ></div>
  </span>
{/each}

<style>
  /* Tweaked Version of base class */
  @keyframes long_meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-64rem);
    opacity: 0;
  }
}

.long-meteor {
  animation: long_meteor 5s linear infinite;
}
</style>