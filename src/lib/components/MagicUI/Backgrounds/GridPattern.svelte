<script lang="ts">
  import { cn } from "$lib/utils";
  import { browser } from '$app/environment';
  let { 
    width = 40, 
    height = 40,
    x = -1,
    y = -1,
    strokeDashArray = "",
    squares = [[0, 0]],
    className = "",
    fillColor = "rgb(156 163 175 / 0.3)", // rgb(156 163 175 / 0.3)
    strokeWidth = 1,
    ...otherProps
  } = $props();

  let id = $state<string | null>(null);
  if(browser) id = crypto.randomUUID().toString().slice(0, 8);
</script>

{#if id}
<svg
  aria-hidden="true"
  class={cn(
    "h-full w-full pointer-events-none absolute inset-0",
    className
  )}
  {...otherProps}
  stroke={fillColor}
  stroke-width={strokeWidth}
>
  <defs>
    <pattern {id} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
      <path
        d="M.5 {height}V.5H{width}"
        fill="none"
        stroke-dasharray={strokeDashArray}
      />
    </pattern>
  </defs>
  <rect width="100%" height="100%" stroke-width={0} fill="url(#{id})" />
  {#if squares}
    <svg {x} {y} class="overflow-visible">
      {#each squares as sq}
        <rect
          stroke={fillColor}
          fill="none"
          stroke-width="0"
          width={width - 1}
          height={height - 1}
          x={sq[0] * width + 1}
          y={sq[1] * height + 1}
        />
      {/each}
    </svg>
  {/if}
</svg> 
{/if}

