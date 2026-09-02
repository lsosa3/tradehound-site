# TradeHound — Marketing Site

The public marketing site for TradeHound (AI field service management for the
trades). Separate from the app (`fixflow-frontend`) and the API
(`fixflow-backend`).

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and
**TypeScript**. Ships as a fully static export — no server at runtime.

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing: hero, workflow, features, AI-safety, pricing preview, FAQ, CTA |
| `/features` | Feature deep-dives with anchor targets (`#ai-reports`, `#field-app`, …) |
| `/pricing` | Three tiers + full comparison table + FAQ |
| `/about` | Positioning and principles |
| `/contact` | Contact routes + form (see below) |
| `/legal/privacy` | Privacy Policy (template — have counsel review) |
| `/legal/terms` | Terms of Service (template) |
| `/legal/sms-policy` | SMS & A2P 10DLC policy — supports Twilio campaign registration |

## Local development

```bash
npm install
npm run dev      # http://localhost:3002
npm run build    # static export to ./out
npm run lint
```

## Design system

Tokens live in `src/app/globals.css` (`@theme` block) and follow
`../DESIGN.md`: pure-white canvas, a sky-blue atmospheric wash in the hero
only, near-black navy ink (`#171c2d`, matched to the logo), a single dark CTA,
blue used for inline links only, Inter + JetBrains Mono, ~96px section rhythm.
The one deviation from `DESIGN.md` is using the logo navy as the CTA/ink color
instead of pure `#000`/`#171717`.

## Contact form

`src/components/marketing/contact-form.tsx` POSTs JSON to
`NEXT_PUBLIC_CONTACT_ENDPOINT`. If that env var is unset (the default), the
form composes a `mailto:` instead, so the site works with no backend. Point
the var at an API Gateway route (Lambda → SES), Formspree, etc.

## Deploying to AWS (S3 + CloudFront)

`next.config.ts` sets `output: "export"` and `trailingSlash: true`, so
`npm run build` produces a static `./out` directory that maps cleanly to S3.

1. **S3 bucket** — create a private bucket (e.g. `tradehound-site`). Do *not*
   enable public website hosting; serve it through CloudFront with Origin
   Access Control.
2. **Upload** on each release:
   ```bash
   npm run build
   aws s3 sync ./out s3://tradehound-site --delete \
     --cache-control "public,max-age=31536000,immutable" \
     --exclude "*.html" --exclude "*.xml" --exclude "*.txt"
   aws s3 sync ./out s3://tradehound-site --delete \
     --cache-control "public,max-age=60,must-revalidate" \
     --exclude "*" --include "*.html" --include "*.xml" --include "*.txt"
   ```
3. **CloudFront** — origin = the S3 bucket via OAC. Default root object
   `index.html`. Because `trailingSlash: true`, every route is emitted as
   `route/index.html`; add a CloudFront Function (viewer-request) that appends
   `index.html` to any URI ending in `/`, and rewrites extensionless URIs to
   `${uri}.html`. Set the custom error response for 404 → `/404.html` (HTTP
   404).
4. **Invalidate** `"/*"` after each deploy (or just the HTML/XML paths).
5. **Domain** — ACM cert in `us-east-1`, alternate domain name
   `tradehound.app`, Route 53 alias A/AAAA records to the distribution.

`SITE_URL` / canonical host is hard-coded as `https://tradehound.app` in
`src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` — update
those three if the domain changes.

Amplify Hosting also works: framework auto-detected, build command
`npm run build`, output directory `out`.

## Assets

Logo mark is an inline SVG in `src/components/site/logo.tsx`. Favicons live at
`src/app/icon.png` / `src/app/apple-icon.png` and the raster app icons in
`public/` (all copied from the app).
