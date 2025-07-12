import { default as aws } from "./aws.svelte"
import { default as bash } from "./bash.svelte"
import { default as bootstrap } from "./bootstrap.svelte"
import { default as chai } from "./chai.svelte"
import { default as cplusplus } from "./cplusplus.svelte"
import { default as deno } from "./deno.svelte"
import { default as express } from "./express.svelte"
import { default as firebase } from "./firebase.svelte"
import { default as javascript } from "./javascript.svelte"
import { default as mocha } from "./mocha.svelte"
import { default as mongodb } from "./mongodb.svelte"
import { default as mysql } from "./mysql.svelte"
import { default as next } from "./next.svelte"
import { default as nginx } from "./nginx.svelte"
import { default as node } from "./node.svelte"
import { default as postgres } from "./postgres.svelte"
import { default as python } from "./python.svelte"
import { default as react } from "./react.svelte"
import { default as redis } from "./redis.svelte"
import { default as shadcn } from "./shadcn.svelte"
import { default as solidjs } from "./solidjs.svelte"
import { default as sqlite } from "./sqlite.svelte"
import { default as supabase } from "./supabase.svelte"
import { default as svelte } from "./svelte.svelte"
import { default as tailwindcss } from "./tailwindcss.svelte"
import { default as typescript } from "./typescript.svelte"

const SkillCategories = {
  cloud: [ aws, firebase, supabase ],
  databases: [ mongodb, mysql, postgres, sqlite],
  frameworks: [ next, svelte ],
  languages: [ cplusplus, bash, javascript, typescript, python ],
  libraries: [ react, solidjs, tailwindcss, bootstrap, shadcn ], // I'm omitting svelte to use the logo in th]frameworks section
  servers: [ deno, node, express, nginx ],
  storage: [ redis ],
  testing: [ chai, mocha ]
}

export { SkillCategories };