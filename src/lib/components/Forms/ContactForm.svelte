<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<div id="contact" class="h-screen rounded-md border-2 p-16 space-y-6">
  <h3 class="text-3xl">Work With Me</h3>
  <form use:enhance>
    <ul class="space-y-6">
      <li>
        <label for="name">Name</label>
        <input name="name" type="text">
      </li>
      <li>
        <label for="email">Email</label>
        <input name="email" type="text" required>
      </li>
      <li>
        <label for="message">Message</label>
        <input name="message" type="text" required>
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
</style>