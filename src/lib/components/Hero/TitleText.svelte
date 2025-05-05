<script lang="ts">
  let {className} = $props()
</script>

<h1 
  class={`
    text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 
    font-semibold tracking-tight whitespace-pre-wrap
    bg-gradient-to-br from-white to-slate-500/40 
    text-transparent bg-clip-text ${className}
  `}>
  Build With The Power Of The <span class="text-sky-700">Web</span>
</h1>