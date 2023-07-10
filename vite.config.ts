import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import Icons from "unplugin-icons/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools(),
		Icons({
			compiler: "svelte",
			autoInstall: true
		}),
		ViteImageOptimizer(),
		visualizer({
			emitFile: true,
			filename: "stats.json",
			template: "raw-data"
		})
	],
	define: {
		// What this does is replace all instances of process.env.NODE_ENV with 'production' or 'development' depending on the environment.
		// Since we replace it with a string, we need to wrap it in quotes.
		"process.env.NODE_ENV":
			process.env.NODE_ENV === "production"
				? "'production'"
				: "'development'"
	}
});
