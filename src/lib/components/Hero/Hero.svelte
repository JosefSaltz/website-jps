<script lang="ts">
  import GridPattern from "$components/MagicUI/Backgrounds/GridPattern.svelte";
  import Meteors from "$components/MagicUI/Meteors.svelte";
	import TitleText from "./TitleText.svelte";
  import Navbar from "$components/Navbar/Navbar.svelte";
  import { cn } from "$lib/utils";
	import LetsGoButton from "./LetsGoButton.svelte";
</script>

<div id="hero" class="flex flex-1 flex-col sm:justify-center items-center w-full h-screen bg-zinc-900">
  <Navbar />
  <GridPattern
    width={30}
    height={30}
    strokeDashArray="4 2"
    className={cn(
      "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
    )}
  />
  
  <div id="meteor-title-card" class="relative flex justify-center items-center h-screen sm:h-auto sm:rounded-xl bg-gradient-to-br from-slate-900 to-black shadow-black shadow-xl border-slate-800 border-[1px] overflow-hidden">
    <Meteors number={200} />
    <!-- Splash Text -->
    <div 
      id="container-title-text" 
      class="w-full max-w-3xl p-20 lg:p-40 bg-clip-text text-white">
      <TitleText className={`absolute`} />
    </div>
    <LetsGoButton className={"sm:hidden"} />
  </div>
  <LetsGoButton className={"hidden sm:block"} />
</div>