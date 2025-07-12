<script lang="ts">
	import OrbitingCircles from "$components/MagicUI/OrbitingCircles.svelte";
  import { SkillCategories } from "$assets/svg/skills/index"

  let logoClicked = $state(false);

  const sortFn = (val: number) => {
    if(val > 0) return -1;
    if(val < 0) return 1;
    return 0;
  }
  let svgList = $state(
    // Create a length sorted list of svg category lists
    Object.values(SkillCategories).sort((category) => sortFn(category.length))
  );
</script>

{#each svgList as category, i}
  {#each category as Logo, j}
    <div class="rounded-lg border-dashed border-black border-2">
      <OrbitingCircles class={`aspect-square bg-transparent border-none ${logoClicked ? 'animate-pause' : ''}`} delay={j} radius={(10 * i) + 400} reverse={Boolean(i % 2)}> 
        <Logo class="aspect-square h-24 hover:scale-100 hover:cursor-pointer transition-transform"></Logo>
      </OrbitingCircles>
    </div>
  {/each}
{/each}