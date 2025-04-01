<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<div id="contact" class="h-screen w-full pt-10 flex flex-col items-center">
  <h3 class="text-5xl">Work With Me</h3>
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
</div>

<style>
  input {
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
  }
</style>