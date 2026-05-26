import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],

  vite: {
    plugins: [tailwind()],
  },

  site: 'https://www.rantoulhistoricalsociety.org',

  image: {
    service: passthroughImageService(),
  },

  adapter: netlify(),
});
