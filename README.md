# OhMyShares website

Landing page for [OhMyShares](https://github.com/OhMyShares/ohmyshares) — open-source self-hosted portfolio tracker.

Stack: Vite, React 19, TypeScript, Tailwind CSS v4, lucide-react. Fonts are self-hosted (no third-party requests).

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve dist/
```

Requires Node.js 20.19+.

## Structure

- `src/i18n/` — translations (`en.ts` is the source of truth, other files must match its shape). Each language has its own URL (`/`, `/ru/`, `/fr/`, …); on `/` the language is picked from `?lang=`, `localStorage` or the browser.
- `vite.config.ts` — at build time generates `/<lang>/index.html` with localized `<title>`, description, `canonical` and `hreflang` links, plus `sitemap.xml`.
- `src/components/` — page sections (`Hero`, `Features`, `Analytics`, `Plugins`, `Install`, `Faq`, `Footer`, …) and shared UI in `ui.tsx` / `charts.tsx`.
- `src/config.ts` — external links.
- `public/` — static files copied as is.

### Adding a language

1. Create `src/i18n/<code>.ts` exporting a `Dict`-typed object.
2. Register it in `LANGUAGES` in `src/i18n/languages.ts`.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. Push this directory to a GitHub repository (e.g. `OhMyShares/website` or `OhMyShares/ohmyshares.github.io`).
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.

The base path is detected automatically (`/website/` for project pages, `/` for user/org pages or a custom domain).
For a custom domain add `public/CNAME` containing the domain name.
