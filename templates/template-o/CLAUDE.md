# CLAUDE.md — Template O: Lead Generation Agency (Local Service Pros)

## What This Template Is

Template O is a high-conversion lead generation agency landing page built from the BrandBooster website (brandbooster.ai) — a paid-ads and lead generation agency targeting local service professionals (plumbers, roofers, lawyers, contractors, dentists, electricians). The visual register is dark-and-electric: a near-black (`#000212`) base with a teal/cyan accent (`#219fa3`) used for section overlines, scrollbar decorations, and interactive highlights, offset by gradient-text headings that shift from white to light purple. The hero uses a radial glow (`rgba(120, 119, 198, 0.3)`) over the dark background rather than a photography overlay. The page is stats-forward and social-proof-heavy: awards carousel, client result stats with count-up animation, testimonial video carousel (Splide.js), and a prominent popup-based contact form. It targets SMBs spending $700–$1,200/month on advertising and converts via a "Book A Free Call" popup CTA scattered across every section. Ideal for: digital marketing agencies, PPC agencies, lead generation services, paid ads consultants, growth agencies, local SEO firms.

## Design Law

**Every primary CTA fires the same popup overlay — do not use standard page anchor links for CTAs. The popup form is the sole conversion mechanism on this page and must remain accessible from every section.** The gradient headings (`#ffffff` → light indigo via `radial-gradient`) must never be replaced with flat white text. The dark background (`#000212`) is the dominant surface — never introduce a light or cream section bg.

## Architecture Overview

Route: `/template-o`
Entry: `templates/template-o/index.tsx` — exports `TemplateOPage`

Render order (top → bottom):
1. `PopupOverlay` — full-screen modal with lead capture form (Full Name, Email, Company Website, phone/slider inputs); triggered by all CTA buttons via `data-open-popup`
2. `Navbar` — dark transparent sticky nav, logo left, Services dropdown + Use Cases dropdown + Pricing / About Us / Blogs nav links, "Contact Us" ghost button right
3. `HeroSection` — dark (`#000212`) bg with radial glow, badge overline with star icon, H1 with gradient accent span, animated typing sub-heading (Typed.js), star-rating trust bar (`436 SMBs`), primary CTA button, `23,000+ Booked Calls` trust banner with avatar group image, "Featured In Top Media Outlets" media logos marquee below
4. `AwardsCarousel` — dark bg, full-width horizontal marquee of award badge images (Titan Awards, Capterra, Stevie, Software Advice, GetApp, NVIDIA Inception, Software Suggest)
5. `StatsSection` — dark bg, 4-stat grid: animated count-up numbers (45.7%, 55%, 20K+, 5600+) with icon, metric label; section heading "Real Leads. Real Clients. Real Numbers."
6. `IndustriesSection` — dark bg, scrolling horizontal tag strip (Lawyers, Plumbers, Roofers, Contractors, Dentists, etc.), section heading "Real Clients. Real Results. Real ROI.", sub-heading about service-based professionals
7. `ClientResultsSection` — dark bg, featured client video testimonial (video embed + static fallback card), 4 result metric cards (+122% leads in 3 weeks, 2x Lower Cost Per Lead, 45% ROI Improvement, 89% Client Satisfaction), awards mini-strip below metrics
8. `ProcessSection` (`#How-It-works`) — dark bg (`black-copy` class), 3-step vertical timeline with step numbers, step title + body, Lottie animation on step 3; section overline "Our Process", H2 "Our 3-Step Lead Gen Process"
9. `PricingSection` — dark bg, section overline "Affordable Pricing", H2 "Open to Value Based Partnership", 2-column card grid: Silver Plan (mid-size/SMBs, Google Ads focus) + Gold Plan (full social media + Google scale); each card has features checklist organized by Platforms, Management, Data & Support / Creatives, Reporting; add-ons dropdown; bonus offer banner ($500 Google Ads Credit)
10. `ContactSection` (`#contact-form-section`) — dark bg, section overline "Contact Us", H2 "Lets create impact", 2-column: left is inline contact form (Full Name, Email, Company Website, Monthly Budget slider, Business Type dropdown, Current Channels checkbox group) + right is a CRM/API integration block (ConvertKit/ActiveCampaign); section CTA "Schedule a call"
11. `FAQSection` — dark bg, H2 "Frequently Asked Questions", 2-column accordion grid, 8 FAQs
12. `Footer` — dark bg, 4-column grid: (1) logo + address + social links, (2) Services dropdown links, (3) Use Cases by industry, (4) Solutions column + newsletter signup form; legal strip at bottom "© 2026 All Rights Reserved by 88 Ventures US, LLC"

All sub-components live in `templates/template-o/components/`.

## Currently Scaffolded Components

| Component | File | Status |
|---|---|---|
| (none scaffolded yet) | — | — |

All sections (PopupOverlay through Footer) need to be built before the page is production-ready.

## What You Must Never Do

- Do not replace the popup-based CTA system with standard `<a href="#contact">` scroll-anchor links — the entire conversion flow depends on a single popup overlay that all buttons share.
- Do not swap Inter, Open Sans, Lato, or PT Serif for any other font — all four are loaded from the BrandBooster Webflow CDN and used in the original page; Inter is the primary UI font.
- Do not use a light or cream section background on any section — this template is fully dark (`#000212` / `#29292B` / `#1B1B1D`). There are no cream or white section backgrounds anywhere on this page.
- Do not render the gradient heading text as plain white — the H1 and H2 headings use CSS gradient fills; flat white defeats the visual brand.
- Do not add a static background image to the hero — the BrandBooster hero uses a pure CSS radial-glow effect over dark bg, not photography.
- Do not show more than 2 pricing columns (Silver + Gold) — the original has exactly two plans with no third option on the main page.
- Do not use any animation library except Framer Motion (`motion/react`) for scroll-triggered fade-ups, and GSAP (`gsap` + `ScrollTrigger`) for the stacked cards section (`.cards_wrapper` / `.card-2`). The count-up numbers use a custom `fb-count` data attribute observer pattern.
- Do not add tablet-specific breakpoints — only `lg:` (desktop ≥1024px) and base (mobile).
- Do not hard-code the Typed.js rotating text — it must be driven by an array of business-type strings (`SaaS founders`, `Doctors`, `Roofers`, `Lawyers`, `Plumbers`, etc.).
- Do not remove the `data-open-popup` attribute from any CTA button — every button on the page that opens the form uses this attribute selector.

## Content Swap Protocol

1. Open `CONTENT.md` — every slot is listed with its current placeholder value.
2. Replace each slot value in `index.tsx` where the content constants are defined (top of file, clearly labeled).
3. For the logo: replace `logoSrc` in both Navbar and Footer. Use the same SVG or PNG. Current logo: `690efe96164399fade616096_Group 112.svg`.
4. For the popup form: the popup form fields (Full Name, Email, Company Website, Monthly Budget, Business Type, Current Channels) are defined in `PopupOverlay` — update field labels and placeholder text there.
5. For the typed text animation: update the `TYPED_STRINGS` array — each item is one business category displayed in the rotating H1 sub-line.
6. For stats: update the `STATS` array — each entry has `icon` (image URL), `value` (number for count-up), `suffix` (e.g. `%`, `K+`, `+`), `label`.
7. For awards: update the `AWARD_IMAGES` array — each entry has `src` (CDN .avif URL) and `alt` (award description). The marquee doubles the array automatically.
8. For the client results: update `CLIENT_RESULTS` — one featured client video + static card, plus 4 result metric cards with `value` and `label`.
9. For the process steps: update `PROCESS_STEPS` — each has `number` (SVG image URL), `title`, `body`.
10. For pricing: update `PRICING_PLANS` — two objects with `name`, `subtitle`, `cta_label`, `feature_groups` (array of `{ group_title, items: string[] }`), `bonus_offer`.
11. For FAQs: update `FAQ_ITEMS` — each has `question` and `answer`.
12. For footer nav: update `FOOTER_SERVICES`, `FOOTER_USE_CASES`, `FOOTER_SOLUTIONS` arrays — each is `{ label, href }`.
13. After swapping, run `npm run dev` and verify at `/template-o` before handing off.

## Animation Standard

All scroll-triggered fade-up animations use this exact pattern. Copy verbatim:

```tsx
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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

The HeroSection uses `animate="visible"` (not `whileInView`) since it is above the fold.

The slide-in-from-left stat cards use `initial={{ opacity: 0, x: -30 }}` / `animate={{ opacity: 1, x: 0 }}` with `whileInView` — matching the original Webflow `translate3d(-30px, 0px, 0px)` entrance.

The count-up numbers use an `IntersectionObserver` that sets `data-fb-count-animate="true"` when the element enters the viewport at ≥50% threshold. Implement as a custom React hook.

The awards marquee and media logos marquee use CSS `animation: scrollLoop` (continuous left scroll) — not Framer Motion. This is the exception to the Framer Motion rule.

The FAQ accordion uses Webflow dropdown open/close behavior — implement as a controlled `useState` toggle with a `max-height` CSS transition, not a Framer Motion animation.

The client testimonial carousel uses Splide.js in loop mode at `perPage: 3`, speed `4800ms`, easing `linear`, autoplay enabled — replicate with Splide React or convert to a CSS infinite marquee.

## Webflow / Special Interactions

The original BrandBooster site uses Webflow IX2 for slide-in entrance animations (`translate3d(-30px, 0px, 0px)` + opacity 0 → 1) on stat cards, section headers, and the timeline steps. In the React implementation these are replaced with Framer Motion `fadeUp` + `slideInLeft` variants. The "Schedule a call" and all `data-open-popup` triggers open a single `PopupOverlay` component via React state lifted to the page root. The Typed.js typing animation is replaced by a `react-typed` or native `useEffect` implementation targeting the `.test` span in the hero sub-heading. GSAP ScrollTrigger is used only for the stacked pricing/feature cards (`.cards_wrapper` + `.card-2` classes) — scale transform stacking on scroll.

## Fonts

All four fonts are loaded via Google Fonts. Add to root `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

- **Inter** — primary UI font (navlinks, body text, buttons, form fields, stat labels, footer)
- **Open Sans** — secondary UI font (section body copy, card descriptions, pricing feature lists)
- **Lato** — tertiary font (sub-headings, badges, overline labels)
- **PT Serif** — serif accent (used sparingly for editorial italics only, not primary headings)

## Image Protocol

- **Logo**: Webflow CDN SVG — `690efe96164399fade616096_Group 112.svg` — used on dark navbar and dark footer; never invert; it is white-on-dark by design.
- **Award badges**: Webflow CDN `.avif` files — 10 award images in the carousel; each has a descriptive `alt` from the original HTML (e.g. `"Titan Awards logo featuring a stylized Moai statue head and the text 'TITAN AWARDS'"`).
- **Media logos**: Webflow CDN `.avif` / `.png` files — `Frame 10.avif`, `Frame 16.avif`, `Frame 11.png`, `Frame 22.png`, `Frame 23.png`, `Frame 26.avif`, `Frame 25.avif`, `Frame 24.avif`, `Frame 21.avif`, `Frame 6.avif`, `Frame 3.avif`, `Frame 18.avif`, `Frame 5.avif` — used in the "Featured In Top Media Outlets" marquee.
- **Hero trust banner image**: `690efe96164399fade6161a6_..._Group-p-500.avif` — avatar group image at 220px width beside the "23,000+ Booked Calls" stat.
- **Hero light effects**: `690efe96164399fade6160f5_Hero Right.webp` and `690efe96164399fade6160f4_Hero Left.webp` — purely decorative glow overlays positioned absolute left/right of the hero; not content.
- **Step icons**: SVG images per step (`one.svg`, `two.svg`, `three.svg`) + illustration SVGs (`Group 3448.svg`, `Group 3449.svg`); step 3 uses a Lottie JSON animation.
- **Client photo**: `690efe96164399fade61631e_patrick-findaro-visa-franchise-square.avif` — client avatar used in testimonial card.
- **Favicon**: `670fc630a44495814a88ef2f_Frame 1.png` (shortcut icon), `670fc63212fe9538e45a372e_Frame 2.png` (apple touch icon).
- **Fallback**: If a CDN image fails, show a `#1B1B1D` background div at the same dimensions.
- **Never** use placeholder boxes, color swatches, or `[image]` text as image stand-ins.
- All `<img>` tags must include `alt` text describing the subject.
