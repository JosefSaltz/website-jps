<script lang="ts">
	import ProTitle from "$components/Blurbs/ProTitle.svelte";
	import ContactForm from "$components/Forms/ContactForm.svelte";
</script>

<div class="flex flex-col items-center h-full bg-white pt-20 space-y-20">
  <div class="w-full max-w-6xl flex flex-row justify-end justify-self-center">
    <ProTitle />
  </div>
  <div class="max-w-6xl flex-shrink">
    <p class="text-xl">A versatile Full Stack Engineer and Entrepeneur with a rich history in web development including running a successful Freelance Web Development LLC since August 2021. Demonstrating a unique blend of technical prowess, mentoring ability, and entrepreneurial spirit. Notable achievements include leading the development of a significant full-stack React application, and contributing to a Net Neutrality awareness campaign’s site development. Known for a keen focus onimpactful projects, and a commitment to continuous learning and professional growth</p>
  </div>
  
  <div class="flex flex-col w-full max-w-6xl">
    <h1 class="text-5xl">Services</h1>
    <div id="services-tile-container" class="flex flex-row justify-center space-x-8">
      <div class="service-tile">
        <h3>Static Site</h3>
      </div>
      <div class="service-tile">
        <h3>Hosting</h3>
      </div>
      <div class="service-tile">
        <h3>Web App Development</h3>
      </div>
    </div>
  </div>
  <div>
    <h1>My Work</h1>

  </div>
  <ContactForm />
</div>

<style>
  .service-tile {
    border: solid thin black;
    height: 12rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>