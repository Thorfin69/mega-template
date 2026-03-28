# DESIGN.md — Template N: Home Loans / Mortgage Lending

## Color Palette

The palette is dark-and-warm: deep navy dominates large backgrounds; warm amber is the single accent used for all CTAs, badges, and stat values; cream-white provides breathing room for content-heavy sections.

| Token | Hex | Semantic Role |
|---|---|---|
| `primary` | `#162843` | Navbar bg, Footer bg, Lender Logos bg |
| `dark` | `#1a1a2e` | Hero bg, StatsBar bg |
| `darkest` | `#061d37` | Rates section bg, Contact section bg |
| `accent` | `#f7b433` | CTA buttons, NMLS badge, eyebrow badge, hero heading accent, stat values, check icons |
| `accent-hover` | `#e6a827` | Hover state for amber CTA buttons |
| `cream` | `#fff7ee` | Main content section backgrounds (hero feature area, loan types) |
| `cream-2` | `#fef5ec` | Calculator section background (slightly deeper cream) |
| `cream-card` | `#f3d7bc` | Alternate cream, used in some card/section overflows |
| `white` | `#ffffff` | Navbar bg, LenderLogos bg, TeamSection bg, BlogSection bg |
| `body-dark` | `#444444` | Body text on light/cream sections |
| `muted` | `#6b7577` | Border color variable (`--border`), secondary text on light sections |
| `muted-light` | `#e2ebedd9` | Footer links, body text on dark sections |
| `tertiary` | `#e2ebed80` | Tertiary text on dark sections |
| `dark-forest` | `#002c15` | Text on amber buttons and amber badges (maximum contrast) |
| `deep-teal` | `#003e54` | Section headings on cream/white sections (H2, H3 using Playfair Display) |
| `overlay` | `rgba(0,0,0,0.15)` | `#00000026` — darkening gradient over hero background image |
| `card-border` | `rgba(107,117,119,1)` | Team member card inset box-shadow border |
| `white-border` | `rgba(255,255,255,0.1)` | Dividers on dark sections (StatsBar bottom border) |

## Typography

Three fonts are used. **Outfit** handles all UI text. **Playfair Display** handles editorial/display headings. **Manrope** is available for subheadings that need a softer weight. All three are loaded via Google Fonts.

| Usage | Font | Size | Weight | Color |
|---|---|---|---|---|
| H1 (hero heading) | Playfair Display | `3.9rem` (mobile: `2.4rem`) | 500 | `#ffffff` |
| H1 accent span | Playfair Display | (inherited) | 500 | `#f7b433` |
| H2 section headings | Playfair Display | `2.8rem` (mobile: `1.65rem`) | 600 | `#003e54` |
| H2 on dark sections | Playfair Display | `2.8rem` | 600 | `#ffffff` |
| H3 card titles | Playfair Display | `2rem` → `1.25rem` (responsive) | 500 | `#0e1517` |
| Section overline | Outfit | `0.75rem` | 500 | `#1a1818` (light bg) / `#f7b433` (dark bg) — uppercase, letter-spacing 0.1em |
| Body paragraph | Outfit | `1rem` | 400 | `#444444` |
| Body medium (lead) | Outfit | `1rem`–`1.2rem` | 400 | `#ffffff` (on dark) |
| Small text | Outfit | `0.875rem` | 400–500 | `#6b7577` or `#e2ebedd9` |
| Caption / label | Outfit | `0.95rem` | 400 | `#e2ebedd9` |
| Stat value | Outfit | `2.5rem` lg: `3rem` | 700 | `#f7b433` |
| Nav links | Outfit | `1rem` (16px) | 400 | `#f0f0f0` (on dark nav) / `#1a1a2e` (on white nav) |
| Button | Outfit | `1rem` | 300 (primary) / 600 (ghost) | white or `#1a1a2e` |
| Eyebrow badge | Outfit | `0.75rem` | 500 | `#002c15` on amber bg / `#1a1818` on cyan bg |
| Footer link | Outfit | `0.95rem` | 400 | `#e2ebedd9` |

Letter spacing: Section overlines use `letter-spacing: 0.1em`. Playfair Display H1/H2 use `letter-spacing: -0.0075em`. Outfit body uses default.
Line height: Body text uses `1.8rem`. Headings use `1.2`–`1.25`. Overlines use `0.75rem` (tight).

## Spacing System

| Token | Value | Usage |
|---|---|---|
| Section padding (desktop) | `py-24` (6rem top + bottom) | Header hero |
| Section padding (standard) | `py-16`–`py-20` | All other sections |
| Container max-width | `max-w-7xl` (1280px) | All sections (`container-large`, `container-70`) |
| Container max-width narrow | `max-w-[44rem]` | Centered text blocks (`container-40`) |
| Container padding | `px-4` mobile, `px-12` desktop (`lg:px-12`) | All sections |
| Card padding | `p-6`–`p-8` (`2rem 1.7rem` on team cards) | Card components |
| Card gap | `gap-4`–`gap-6` | Grid gaps |
| Section header margin-bottom | `mb-10`–`mb-14` | Space between heading and grid |
| Stats bar padding | `py-14` | StatsBar |
| Footer padding | `pt-20 pb-6` | Footer (`padding-top: 5rem; padding-bottom: 1.5rem`) |

## Button System

| Variant | Classes | Notes |
|---|---|---|
| Primary (amber) | `bg-[#f7b433] text-[#1a1a2e] font-bold px-8 py-3.5 rounded-md hover:bg-[#e6a827] transition-colors` | Hero primary CTA, all main CTAs |
| Primary with icon | Add `inline-flex items-center gap-2` and arrow SVG | Used in hero and navbar |
| Ghost (dark/white border) | `bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/20 transition-colors` | Hero secondary CTA on dark bg |
| Nav CTA (dark pill) | `bg-[#1a1a2e] text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#f7b433] hover:text-[#1a1a2e] transition-colors` | Navbar "Apply Now" |
| Standard light section | `bg-[#162843] text-white rounded-[10px] px-6 py-3 font-light hover:border-[#1e4c54] transition-colors` | Buttons on cream sections |
| White on dark | `bg-white text-[#162843] rounded-[5px] px-6 py-3` | Alternate CTA on dark sections |
| Download/secondary | `border border-white/20 text-white rounded-md px-6 py-2.5` | Ghost with no fill |

**Rule: No rounded-full (pill) buttons on this template. All CTAs use `rounded-md` (8px) or `rounded-[10px]`.**

## Border Radius System

| Value | Usage |
|---|---|
| `rounded-md` / `rounded-[8-10px]` | All CTA buttons, form inputs |
| `rounded-full` / `rounded-[20rem]` | NMLS ID badge, eyebrow badge pill only |
| `rounded-xl` / `rounded-2xl` | Team member cards (`rounded-[1rem]`), loan officer dropdown cards |
| `rounded-full` (50%) | Loan officer avatars in dropdown |
| `rounded-[6px]` | Eyebrow overline pill on light sections |

## Shadow System

| Usage | Value |
|---|---|
| Team member card | `box-shadow: inset 0 0 0 1px var(--border)` (inset border only, no elevation) |
| Loan officer dropdown | `shadow-xl` — `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)` |
| No hero/section shadows | Unlike dark SaaS templates, this template uses minimal drop shadows |

## Animation Timing

| Token | Value |
|---|---|
| Standard fade-up | `duration: 0.6, ease: 'easeOut'` |
| StatsBar fade-up | `duration: 0.5, ease: 'easeOut'` |
| Stagger children | `staggerChildren: 0.12` |
| StatsBar stagger | `staggerChildren: 0.1` |
| Hero | `animate="visible"` — no `whileInView`, fires immediately |
| Viewport threshold | `{ once: true, amount: 0.2 }` for all `whileInView` |
| LenderLogos group image | `initial: { opacity: 0, scale: 0.95 }`, `duration: 0.6` |
| Navbar dropdown | `duration: 0.2`, `initial: y: -8, opacity: 0` |
| Mobile menu | `duration: 0.2`, `initial: y: -10, opacity: 0` |
| Marquee (lender logos) | CSS animation `animate-marquee-left` — continuous left scroll, no Framer Motion |

## Responsive Breakpoints

Only two breakpoints are used:
- **Mobile** (base): single column, full-width elements, hamburger nav
- **Desktop** (`lg:`, ≥1024px): multi-column layouts, full nav

Key layout changes at `lg:`:
- Navbar: hamburger → full nav + CTA + loan officer dropdown
- Hero: `text-4xl` → `text-6xl`; `py-24` → `py-32`
- StatsBar: `grid-cols-1` → `grid-cols-3`
- LoanTypes: `grid-cols-1` → `grid-cols-2`
- Team: `grid-cols-2` → `grid-cols-4` (or more)
- Calculator: `grid-cols-1` → `grid-cols-2`
- Testimonials: `grid-cols-1` → `grid-cols-3`
- Blog: `grid-cols-1` → `grid-cols-3`
- Footer: `grid-cols-1` → `grid-cols-4`

## Section Background Sequence

| # | Section | Background | Notes |
|---|---|---|---|
| 1 | Navbar | `#ffffff` (white, sticky) | Drops `shadow-sm` on scroll |
| 2 | Hero (header-section) | Background image + `rgba(0,0,0,0.15)` overlay | Real-estate photography full bleed |
| 3 | StatsBar | `#1a1a2e` (deep navy) | Amber stat values, bottom `border-white/10` |
| 4 | LenderLogos | `#ffffff` (white) | Marquee strip + group photo |
| 5 | LoanTypes | `#fff7ee` (warm cream) | 2-card split layout |
| 6 | TeamSection | `#ffffff` (white) | Officer grid, inset-border cards |
| 7 | Calculator | `#fef5ec` (deep cream) | Embedded calculator widget |
| 8 | RatesSection | `#061d37` (darkest navy) | White text on dark |
| 9 | Testimonials | `#fff7ee` (warm cream) or white | Review cards |
| 10 | BlogSection | `#ffffff` (white) | 3-column post grid |
| 11 | ContactSection | `#061d37` (darkest navy) | White text, form + dual CTAs |
| 12 | Footer | `#162843` (primary navy) | 4-column grid, lighter navy than hero |

Dark/light rhythm: dark → light → dark → light → light → light → cream → dark → cream → light → dark → dark. The bottom two sections are both dark, giving a "closing bracket" feel to the page.

## Section-by-Section Visual Design Notes

### Navbar
White background, white box shadow. Logo sits left; NMLS ID badge (`#f7b433` amber pill) sits immediately to the right of the logo at all times. Desktop nav links are `#1a1a2e` with amber hover. "Apply Now" CTA is a dark navy `rounded-md` button that swaps to amber on hover. Loan officer dropdown is a white `rounded-xl` panel with 2-column officer cards, each showing avatar + name + phone + NMLS#.

### Hero (header-section / section-wrapper)
Full-bleed background image (real estate photography) with a `rgba(0,0,0,0.15)` darkening gradient. All text is white. Eyebrow line: amber badge pill left + small gray text right. H1 uses Playfair Display at `3.9rem` with the second part of the heading rendered as an amber `<span>`. Feature bullets use amber circle-check SVG icons. Two CTA buttons: amber fill (primary) + glass/white-border ghost (secondary).

### StatsBar
Dark navy (`#1a1a2e`) section immediately below the hero with a subtle `border-b border-white/10` bottom edge. Three stat blocks in a centered grid. Each shows a large amber number (`text-4xl lg:text-5xl font-bold text-[#f7b433]`) above a small gray description. No icons — numbers do all the talking.

### LenderLogos
Clean white section. A centered uppercase overline heading in small gray text. Below it: a horizontally scrolling marquee of partner/lender SVG logos in grayscale at 60% opacity, transitioning to full color+opacity on hover. Below the marquee: a full-width rounded-2xl group or lifestyle photography image.

### LoanTypes (Purchase + Refinance)
Two-column split on cream (`#fff7ee`). Each column is a card with: small eyebrow label, Playfair Display H2, body paragraph, tag pills (rounded-full soft labels), and a dark navy CTA button. Cards are equal height.

### TeamSection
White background, centered header. Officer cards arranged in a responsive grid (2 cols mobile, 4+ desktop). Each card: avatar photo (circle), name in bold, title in gray, NMLS ID badge in amber. Card has an inset `box-shadow` border acting as a subtle card edge — no drop shadow.

### Calculator
Deep cream (`#fef5ec`) background. Left column: heading + body explaining the tool. Right column: the calculator UI (inputs for loan amount, interest rate, term, and a monthly payment result display).

### RatesSection
Darkest navy (`#061d37`) background — maximum contrast. White heading and body copy. A rates table or display widget shows current national average rates. Two ghost CTAs on dark.

### Testimonials
Cream or white background. Centered section header. Three equal-width review cards with: quote text, reviewer name, and location line. Cards use minimal border/shadow; content is the focus.

### BlogSection
White background. Centered `READING` overline in amber + `Our Blogs` H2. Three blog post cards with: category tag pill (amber or navy), post thumbnail image (`rounded-2xl`), post title, author + date byline. A "Read More" text link at bottom right.

### ContactSection
Darkest navy (`#061d37`). White text throughout. Left: `GET IN TOUCH` overline, H2, body paragraph, two CTAs stacked (primary amber + ghost). Right: contact form with full-name, email, phone fields and an eligibility sub-form (credit score dropdown + annual income).

### Footer
Primary navy (`#162843`) — slightly lighter than hero/contact dark. Logo top-left with legal disclaimer paragraph below. Four column grid: (1) logo + legal text, (2) site navigation links, (3) loan type links, (4) contact info (email, phone, headquarters). Social icon links use the white-on-dark pattern. Bottom bar: copyright + NMLS consumer access link.

## Image Usage Patterns

- **Background image (hero)**: Full-bleed, `background-size: cover`, `background-position: center`. A `rgba(0,0,0,0.15)` overlay reduces contrast to keep white text readable. Never remove the overlay.
- **Lender logos**: Always displayed as SVG at a fixed height (48px). Grayscale + 60% opacity default; full color + full opacity on hover. The marquee doubles the logo array to create infinite scroll.
- **Officer/team photos**: Circle crop (`rounded-full`), fixed 40px in dropdown, ~180px in team cards. Use `.avif` format from Webflow CDN. Show `Portrait_placeholder.avif` if a photo is missing — never show broken `<img>` tags.
- **Group/lifestyle photo**: Full width, `max-h-[400px]`, `object-cover`, `rounded-2xl`. One image per page, used in LenderLogos section.
- **Blog thumbnails**: `rounded-2xl`, fixed aspect ratio (16:9 or 3:2), `object-cover`. Category tag overlaid as an amber/navy pill in the top-left corner of the image.

## Spacing / Layout Patterns

- All sections use `max-w-7xl mx-auto px-4 lg:px-12` for consistent horizontal centering.
- Section vertical rhythm is `py-16` (4rem) for standard sections, `py-24 lg:py-32` for the hero.
- The StatsBar is intentionally tighter at `py-14` — it reads as a transitional band, not a full section.
- Card grids use `gap-6`–`gap-8`. No card should have less than 16px gap to a sibling.
- Team member cards are fixed `width: 17.8rem` in the original CSS — in Tailwind use `w-72` as the closest equivalent.
- All section heading blocks (overline + H2 + subheading) are centered on the page, with a consistent `mb-10`–`mb-14` gap before the content grid.
