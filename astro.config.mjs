import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sausage-5464.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});
