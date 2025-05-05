<script lang="ts">
  import Gear from "./gear.svelte";
  import App from "./app.svelte";
  type Props = { className?: string }
  let { className }: Props = $props();
</script>

<div id="app-gear-container" class={`relative flex flex-col justify-center items-center ${className}`}>
  <App className={'w-full'} />
  <Gear className={'w-[47%]'} />
</div>