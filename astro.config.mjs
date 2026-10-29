// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// [PREENCHER] Troque pelo domínio definitivo (usado no sitemap, Open Graph e JSON-LD).
// SITE_URL e BASE_PATH podem vir do ambiente (ex.: prévia no GitHub Pages em /ieasy-site/).
export const SITE_URL = process.env.SITE_URL ?? 'https://www.ieasy.com.br';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
