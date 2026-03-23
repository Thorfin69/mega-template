# DESIGN.md — Template L: B2B SaaS Cloud

## Color Palette

| Token | Hex | Semantic Role |
|---|---|---|
| `primary` | `#027DFC` | CTA buttons, badges, links, accents, Stats bg, CTABanner bg |
| `dark` | `#27313D` | Dark section backgrounds (SecuritySection, Integrations, Testimonials, Footer) |
| `darker` | `#1C2530` | Manifesto section background |
| `white` | `#FFFFFF` | Hero, Features, WhyUs, Pricing, BlogSection section backgrounds |
| `surface` | `#F8FAFC` | HowItWorks, ValueProps, FAQ section backgrounds |
| `body` | `#374151` | Body copy on light sections |
| `muted` | `#6B7280` | Secondary text, captions |
| `muted-dark` | `#9CA3AF` | Body copy on dark sections |
| `border` | `#E5E7EB` | Card borders, dividers |
| `border-dark` | `rgba(255,255,255,0.1)` | Card borders on dark sections |
| `hover-primary` | `#0268d4` | Hover state for primary blue buttons |
| `success` | `#10B981` | Included feature checkmarks in Pricing |
| `star` | `#F59E0B` | Star rating color in Testimonials |

## Typography

All text uses `DM Sans` loaded via Google Fonts in the root `index.html`.

| Usage | Size | Weight | Color |
|---|---|---|---|
| Hero H1 | `2.75rem` / `3.5rem` (lg) | 700 | `#27313D` |
| Section H2 | `2rem` / `2.5rem` (lg) | 700 | `#27313D` or `white` |
| Card H3 | `1rem` | 700 | `#27313D` |
| Card H3 small | `0.875rem` | 700 | `#27313D` |
| Section overline | `0.875rem` | 600 | `#027DFC` — `uppercase tracking-widest` |
| Body paragraph | `1rem` | 400 | `#6B7280` |
| Body small | `0.875rem` | 400 | `#6B7280` or `#9CA3AF` |
| Caption / label | `0.75rem` | 400–500 | `#9CA3AF` |
| Stat value | `3.5rem` / `4.5rem` (lg) | 700 | `white` |
| Nav link | `0.9rem` | 500 | `#27313D` |
| Button | `0.875rem` | 600 | — |

Letter spacing: Hero H1 uses `tracking-[-0.02em]`. All other headings use default.
Line height: Body text uses `leading-relaxed` (1.625). H1/H2 use `leading-tight` (1.25).

## Spacing System

| Token | Value | Usage |
|---|---|---|
| Section padding | `py-20` (80px) | All sections except Hero |
| Hero padding top | `pt-20` | Below sticky navbar |
| Container max-width | `max-w-[1200px]` | All sections |
| Container padding | `px-4` mobile, `px-4` desktop | (max-width handles centering) |
| Card padding | `p-6`–`p-8` | Depends on card size |
| Card gap | `gap-5`–`gap-7` | Grid gaps |
| Section header margin-bottom | `mb-14` | Space between header and grid |

## Button System

| Variant | Classes |
|---|---|
| Primary (pill) | `bg-[#027DFC] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0268d4] transition-colors` |
| Primary shadow | Add `shadow-[0_4px_20px_rgba(2,125,252,0.35)]` for hero CTAs |
| Ghost (pill) | `border border-[#E5E7EB] text-[#27313D] px-8 py-3.5 rounded-full font-semibold text-sm hover:border-[#027DFC] hover:text-[#027DFC]` |
| White on blue | `bg-white text-[#027DFC] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-50` |
| Outline on blue | `border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:border-white hover:bg-white/10` |
| Plan CTA featured | `bg-[#027DFC] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#0268d4]` |
| Plan CTA standard | `border border-[#027DFC] text-[#027DFC] py-3 rounded-full text-sm hover:bg-[#027DFC] hover:text-white` |
| Navbar CTA | `bg-[#027DFC] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0268d4]` |

**Rule: All primary actions use `rounded-full`. No rectangular primary buttons.**

## Border Radius System

| Value | Usage |
|---|---|
| `rounded-full` | All CTA buttons, badges, plan toggle, stat dividers |
| `rounded-2xl` | Feature cards, testimonial cards, security image, dashboard image, blog posts, pricing cards |
| `rounded-xl` | Feature icon container, WhyUs icon container, FAQ items, footer subscribe button, integration cards |
| `rounded-lg` | Footer email input |
| `rounded-md` | Navbar desktop nav link hover |

## Shadow System

| Usage | Value |
|---|---|
| Navbar | `shadow-[0_1px_20px_rgba(0,0,0,0.08)]` |
| Hero dashboard | `shadow-[0_-4px_60px_rgba(0,0,0,0.12)]` |
| Primary CTA shadow | `shadow-[0_4px_20px_rgba(2,125,252,0.35)]` |
| Featured pricing card | `shadow-[0_8px_40px_rgba(2,125,252,0.25)]` |
| Security image | `shadow-[0_8px_40px_rgba(0,0,0,0.3)]` |
| Card hover (light) | `shadow-[0_4px_24px_rgba(2,125,252,0.1)]` |
| WhyUs card hover | `shadow-[0_4px_20px_rgba(2,125,252,0.08)]` |
| FAQ open item | `shadow-[0_2px_16px_rgba(2,125,252,0.08)]` |

## Animation Timing

| Token | Value |
|---|---|
| Standard fade-up | `duration: 0.6, ease: 'easeOut'` |
| Stagger children | `staggerChildren: 0.08`–`0.15` (tighter for dense grids) |
| Hero dashboard | `duration: 0.8, delay: 0.5` |
| Viewport threshold | `{ once: true, amount: 0.2 }` for all whileInView |
| SecuritySection image | `duration: 0.7, ease: 'easeOut'` from `x: 40` |
| Mobile menu | `duration: 0.25` |
| FAQ accordion | `duration: 0.25` |

## Responsive Breakpoints

Only two breakpoints are used:
- **Mobile** (base): single column, full-width elements
- **Desktop** (`lg:`, ≥1024px): multi-column layouts

Key layout changes at `lg:`:
- Navbar: hamburger → full nav + CTA
- Hero heading: `text-[2.75rem]` → `text-[3.5rem]`
- HowItWorks: `grid-cols-1` → `grid-cols-3`
- Features: `sm:grid-cols-2` → `lg:grid-cols-3`
- SecuritySection: `grid-cols-1` → `grid-cols-2`
- WhyUs: `sm:grid-cols-2` (unchanged on lg)
- Integrations: `sm:grid-cols-3` → `lg:grid-cols-7`
- ValueProps: `sm:grid-cols-2` → `lg:grid-cols-4`
- Pricing: `grid-cols-1` → `lg:grid-cols-3`
- Testimonials: `sm:grid-cols-2` → `lg:grid-cols-3`
- BlogSection: `sm:grid-cols-2` → `lg:grid-cols-3`
- Footer: `grid-cols-1` → `lg:grid-cols-4`

## Section Background Sequence

| # | Section | Background |
|---|---|---|
| 1 | Navbar | White (sticky) |
| 2 | Hero | White |
| 3 | HowItWorks | `#F8FAFC` (light gray) |
| 4 | Features | White |
| 5 | SecuritySection | `#27313D` (dark navy) |
| 6 | WhyUs | White |
| 7 | Integrations | `#27313D` (dark navy) |
| 8 | Stats | `#027DFC` (blue) |
| 9 | Manifesto | `#1C2530` (darker navy) |
| 10 | ValueProps | `#F8FAFC` (light gray) |
| 11 | Pricing | White |
| 12 | Testimonials | `#27313D` (dark navy) |
| 13 | BlogSection | White |
| 14 | FAQ | `#F8FAFC` (light gray) |
| 15 | CTABanner | `#027DFC` (blue) |
| 16 | Footer | `#27313D` + bg image overlay |
