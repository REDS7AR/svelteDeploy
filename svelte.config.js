import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $assets: path.resolve('./src/assets'),
      $components: path.resolve('./src/components'),
      $vendors: path.resolve('./src/lib/vendors'),
      $section: path.resolve('./src/section'),
      $static: path.resolve('./static')
    }
  },

  preprocess: [vitePreprocess({})],
};

export default config;
