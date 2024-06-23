import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import AutoImport from 'astro-auto-import';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [AstroPWA(), react(), tailwind({
    applyBaseStyles: false
  }), AutoImport({imports: ['./src/components': 'Components',]), mdx()]
});
