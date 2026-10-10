import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config';
import { DEFAULT_LANG, LANG_CODES, LANGUAGES, langPath, type Lang } from './src/i18n/languages';

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function localizedPages(): Plugin {
  let base = '/';
  const pageUrl = (lang: Lang) => `${SITE_URL}${base}${langPath(lang)}`;

  const withUrl = (html: string, lang: Lang): string => {
    const url = pageUrl(lang);
    return html
      .replace(/(<meta\s+property="og:url"\s+content=")[^"]*/, (_, start) => `${start}${url}`)
      .replace(/(<link\s+rel="canonical"\s+href=")[^"]*/, (_, start) => `${start}${url}`);
  };

  const localize = (html: string, lang: Lang): string => {
    const { dict, dir } = LANGUAGES[lang];
    const title = escapeHtml(dict.meta.title);
    const description = escapeHtml(dict.meta.description);
    return withUrl(html, lang)
      .replace(/<html lang="[^"]*"/, () => `<html lang="${lang}" dir="${dir}"`)
      .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]*/, (_, start) => `${start}${description}`)
      .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, (_, start) => `${start}${title}`)
      .replace(/(<meta\s+property="og:description"\s+content=")[^"]*/, (_, start) => `${start}${description}`);
  };

  return {
    name: 'localized-pages',
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml(html) {
      const alternates = [
        ...LANG_CODES.map((lang) => `<link rel="alternate" hreflang="${lang}" href="${pageUrl(lang)}" />`),
        `<link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG)}" />`,
      ];
      return withUrl(html, DEFAULT_LANG).replace(
        /<link\s+rel="canonical"[^>]*>/,
        (canonical) => [canonical, ...alternates].join('\n    '),
      );
    },
    writeBundle({ dir = 'dist' }) {
      const html = readFileSync(join(dir, 'index.html'), 'utf8');
      for (const lang of LANG_CODES) {
        if (lang === DEFAULT_LANG) {
          continue;
        }
        mkdirSync(join(dir, lang), { recursive: true });
        writeFileSync(join(dir, lang, 'index.html'), localize(html, lang));
      }
      const urls = LANG_CODES.map((lang) => `  <url><loc>${pageUrl(lang)}</loc></url>`);
      writeFileSync(
        join(dir, 'sitemap.xml'),
        [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          '</urlset>',
          '',
        ].join('\n'),
      );
    },
  };
}

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss(), localizedPages()],
  build: {
    target: 'es2022',
    cssCodeSplit: false,
  },
});
