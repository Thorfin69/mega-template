# PREVIEW.md — Template L: B2B SaaS Cloud

## Route

`/template-l`

## Template Identity

- **ID:** `template-l`
- **Display Name:** B2B SaaS Cloud
- **Source:** MaxMyCloud (maxmycloud-stagging.webflow.io)
- **Accent Color:** `#027DFC`
- **Background Style:** mixed (light hero + alternating dark/light sections + dark footer)

## Industry Fits

`saas` `data-tools` `cloud` `snowflake` `b2b` `finops` `data-engineering` `developer-tools` `ai-products` `enterprise-software` `analytics` `infrastructure`

## Style Keywords

`blue` `clean` `data-forward` `dashboard-hero` `pricing-table` `feature-grid` `professional` `mixed-dark-light` `faq-heavy` `testimonials` `b2b` `tech`

## Complexity Rating

**Complex** — 16 sections, interactive Pricing toggle, interactive FAQ accordion, 6 testimonials, 10 FAQ items, 8 value props

## Estimated Content-Swap Time

**3 hours** — primarily: logo swap, copy rewrite across 16 sections, replace dashboard screenshots, update integration logos, update pricing tiers and features, update testimonials

## Screenshots

- Full page: `./preview/full.png`
- Hero: `./preview/hero.png`
- Pricing: `./preview/pricing.png`
- Footer: `./preview/footer.png`

*(Screenshots to be generated with Playwright after first `npm run dev` pass)*

## Section Count

16 sections (exceeds minimum of 8)

## Notes

- Dashboard image in Hero should be a product screenshot (16:9 or wider). Current image: Webflow CDN `Dashboard Image.png`.
- The Pricing section has a monthly/yearly toggle — yearly prices should be approximately 10% less than monthly.
- The featured (middle) pricing plan uses a dark `#27313D` background with a blue border to stand out visually.
- Integration logos should be brand logos on transparent or white backgrounds (`.webp` or `.svg` preferred).
- The Footer accepts an optional `bgImage` prop — when set, the image is shown at low opacity under the dark overlay for texture.
