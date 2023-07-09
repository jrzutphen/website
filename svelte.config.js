import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// TODO: re-enable strict mode when we have all pages
			strict: false
		}),
		prerender: {
			handleHttpError: "warn"
		}
	}
};

export default config;
