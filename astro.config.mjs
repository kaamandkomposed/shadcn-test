import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [AstroPWA(), react(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});
