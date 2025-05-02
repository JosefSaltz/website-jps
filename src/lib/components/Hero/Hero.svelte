<script lang="ts">
	import GridPattern from '$components/MagicUI/Backgrounds/GridPattern.svelte';
	import Meteors from '$components/MagicUI/Meteors.svelte';
	import TitleText from './TitleText.svelte';
	import Navbar from '$components/Navbar/Navbar.svelte';
	import { cn } from '$lib/utils';
	import LetsGoButton from './LetsGoButton.svelte';
</script>

<div
	id="hero"
	class={`
    w-full h-screen items-center
    flex flex-col
    bg-zinc-900 
  `}
>
  <!-- Placing navbar here to avoid affecting calculation of viewport -->
	<Navbar />

  <div class="w-full h-full flex flex-col items-center overflow-hidden">
    <!-- Creates a grid mesh pattern -->
    <GridPattern
      width={30}
      height={30}
      strokeDashArray="4 2"
      className={cn('[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]' + 'z-0')}
    />
    
    <div id="hero-content" class="flex flex-col justify-center h-full space-y-32 overflow-clip">
      <Meteors number={200} />
      <div
        id="meteor-title-card"
        class={`
          relative w-full h-full sm:h-auto xl:w-auto max-w-3xl p-32 
          flex flex-col items-center justify-center 
          sm:rounded-lg overflow-hidden 
          border-[1px] border-slate-800 bg-gradient-to-br from-slate-900 to-black  
          sm:shadow-xl sm:shadow-black 
        `}
      >
        <!-- Splash Text -->
        <div id="container-title-text" class="max-w-3xl">
          <TitleText className={``} />
        </div>
        <!-- Mobile Button -->
        <div class="flex flex-col justify-center pt-10">
          <LetsGoButton className={'sm:hidden'} />
        </div>
      </div>
      <!-- Desktop Button -->
      <div class={`
        hidden
        sm:flex flex-col items-center justify-center
      `}>
        <LetsGoButton className={'hidden sm:block'} />
      </div>
    </div>
  </div>
</div>
