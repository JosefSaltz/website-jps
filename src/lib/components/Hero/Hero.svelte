<script lang="ts">
  import GridPattern from "$components/MagicUI/Backgrounds/GridPattern.svelte";
  import Meteors from "$components/MagicUI/Meteors.svelte";
  import { cn } from "$lib/utils";
	import TitleText from "./TitleText.svelte";
  import Navbar from "$components/Navbar/Navbar.svelte";
</script>

<div id="hero" class="flex flex-col justify-center items-center w-full h-screen bg-zinc-900">
  <Navbar />
  <GridPattern
    width={30}
    height={30}
    strokeDashArray="4 2"
    className={cn(
      "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
    )}
  />
  <div id="meteor-title-card" class="relative aspect-[6/5] rounded-xl bg-slate-900 shadow-black shadow-xl border-slate-800 border-[1px] overflow-hidden">
    <Meteors number={100} />
    <!-- Splash Text -->
    <div 
      id="container-title-text" 
      class="w-full max-w-3xl p-40 bg-clip-text text-white">
      <TitleText />
    </div>
    
  </div>
  <div class="flex justify-center">
    <a href="#about" class="text-white text-center">Let's Go</a>
  </div> 
</div>