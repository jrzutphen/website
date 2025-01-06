import type { Config } from "@sveltejs/kit";

import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

export default {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".svx"],
		}),
	],

	kit: {
		adapter: adapter(),
	},

	extensions: [".svelte", ".svx"],
} satisfies Config;
