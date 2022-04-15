import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroImagePlugin from "astro-imagetools/plugin";
function CustomHmr() {
  return {
    name: "custom-hmr",
    enforce: "post",
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".astro")) {
        console.log("full reload...");

        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: "./tailwind.config.js",
        applyAstroPreset: false
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
    plugins: [CustomHmr(), astroImagePlugin],
  },
});
