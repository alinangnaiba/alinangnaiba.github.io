import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alinangnaiba.github.io',
  integrations: [tailwind()],
});
