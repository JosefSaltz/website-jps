<script lang="ts">
	import { enhance } from "$app/forms";
	import BoxReveal from "$components/MagicUI/BoxReveal/BoxReveal.svelte";
  let { sectionPaddingSizes = '', sharedHeaderSizes = '' } = $props()
</script>

<div id="contact" class={`min-h-screen flex flex-col items-center ${sectionPaddingSizes}`}>
  <BoxReveal>
    <h3 class={`${sharedHeaderSizes} pb-10 place-self-startit`}>Work With Me</h3>
  </BoxReveal>
  <BoxReveal><h5 class="text-4xl pb-10">Let’s Build Something Great Together!</h5></BoxReveal>
  <BoxReveal>
    <p class="max-w-[50rem]">Ready to transform your vision into a dynamic web experience? As a Full Stack Developer, I bring ideas to life through expertly crafted websites and robust web applications. Let's connect and explore the possibilities for your next digital venture.</p>
  </BoxReveal>
  <BoxReveal>
    <p>Contact me now to get started.</p>
  </BoxReveal>
  <!--<BoxReveal>
   <form use:enhance method="POST">
    <ul class="space-y-6">
      <li>
        <label for="name">Name</label>
        <input name="name" type="text">
      </li>
      <li>
        <label for="email">Email</label>
        <input name="email" type="text" required>
      </li>
      <li class="flex-2">
        <label for="message">Message</label>
        <input name="message" type="text" required class="
          
        ">
      </li>
      <div class="w-full flex justify-center">
        <button class="w-20 self-center bg-cyan-800 border-solid border-zinc-700 rounded-lg py-3" type="submit">Send</button>
      </div>
  </form>
  </BoxReveal> -->
</div> 