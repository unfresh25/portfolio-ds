import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true }
  }),
});