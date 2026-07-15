// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';
import calebDark from './src/styles/shiki-caleb-dark.json';
import calebLight from './src/styles/shiki-caleb-light.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://caleboneal.dev',
  adapter: cloudflare(),
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: calebLight,
        dark: calebDark,
      },
      // Emit dual theme CSS vars; site toggle applies the active one.
      defaultColor: false,
    },
  },
});
