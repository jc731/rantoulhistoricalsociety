import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwind()],
  },
  site: 'https://www.rantoulhistoricalsociety.org',
  image: {
    service: passthroughImageService(),
  },
});
