<script lang="ts">
  type Props = {
    name: string,
    link?: string
    thumbnail: string
  }
  let { name, link, thumbnail }: Props = $props()
</script>

<div class="rounded-lg overflow-hidden">
  <a href={link} role="button" aria-label="name">
    <img src={thumbnail} class="" alt={name} />
  </a>
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