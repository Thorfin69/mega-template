# CLAUDE.md — Template L: B2B SaaS Cloud

## What This Template Is

Template L is a clean, trust-forward B2B SaaS landing page built from the MaxMyCloud website (maxmycloud-stagging.webflow.io) — a Snowflake cost optimization platform. The visual register is professional and data-forward: white and light-gray surfaces dominate the upper sections, with alternating dark navy (`#27313D`) sections in the mid-page and footer. The primary accent is blue (`#027DFC`), used for buttons, badges, CTAs, and highlights. The page communicates technical credibility and measurable value, targeting data engineers, platform teams, and FinOps practitioners evaluating SaaS cost tools. It is dashboard-image-heavy in the hero, text-forward in the feature and pricing sections. Ideal for: B2B SaaS, data tools, cloud platforms, FinOps, developer tools, AI products, enterprise software.

## Design Law

**Every primary CTA is a rounded pill in `#027DFC`. Every dark section uses `#27313D`. They must never swap.**

## Architecture Overview

Route: `/template-l`
Entry: `templates/template-l/index.tsx` — exports `TemplateLPage`

Render order (top → bottom):
1. `Navbar` — sticky white nav, logo + links + pill CTA
2. `Hero` — badge, large H1, two CTAs, dashboard screenshot (no bottom radius)
3. `HowItWorks` — light gray bg, 3-step process with icons
4. `Features` — white bg, 6-card grid with hover effects
5. `SecuritySection` — dark bg (#27313D), text left + image right
6. `WhyUs` — white bg, 2×2 differentiator grid
7. `Integrations` — dark bg (#27313D), 7 integration logos
8. `Stats` — blue bg (#027DFC), 2 large numbers
9. `Manifesto` — dark bg (#1C2530), philosophy + 3 numbered points
10. `ValueProps` — light gray bg, 4×2 value prop cards
11. `Pricing` — white bg, monthly/yearly toggle, 3-column plans
12. `Testimonials` — dark bg (#27313D), 3×2 testimonial cards
13. `BlogSection` — white bg, 3 blog posts
14. `FAQ` — light gray bg, 10-item accordion
15. `CTABanner` — blue bg (#027DFC), conversion section
16. `Footer` — dark bg (#27313D) + bg image overlay

All sub-components live in `templates/template-l/components/`.

## What You Must Never Do

- Do not change the Navbar CTA from a rounded pill — this template uses `rounded-full` buttons everywhere.
- Do not swap DM Sans for any other font.
- Do not put a light section between two dark sections (SecuritySection → WhyUs → Integrations must follow the dark/light/dark rhythm).
- Do not change `#027DFC` to any other blue — this is the exact brand blue from the original site.
- Do not add more than 7 integration logos — the grid is tuned for exactly 7 columns on desktop.
- Do not remove the gradient shadow from the hero dashboard image — it signals the image continues into the next section.
- Do not use `position: absolute` in any hand-written component (only in CTABanner background decorations and Footer bg overlay).
- Do not use any animation library except Framer Motion (`motion/react`).
- Do not add tablet-specific breakpoints — only `lg:` (desktop ≥1024px) and base (mobile).

## Content Swap Protocol

1. Open `CONTENT.md` — every slot is listed with its current placeholder value.
2. Replace each slot value in `index.tsx` where the content constants are defined (top of file, clearly labeled).
3. For the logo: replace `logoSrc` in both Navbar and Footer. Use the same image.
4. For dashboard images: replace `dashboardImage` in Hero with the client's product screenshot. Maintain 16:9 or wider aspect ratio.
5. For integrations: update the `INTEGRATIONS` array — each entry has `src` (image URL) and `name` (display label).
6. For pricing: update `PRICING_PLANS` array — each plan has `monthlyPrice`, `yearlyPrice`, `features`. Set `monthlyPrice: 'Custom'` for enterprise tiers.
7. For testimonials: update `TESTIMONIALS` array — each entry has `name`, `role`, `quote`, `avatar`.
8. After swapping, run `npm run dev` and verify at `/template-l` before handing off.

## Animation Standard

All scroll-triggered animations use this exact pattern. Copy verbatim:

```tsx
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Single element:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>

// Staggered list:
<motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeUp}>{/* content */}</motion.div>
  ))}
</motion.div>
```

The Hero section uses `animate="visible"` (not `whileInView`) since it is above the fold.

## Image Protocol

- **Hero dashboard**: Webflow CDN `.png` files — the dashboard screenshot is a real product image, publicly accessible.
- **Section images**: Webflow CDN files (`.webp`, `.jpg`, `.svg`). All are publicly accessible from `cdn.prod.website-files.com/696af2fc0ed703e7710c72fd/`.
- **Integration logos**: Webflow CDN `.webp` files. One per integration partner.
- **Testimonial avatars**: Webflow CDN `.webp` avatar files (avatar-1 through avatar-7).
- **Blog post images**: Webflow CDN `.webp` files (blog-04, blog-05, blog-06).
- **Logo**: Webflow CDN PNG — `Frame 2147258922.png` — invert with CSS `brightness-0 invert` on dark backgrounds.
- **Fallback**: If a CDN image fails, show a `#E5E7EB` background div at the same dimensions.
- **Never** use placeholder boxes, color swatches, or `[image]` text as image stand-ins.
- All `<img>` tags must include `alt` text describing the subject.
