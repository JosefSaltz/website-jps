<script lang="ts">
  import CompanyC from "$lib/assets/img/companyc.png"
  import OneSP from "$lib/assets/img/1sp.png"
  import KeepOurNetFree from "$lib/assets/img/keepournetfree.png"
  import Piita from "$lib/assets/img/piita.png"
  import WorkCard from "$components/Portfolio/WorkCard.svelte";
  import emblaCarouselSvelte from 'embla-carousel-svelte'
</script>

<div id="work" class="flex flex-col w-full max-w-6xl px-20">
  <h3 class="text-4xl font-semibold mb-4">My Work</h3>
  <div class="embla" use:emblaCarouselSvelte>
    <div class="embla__container">
      <div class="embla__slide">
        <WorkCard name={"PIITA"} link={"https://piita.org"} thumbnail={Piita} />
      </div>

      <div class="embla__slide">
        <WorkCard name={"Company C Ballet"} thumbnail={CompanyC} />
      </div>

      <div class="embla__slide">
        <WorkCard name={"OneSimplePhone"} link={"https://smscola.vippbx.com"} thumbnail={OneSP} />
      </div>

      <div class="embla__slide">
        <WorkCard name={"KeepOurNetFree"} thumbnail={KeepOurNetFree} />
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