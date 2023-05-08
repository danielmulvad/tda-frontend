import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: '@import "src/lib/theme/index.scss";'
		}
	}),
	kit: {
		adapter: adapter({
			// precompress handled by Cloudflare
			precompress: false
		})
	}
};

export default config;
