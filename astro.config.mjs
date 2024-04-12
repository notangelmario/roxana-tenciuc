import { defineConfig, squooshImageService } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  server: {
    port: 3000
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })]
});