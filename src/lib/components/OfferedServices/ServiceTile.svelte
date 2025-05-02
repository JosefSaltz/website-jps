<script lang="ts">
  type Props = {
    name: string,
    icons: any[]
  }
  let { name, icons, class: className = '' }: Props = $props();

  let mouseCoords = { x: 0, y: 0 };

  function handleMousemove(event: Event) {
    mouseCoords.x = event.clientX;
    mouseCoords.y = event.clientY;
  }

</script>

<div class={`tile m-2 max-w-40 w-fit md:w-40 md:max-w-full hover:scale-[120%] transition-transform ${className}`} role="presentation" onmouseenter={handleMousemove}>
  <!-- Tile Name -->
  <h3 class="md:text-lg">{ name }</h3>
  <!-- Icon -->
  <div class="flex flex-col justify-center items-center">
    {#each icons as Icon, i}
      <Icon className={`w-[32%] md:w-[38%]`}></Icon>
    {/each}
  </div>
</div>

<style>
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    border: solid thin black;
    border-radius: 8px;
  }
</style>