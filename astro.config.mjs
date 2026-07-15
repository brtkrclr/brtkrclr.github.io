import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://brtkrclr.github.io',
  integrations: [mdx()],
  // Reuse the original site's image folder without duplicating its artwork.
  publicDir: './img',
});
