<script lang="ts">
  type Props = { name: string, skills: string[]}
  let { name, skills }: Props = $props()

</script>
<section class="flex flex-col flex-wrap xl:text-3xl">
  <h4 class="font-bold">{name}</h4>
  <ul>
    {#each skills as skill}
      <li class="font-thin">{skill}</li>
    {/each}
  </ul>
</section>