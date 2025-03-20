<script lang="ts">
  type Props = { className?: string }
  let { className }: Props = $props()
</script>

<div class={`${className} flex-col flex-shrink justify-center`}>
  <a href="#about" class="text-white text-center">Let's Go</a>
</div> 