<script lang="ts">
  type Props = { name: string, skills: string[]}
  let { name, skills }: Props = $props()

</script>
<section class="flex flex-col flex-wrap text-3xl">
  <h4 class="font-bold">{name}</h4>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>