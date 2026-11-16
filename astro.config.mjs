// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import calebLight from './src/styles/shiki-caleb-light.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://caleboneal.dev',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/styleguide'),
    }),
  ],
  prefetch: true,
  server: {
    allowedHosts: [
      "caleb-desktop.tail386360.ts.net"
    ]
  },
  markdown: {
    shikiConfig: {
      theme: calebLight,
    },
  },
});
