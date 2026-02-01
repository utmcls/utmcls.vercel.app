import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import node from '@astrojs/node';

// Vercel sets VERCEL=1. Local dev uses Node adapter for SSR.
const isVercel = process.env.VERCEL === '1';
// Site URL for sitemaps, RSS, etc. Set PUBLIC_SITE_URL in Vercel (or use custom domain).
const siteUrl = process.env.PUBLIC_SITE_URL;

// https://astro.build/config
export default defineConfig({

  integrations: [

    {
      name: 'init-postcss',
      hooks: {
        'astro:config:setup': ({ config }) => {

          if (!config.style) {
            config.style = {};
          }
          if (!config.style.postcss) {
            config.style.postcss = {};
          }
          // Only initialize plugins array if it doesn't exist
          if (!Array.isArray(config.style.postcss.plugins)) {
            config.style.postcss.plugins = [];
          }
        },
      },
    },

    tailwind({
      applyBaseStyles: true,
    }),

    react(),
    keystatic(),
  ],
  output: 'server',
  adapter: isVercel ? vercel() : node({ mode: 'standalone' }),
  site: siteUrl,
  base: '/',
  server: !isVercel
    ? { host: true, port: 4321 }
    : undefined,
});
