<script lang="ts">
  type Props = { name: string, skills: string[]}
  let {name, skills } = $props()

</script>
<section>
  <h4>{name}</h4>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
