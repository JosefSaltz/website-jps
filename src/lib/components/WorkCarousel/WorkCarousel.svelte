<script lang="ts">
  import CompanyC from "$lib/assets/img/companyc.png"
  import OneSP from "$lib/assets/img/1sp.png"
  import KeepOurNetFree from "$lib/assets/img/keepournetfree.png"
  import Piita from "$lib/assets/img/piita.png"
  import WorkCard from "$components/Portfolio/WorkCard.svelte";
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay, { type AutoplayType } from 'embla-carousel-autoplay'

  let { class: className = '', aboutHeaderSizes = '' } = $props();
  let options = { loop: false }
  let plugins = [Autoplay()] satisfies AutoplayType[];

  const workCards = [ 
  {
    name: "PIITA", 
    link: "https://piita.org", 
    thumbnail: Piita
  },
  {
    name: "Company C Ballet", 
    link: "https://web.archive.org/web/20171102033455/http://www.companycballet.org/", 
    thumbnail: CompanyC
  },
  {
    name: "OneSimplePhone", 
    link: "https://smscola.vippbx.com", 
    thumbnail: OneSP
  },
  {
    name: "KeepOurNetFree", 
    link: "https://web.archive.org/web/20170329174527/http://keepournetfree.org/", 
    thumbnail: KeepOurNetFree
  },
];
</script>

<div id="work" class={`flex flex-col ${className}`}>
  <h3 class={`font-semibold mb-4 ${aboutHeaderSizes}`}>My Work</h3>
  <div id="embla-layout" class="w-full flex justify-center">
    <div class="embla max-w-[100rem]" use:emblaCarouselSvelte={{options, plugins}}>
      <div class="embla__container">
        {#each workCards as { name, link, thumbnail }}
          <div class="embla__slide">
            <WorkCard {name} {link} {thumbnail} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>  
  .embla {    
    overflow: hidden;  
  }  
  .embla__container {    
    display: flex;
    align-items: center;  
  }  
  .embla__slide {    
    flex: 0 0 100%;    
    min-width: 0;  
  }
</style>