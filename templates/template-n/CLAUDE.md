# CLAUDE.md — Template N: Home Loans / Mortgage Lending

## What This Template Is

Template N is a trust-forward consumer mortgage lending landing page built from the Tigerloans website (tigerloans.com) — a multi-state direct home mortgage lender. The visual register is dark-and-warm: a deep navy (`#1a1a2e`) hero and stats bar establish authority, offset by warm amber (`#f7b433`) accents for CTAs and highlights, and a cream-white (`#fff7ee`) background for feature sections. A full-bleed background-image header wraps the first-above-fold section in a scenic real-estate photography overlay. The page is image-rich in the hero and team sections, text-forward in the loan-type and rates sections. It targets first-time homebuyers and refinancers and communicates professionalism via NMLS licensing, real loan officer profiles, and social proof stats. Ideal for: mortgage brokers, home lending companies, real estate finance, HELOC/refi, community banks, credit unions.

## Design Law

**Every primary CTA uses `#f7b433` (amber). Every dark section uses `#1a1a2e` (deep navy). The hero text on the background-image section is always white. They must never swap.**

## Architecture Overview

Route: `/template-n`
Entry: `templates/template-n/index.tsx` — exports `TemplateNPage`

Render order (top → bottom):
1. `Navbar` — white sticky nav, logo + NMLS badge + loan-officer dropdown + "Apply Now" CTA
2. `Hero` (header-section / section-wrapper) — background-image overlay, eyebrow badge, H1, body, feature bullets, dual CTAs
3. `StatsBar` — dark navy bg (`#1a1a2e`), 3 social-proof stats in amber
4. `LenderLogos` — white bg, "Lenders we work with" heading, marquee logo strip + group hero image
5. `LoanTypes` (blog-writter-section) — cream bg (`#fff7ee`), 2-column card split: "Purchase a Home" + "Refinance Your Mortgage"
6. `TeamSection` — white bg, loan officer grid with photo, name, title, NMLS ID
7. `Calculator` (features_section-copy) — cream bg (`#fef5ec`), embedded mortgage calculator widget
8. `RatesSection` — dark navy bg (`#061d37`), national average interest rates display
9. `Testimonials` (customer-stories_section) — light cream bg, 3 testimonial cards
10. `BlogSection` — white bg, 3 blog post cards with category tags and author bylines
11. `ContactSection` (contact-us) — dark navy bg (`#061d37`), contact form + CTA
12. `Footer` — dark navy bg (`#162843`), 4-column grid: logo/legal + navigation + loan types + contact info

All sub-components live in `templates/template-n/components/`.

## Currently Scaffolded Components

| Component | File | Status |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Complete |
| `Hero` | `components/Hero.tsx` | Complete |
| `StatsBar` | `components/StatsBar.tsx` | Complete |
| `LenderLogos` | `components/LenderLogos.tsx` | Complete |

Remaining sections (LoanTypes, TeamSection, Calculator, RatesSection, Testimonials, BlogSection, ContactSection, Footer) need to be built before the page is production-ready.

## What You Must Never Do

- Do not change the Navbar CTA from a rectangular `rounded-md` button — this template does **not** use rounded-full pills; it uses `rounded-md` for all CTA buttons.
- Do not swap Outfit or Playfair Display for any other font.
- Do not put the amber `#f7b433` color as a background on any large section — it is reserved for badges, CTA buttons, and the hero heading accent span only.
- Do not change `#1a1a2e` to any other dark color for hero/stats backgrounds — this is the exact brand dark from the original site.
- Do not remove the NMLS ID badge from the Navbar — it is legally significant for mortgage lenders.
- Do not display more than 8 loan officers in the dropdown without changing the grid layout — the dropdown is a 2-column grid tuned for up to 8 officers.
- Do not use the `section-wrapper` background-image CSS class for any section other than the top hero (header-section) — it is the full-bleed real-estate photography overlay.
- Do not use any animation library except Framer Motion (`motion/react`).
- Do not add tablet-specific breakpoints — only `lg:` (desktop ≥1024px) and base (mobile).

## Content Swap Protocol

1. Open `CONTENT.md` — every slot is listed with its current placeholder value.
2. Replace each slot value in `index.tsx` where the content constants are defined (top of file, clearly labeled).
3. For the logo: replace `logoSrc` in both Navbar and Footer. Use the same SVG or PNG.
4. For loan officers: update the `LOAN_OFFICERS` array in the Navbar — each entry needs `name`, `phone`, `nmls`, `image`, `href`.
5. For the team section: use the same `LOAN_OFFICERS` array or a separate `TEAM_MEMBERS` array — each member has `name`, `title`, `nmls`, `image`.
6. For lender logos: update the `LENDER_LOGOS` array — each entry has `src` (image URL) and `alt` (lender name). The marquee doubles the array automatically.
7. For stats: update the `STATS` array — each entry has `value` (e.g. `$50M+`) and `label` (description text).
8. For testimonials: update the `TESTIMONIALS` array — each entry has `name`, `location`, `quote`.
9. For blog posts: update the `BLOG_POSTS` array — each entry has `category`, `title`, `author`, `date`, `href`, `imageSrc`.
10. After swapping, run `npm run dev` and verify at `/template-n` before handing off.

## Animation Standard

All scroll-triggered animations use this exact pattern. Copy verbatim:

```tsx
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
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

The Navbar loan-officer dropdown uses `AnimatePresence` with `initial={{ opacity: 0, y: -8 }}` / `animate={{ opacity: 1, y: 0 }}` / `exit={{ opacity: 0, y: -8 }}` at `duration: 0.2`.

The LenderLogos marquee uses a CSS `animate-marquee-left` keyframe (defined in global CSS or tailwind config) — not Framer Motion. This is the one exception to the Framer Motion rule.

## Webflow / Special Interactions

The original Tigerloans site uses Webflow IX2 (Interactions 2.0) for entrance animations on the header-section elements (`data-w-id` attributes with opacity/transform transitions). In the React implementation these are replaced with Framer Motion `fadeUp` variants. The mortgage calculator section in the original is an embedded Webflow form — in the React implementation this should be a functional React calculator component or a third-party embed. The "Check If You're Eligible" section is a multi-field Webflow form — implement as a controlled React form.

## Fonts

Both fonts are loaded via Google Fonts. Add to root `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
```

- **Outfit** — primary UI font (navlinks, body, buttons, stats, overlines)
- **Playfair Display** — display/editorial font (H1, H2 headings, section titles, eyebrow decorative text)
- **Manrope** — secondary UI font (subheadings, card text where softer weight is needed)

## Image Protocol

- **Hero background**: Webflow CDN PNG — `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25185_Group%203452.png` — overlaid with `linear-gradient(#00000026, #00000026)` darkening layer.
- **Section background** (header wrapper): Webflow CDN PNG — `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25184_image.png` — full bleed `background-size: cover`.
- **Logo**: Webflow CDN SVG — `691cbc389e7f40013ff2507b_TG_Logo.svg` — use on white navbar; for dark backgrounds apply CSS `filter: brightness(0) invert(1)`.
- **Lender logos**: Webflow CDN SVG frames — 8 logos named `Frame 427319963.svg` through `Frame 427319970.svg`.
- **Loan officer photos**: Webflow CDN `.avif` files — each officer has a unique hash-named file; placeholder is `691cbc389e7f40013ff2508c_Portrait_placeholder.avif`.
- **Blog post images**: Webflow CDN `.avif` files — one per post.
- **Fallback**: If a CDN image fails, show a `#F3D7BC` background div at the same dimensions.
- **Never** use placeholder boxes, color swatches, or `[image]` text as image stand-ins.
- All `<img>` tags must include `alt` text describing the subject.
