# BayesStack landing page

A responsive, static Next.js landing page for BayesStack, built for deployment to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Next.js exports the complete static site to `out/`.

## Cloudflare Pages

Use these build settings:

- Framework preset: `Next.js (Static HTML Export)` or `None`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `24`

The site has no server-side runtime or environment-variable requirements.
