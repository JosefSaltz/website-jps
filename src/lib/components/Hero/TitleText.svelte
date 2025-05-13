<script lang="ts">
  let {className} = $props()
</script>

<h1 
  class={`
    w-[10ch] text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl
    relative z-50 
    font-semibold tracking-tight whitespace-pre-wrap
    bg-gradient-to-br from-white to-slate-500/40 
    text-transparent bg-clip-text ${className}
  `}>
  Build With The Power Of The <span class="bg-gradient-to-br from-sky-700 to-slate-600/40 text-transparent bg-clip-text">Web</span>
</h1>