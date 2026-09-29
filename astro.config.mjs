// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Public URL of the site (e.g. https://<name>.azurestaticapps.net).
 * Needed for absolute URLs: Open Graph image, canonical, hreflang and sitemap.
 * Set it in the deploy pipeline (step 10); without it those tags are skipped.
 */
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  integrations: site
    ? [
        sitemap({
          i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
        }),
      ]
    : [],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Self-hosted at build time (no render-blocking request to Google Fonts).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
