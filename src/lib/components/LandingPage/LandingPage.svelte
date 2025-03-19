<script lang="ts">
  import GridPattern from "$components/MagicUI/Backgrounds/GridPattern.svelte";
  import Meteors from "$components/MagicUI/Meteors.svelte";
  import { cn } from "$lib/utils";
</script>

<div id="landing-page-container" class="flex flex-col justify-center items-center w-full h-full max-h-[1440px] bg-zinc-900">
  <GridPattern
    width={30}
    height={30}
    strokeDashArray="4 2"
    className={cn(
      "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
    )}
  />
    <div id="meteor-title-card" class="relative max-w-3xl overflow-hidden rounded-xl bg-slate-900 shadow-black shadow-xl border-slate-800 border-[1px] ">
      <Meteors number={100} />
      <div class="flex flex-col justify-center items-center w-full max-w-[1440px] overflow-hidden p-40 space-y-8"> 
        <!-- Splash Text -->
        <div id="container-title-text" class="w-full h-fit bg-clip-text text-white space-y-8">
          <h1 class="z-50 whitespace-pre-wrap text-7xl tracking-tight font-semibold bg-gradient-to-br from-white to-slate-500/40 text-transparent bg-clip-text">Build With The Power Of The <span class="text-sky-800">Web</span></h1>
        </div>
      </div>
    </div> 
</div>