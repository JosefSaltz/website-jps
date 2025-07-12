<script lang="ts">
	import GridPattern from '$components/MagicUI/Backgrounds/GridPattern.svelte';
	import Meteors from '$components/MagicUI/Meteors.svelte';
	import TitleText from './TitleText.svelte';
	import Navbar from '$components/Navbar/Navbar.svelte';
	import { cn } from '$lib/utils';
	import ScrollToSectionButton from './ScrollToSectionButton.svelte';
</script>

<div
	id="hero"
	class={`
    w-full h-screen items-center
    flex flex-col
    bg-zinc-900 
  `}
>


  <div class="w-full h-full flex flex-col items-center overflow-hidden md:bg-gradient-to-b md:from-transparent md:via-black/20 md:to-black">
    <!-- Creates a grid mesh pattern -->
    <GridPattern
      width={30}
      height={30}
      strokeDashArray="4 2"
      className={cn('[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]' + 'z-0' + '')}
    />
    
    <div id="hero-content" class="w-full max-w-[60rem] flex flex-col justify-center h-full space-y-32 overflow-clip">
      <div
        id="meteor-title-card"
        class={`
          relative w-full h-full sm:h-auto xl:w-auto max-w-8xl 
          p-12 sm:p-36 md:p-[8rem] lg:p-[12rem]
          flex flex-col items-center justify-center 
          sm:rounded-lg overflow-hidden 
          border-[1px] border-slate-800 bg-gradient-to-br from-slate-900 to-black  
          sm:shadow-xl sm:shadow-black 
        `}
      >
        <Meteors number={200} />
        <!-- Splash Text -->
        <div id="container-title-text" class="max-w-3xl">
          <TitleText className={``} />
        </div>
        <!-- Mobile Button -->
        <div class="relative top-32 flex flex-col items-center justify-center z-50">
          <ScrollToSectionButton class={'block sm:hidden'} buttonText={"Let's Go"} targetID={"#about"} />
        </div>
      </div>
      <!-- Desktop Button -->
      <div class={`
        hidden
        sm:flex flex-col items-center justify-center
      `}>
        <ScrollToSectionButton class={'hidden sm:block'} buttonText={"Let's Go"} targetID={"#about"} />
      </div>
    </div>
  </div>
</div>
