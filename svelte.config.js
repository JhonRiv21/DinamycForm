import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
			store: 'src/store',
			assets: 'src/lib/assets.index.ts',
			localTypes: 'src/local.d.ts'
		},
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;