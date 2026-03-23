# CLAUDE.md — Template B: Light Clean

## What This Template Is

A light, professional, conversion-focused landing page designed for service businesses
that need to establish trust quickly and drive enquiry form submissions. The visual
register is calm, credible, and structured — white and light-gray backgrounds with a
single strong teal accent color. Built originally for SympleTax (IRS tax relief) but
equally suited to any professional service: legal, healthcare, financial advisory,
consulting, SaaS.

## Design Law

Every background is white or #F7F9FF. No dark sections except the footer and hero overlay.

## Architecture

Route: /template-b
Entry: templates/template-b/index.tsx → exports SympleTaxPage
Components (in render order):
1. STNavbar — fixed white header, logo + nav + phone + teal CTA
2. STHero — full-bleed bg image with dark overlay, left headline, right stat badges
3. STTrustBar — 4-column trust signals with icon wells
4. STProblems — 3×2 image card grid (the "problem" section)
5. STTwoTrack — tab-based accordion section
6. STServicesTabs — case study tabs with teal left panel
7. STSolutions — 4-card service grid
8. STHowItWorks — 3-step process rows
9. STTestimonials — split carousel (teal left, quote right)
10. STIRSNotice — split section with CTA + image
11. STStats — full-width stats with background image
12. STBlog — 3-col blog card grid
13. STFAQ — 2-col accordion
14. STCTA — split CTA with contact form
15. STFooter — dark navy footer with watermark brand name

## Content Swap Protocol

1. Replace accent color #00A4A4 with client brand color (find/replace across all components)
2. Update logo in STNavbar (img src)
3. Replace all company name references ("SympleTax")
4. Update hero headline, subheadline, and CTA button text in STHero
5. Replace stat values (98%, 2,400+) with client stats
6. Replace problem cards with client-relevant pain points in STProblems
7. Update case study data in STServicesTabs
8. Update process steps in STHowItWorks
9. Replace testimonials in STTestimonials
10. Update FAQ content in STFAQ
11. Update form fields and CTA copy in STCTA
12. Update footer contact details in STFooter

## Animation Standard

Scroll-triggered: `initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}`
Stagger: `variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}`
Hero: mount-animated with staggered delays (0, 0.1, 0.2, 0.35)
Tab/carousel switches: AnimatePresence mode="wait", duration 0.35s

## What You Must Never Do

- Never make any section background dark (except footer #0C206D and hero overlay)
- Never change the pill button shape (rounded-[50px])
- Never use a font other than Geist
- Never add position:absolute to new components
- Never remove the hero right-column stat badges on desktop
- Never collapse the 2-col testimonial layout into a single column on desktop
