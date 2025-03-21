<script lang="ts">
  import ShimmerButton from "$components/MagicUI/ShimmerButton.svelte";
  type Props = { className?: string }
  let { className }: Props = $props()
</script>

<div class={`${className}`}>
  <a href="#about" class="text-white text-center">
    <ShimmerButton>
      Let's Go
    </ShimmerButton>
  </a>
</div> 