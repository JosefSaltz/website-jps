
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import deno from "@deno/vite-plugin"
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		deno(),
		sveltekit(),
		enhancedImages(), 
	],
	server: {
		port: 3000
	}
});
