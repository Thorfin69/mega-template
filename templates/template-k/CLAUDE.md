# CLAUDE.md — Template K: Medical & Wellness

## What This Template Is

Template K is a light, trust-forward healthcare staffing landing page. It was built for Bettermint Healthcare (bettermintllc.webflow.io) — a travel nursing agency. The visual register is clean, professional, and warm: white and off-white backgrounds dominate the upper half of the page, with alternating dark (`#27272e`) sections in the mid-to-lower content. The primary accent is teal (`#4da7aa`), used for buttons, hero gradient, and highlights. The page communicates credibility and care, targeting both nurses seeking placement and healthcare facilities seeking staff. It is image-heavy in the hero and destination sections, text-forward in the benefits sections. Ideal for: healthcare staffing, nursing agencies, allied health, telehealth, wellness clinics, medical recruitment.

## Design Law

**White sections speak trust; dark sections speak authority. Never put a white section between two dark sections.**

## Architecture Overview

Route: `/template-k`
Entry: `templates/template-k/index.tsx` — exports `TemplateKPage`

Render order (top → bottom):
1. `Navbar` — sticky, white, top info bar + logo + nav links + CTA
2. `Hero` — full-bleed 3-slide image carousel, teal gradient, search form, trust indicators
3. `StatsBar` — 3 trust stats: 48hr placement, 8 years experience, quality care
4. `HowWeWork` — 3-step process in light gray bg
5. `WhyChooseUs` — 4 USP feature points
6. `PayTransparency` — dark section, pay breakdown feature
7. `WeeklyPay` — dark section, financial independence feature
8. `DayOneBenefits` — dark section, day-1 benefits feature
9. `Specialties` — 6 specialty cards in light gray bg
10. `AssignmentOptions` — tabbed assignment types
11. `Destinations` — 4 highest-paying market cards
12. `Testimonials` — dark section with scrolling marquee + star ratings
13. `CareAreas` — specialty category grid
14. `Footer` — dark, subscribe form, nav links, contact info

All sub-components live in `templates/template-k/components/`.

## What You Must Never Do

- Do not change `border-radius: 5px` on buttons — this template uses square-ish buttons, not pills.
- Do not swap DM Sans for any other font. Urbanist is used only for overline/tag labels.
- Do not change the hero bottom radius (`border-bottom-left-radius: 60px; border-bottom-right-radius: 60px`).
- Do not put a white section between two dark sections (PayTransparency / WeeklyPay / DayOneBenefits must remain as a consecutive dark block).
- Do not add more than 3 slides to the hero carousel.
- Do not remove the teal linear-gradient overlay from the hero — it is what makes the text readable over images.
- Do not use `position: absolute` in any hand-written component body (only in hero overlay and hero gradient layers).
- Do not use any animation library except Framer Motion (`motion/react`).
- Do not add tablet-specific breakpoints — only `lg:` (desktop ≥1024px) and base (mobile).

## Content Swap Protocol

1. Open `CONTENT.md` — every slot is listed with its current placeholder value.
2. Replace each slot value directly in the relevant component file. Slot IDs map to variable names or JSX text nodes.
3. For images: replace the `src` URL string only. Do not change image dimensions or aspect ratio wrappers.
4. For the hero slider: the 3 slide images are in `Hero.tsx` as an array `SLIDES`. Replace the `image` property of each item.
5. For contact phone numbers: two instances in Navbar, one in Footer. All three must be updated.
6. For destination cards: each card in `Destinations.tsx` has `city`, `state`, `avgWeekly`, `type`, `image`, and `ctaUrl` props. Update all.
7. For testimonials: each testimonial object in `Testimonials.tsx` has `name`, `role`, `quote`. The marquee auto-scrolls — no layout changes needed.
8. After swapping, run `npm run dev` and verify at `/template-k` before handing off.

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

The testimonials marquee uses a continuous CSS-driven animation (`animate-marquee`) defined in Tailwind config — NOT Framer Motion, as it must loop infinitely.

## Image Protocol

- **Hero slides**: Webflow CDN URLs (real images, public). Use as-is.
- **Section images**: Webflow CDN `.webp` files. All are publicly accessible.
- **Logo**: Webflow CDN PNG — `bettermint_black_mediclinic_image.png`
- **Specialty / care area icons**: Webflow CDN `.webp` files.
- **Testimonial avatars**: Use the `customer image.svg` or placeholder face SVGs from CDN.
- **Fallback**: If a CDN image fails, show a `#d8d8d8` background div at the same dimensions.
- **Never** use placeholder boxes, color swatches, or `[image]` text as image stand-ins.
- All `<img>` tags must include `alt` text describing the medical subject.
