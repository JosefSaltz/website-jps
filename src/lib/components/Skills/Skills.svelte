<script lang="ts">
	import OrbitingCircles from "$components/MagicUI/OrbitingCircles.svelte";
	import SkillOrbits from "./SkillOrbits.svelte";
	import SkillSection from "./SkillSection.svelte";
  let { sectionPaddingSizes = '', sharedHeaderSizes = '', sharedContentSizes = '' } = $props()
</script>

<section 
id="skills"
class={`
  py-20
  min-h-screen 
  flex 
  flex-col 
  items-center 
  bg-slate-800  
  text-zinc-200
  ${sectionPaddingSizes}
  ${sharedContentSizes}
`}>
  <div id="skills-content-container" class="max-w-[100rem]">
    <h2 class={`${sharedHeaderSizes} pb-10`}>Skills</h2>
    <div id="skills-content-container" class="flex flex-wrap gap-8" >
      <p class={`max-w-[100rem] w-[80ch]`}>
        I've worked with a large amount of web technologies over the last years ranging from popular libraries like <span class="text-sky-800">React</span> and <span class="text-sky-800">Next.js</span> to <span class="text-orange-600">Svelte</span> and <span class="text-orange-600">Svelte Kit.</span> I'm familiar with building APIs and developing front ends with responsive UI and Server side API Endpoints for integrating with any service your business requires.
      </p>
      <div id="skills-container" class="h-full p-16 flex flex-wrap justify-start gap-12">
        <div id="skills-bullet-list-container">
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
              'Bootstrap',
              'shadcn/ui'
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
        <div id="orbit-container" class="h-[40px] aspect-square">
          <SkillOrbits />
        </div>
      </div>
    </div>
  </div>
</section>