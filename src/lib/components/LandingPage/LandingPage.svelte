<script>
	import Meteors from "$components/Meteors/Meteors.svelte";

</script>
<div id="landing-page-container" class="flex flex-col justify-center items-center h-full w-full bg-slate-900">
  <div
  class="relative flex w-full h-[100vh] justify-center overflow-hidden bg-background p-20 md:shadow-xl "
  >
    <Meteors number={1000} />
    <div id="container-title-text" class="h-fit bg-clip-text text-white">
      <h1 class="justify-self-end z-10 whitespace-pre-wrap text-center text-7xl tracking-tight font-semibold bg-gradient-to-br from-white to-slate-500/40 text-transparent bg-clip-text">Build With The Power Of The Web</h1>
      <h2 class="text-5xl font-semibold self-end">Josef Saltz</h2>
      <h2 class="text-4xl self-end">Full Stack Developer</h2>
    </div>
  </div>  
</div>

<style>

</style>