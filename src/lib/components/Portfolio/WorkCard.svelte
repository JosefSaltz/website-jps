<script lang="ts">
  type Props = {
    name: string,
    link?: string
    thumbnail: string
  }
  let { name, link, thumbnail }: Props = $props()
</script>

<div class="rounded-lg shadow-md aspect-[3/2] min-w-10 max-w-40 bg-[{thumbnail}] text-center">
  <a href={link}>{name}</a>
</div>