<script lang="ts">
  import Social from "./Social.svelte";
	import WorkCard from "./WorkCard.svelte";
</script>

<div id="portfolio" class="h-screen">
  <h3>My Work</h3>
  <Social name="Github" icon={'/svg/github.svg'}/>
  <Social name="Gitlab" icon={'/svg/gitlab.svg'}/>
  <Social name="BlueSky" icon={'/svg/bluesky.svg'} />
  <Social name="LinkedIn" icon={'/svg/linkedin.svg'}/>
  <div class="flex justify-center">
    <WorkCard name={"PIITA"} link={"https://piita.org"} thumbnail={'/img/piita.png'} />
    <WorkCard name={"OneSimplePhone"} link={"https://smscola.vippbx.com"} thumbnail={'/img/1sp.png'} />
    <WorkCard name={"Company C Ballet"} thumbnail={'/img/companyc.png'} />
    <WorkCard name={"KeepOurNetFree"} thumbnail={'/img/keepournetfree.png'} />
  </div>
</div>