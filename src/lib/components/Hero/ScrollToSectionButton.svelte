<script lang="ts">
  import ShimmerButton from "$components/MagicUI/ShimmerButton.svelte";
  
  let { class: className ='', targetID ="#", buttonText = '' } = $props()
</script>

<div class={`${className}`}>
  <a href={targetID} class="text-white text-center">
    <ShimmerButton>
      { buttonText }
    </ShimmerButton>
  </a>
</div> 