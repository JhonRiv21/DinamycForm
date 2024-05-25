import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      assets: 'src/lib/assets.index.ts',
			store: 'src/store',
			localTypes: 'src/local.d.ts'
		},
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;