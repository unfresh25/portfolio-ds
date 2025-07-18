import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true }
  }),
});