<script lang="ts">
	import SkillSection from "./SkillSection.svelte";
</script>

<div class="h-screen bg-slate-800 text-2xl px-20 text-zinc-200">
  <h2 class="text-3xl">Skills</h2>
  <p>
    I've worked with a large amount of web technologies over the last years ranging from popular libraries like <span class="text-sky-800">React</span> and <span class="text-sky-800">Next.js</span> to <span class="text-orange-600">Svelte</span> and <span class="text-orange-600">Svelte Kit.</span> I'm familiar with building APIs and developing front ends with responsive UI and Server side API Endpoints for integrating with any service your business requires.
  </p>
  <div class="flex flex-wrap">
  <SkillSection 
    name={'Languages'} 
    skills={[
      'Typescript',
      'Javascript',
      'Python',
      'Bash',
      'C++'
    ]} 
  />
  <SkillSection 
    name={'Libraries'} 
    skills={[
      'React',
      'SolidJS',
      'Svelte',
      'TailwindCSS',
      'Bootstrap'
    ]} 
  />
  <SkillSection 
    name={'Frameworks'} 
    skills={[
      'Next.js',
      'Svelte Kit'
    ]} 
  />
  <SkillSection 
    name={'Cloud'} 
    skills={[
      'AWS',
      'Firebase',
      'Supabase'
    ]} 
  />
  <SkillSection 
    name={'Testing'} 
    skills={[
      'Chai', 
      'Mocha'
    ]} 
  />
  <SkillSection name={'Servers'} skills={[
    'Deno',
    'Node',
    'Express',
    'Nginx',
    'Traefik'
  ]} />
  <SkillSection 
    name={'Databases'} 
    skills={[
      'MongoDB',
      'MySql',
      'Postgres',
      'Sqlite'
    ]} 
  />
  <SkillSection 
    name={'Storage'}
    skills={[
      'S3',
      'Redis',
      'node-cache'
    ]}
  />
  </div>
</div>
