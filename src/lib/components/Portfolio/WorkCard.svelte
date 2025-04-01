<script lang="ts">
  type Props = {
    name: string,
    link?: string
    thumbnail: string
  }
  let { name, link, thumbnail }: Props = $props()
</script>

<div class="work-card flex justify-center items-center rounded-lg aspect-[3/2] min-w-10 max-w-40 bg-[{thumbnail}] text-center border-black border-[1px]">
  <a href={link}>{name}</a>
</div>

<style>
  .work-card {
    aspect-ratio: 1/1;
  }
</style>