import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
function CustomHmr() {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.astro')) {
        console.log('full reload...');

        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    },
  }
}


// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({ path: './tailwind.config.js' })],
  vite: {
    ssr: {
      external: ["svgo"],
    },
    plugins: [
      CustomHmr()
    ]
  },
});
