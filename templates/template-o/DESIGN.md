# DESIGN.md — Template O: Lead Generation Agency (Local Service Pros)

## Color Palette

The palette is fully dark: a near-black base dominates every section, teal/cyan accents the scrollbar and select UI chrome, and gradient text (white-to-indigo) replaces flat-color headings. There are no light, cream, or white section backgrounds anywhere on this page.

| Token | Hex | Semantic Role |
|---|---|---|
| `bg-base` | `#000212` | Primary page background (hero, most sections) |
| `bg-dark-1` | `#29292B` | Secondary dark surface (stat cards, some section wrappers) |
| `bg-dark-2` | `#1B1B1D` | Tertiary dark (hover states, card overlays, pricing cards) |
| `bg-black-copy` | `#000000` | Process section background (pure black) |
| `accent-teal` | `#219fa3` | Scrollbar thumb, teal link underline, select UI highlight |
| `gradient-start` | `#ffffff` | Gradient heading start color (white) |
| `gradient-mid` | `rgba(120, 119, 198, 0.3)` | Hero radial glow (blended purple/indigo) |
| `gradient-text-end` | `rgb(36, 0, 255)` → `rgb(0, 135, 255)` | Conic gradient used for the `.hero-img-blur` element |
| `gold-accent` | `#e39607` | Gold plan icon color, Gold plan text accents |
| `silver-accent` | `#ffffff` | Silver plan icon fill (white on dark) |
| `section-subtitle` | `#43434e` | Section subtitle badge bg (dark pill) |
| `text-primary` | `#ffffff` | All headings and primary body text on dark bg |
| `text-muted` | `#6A6A6B` | Muted/secondary text (labels, captions, form icons) |
| `text-muted-2` | `#8e8e8e` | Even lighter secondary text |
| `border-white` | `rgba(255,255,255,0.1)` | Card borders, dividers on dark sections |
| `pricing-divider` | `#e39607` (gold) / `rgba(255,255,255,0.2)` (silver) | Horizontal rule inside pricing cards |
| `btn-primary-bg` | `#000212` with border / dark with arrow icon | CTA buttons are dark ghost buttons with arrow icons |
| `btn-hover-bg` | `#1B1B1D` | Button hover fill |
| `feature-section-1` | `#352a4f` | Feature card 1 background (purple-dark) |
| `feature-section-2` | `#303a75` | Feature card 2 background (blue-dark) |
| `feature-section-3` | `#1f3140` | Feature card 3 background (teal-dark) |
| `feature-section-4` | `#3e2476` | Feature card 4 background (deep violet) |
| `overlay-dark` | `rgba(0, 2, 18, 0.8)` | Pricing card overlay on hover |
| `white-05` | `rgba(255,255,255,0.05)` | Stat card overlay / card glass border |

## Typography

Four fonts are used. **Inter** handles all primary UI text. **Open Sans** handles section body copy. **Lato** handles badges and overline labels. **PT Serif** is available as an italic serif accent but is not prominent in headings.

| Usage | Font | Size | Weight | Color |
|---|---|---|---|---|
| H1 (hero heading main) | Inter | `3.5rem`–`4rem` (mobile: `2rem`) | 700 | `#ffffff` |
| H1 accent span | Inter | (inherited) | 700 | CSS gradient fill (white → indigo) |
| H2 section headings | Inter | `2.5rem`–`3rem` (mobile: `1.5rem`) | 700 | `#ffffff` |
| H2 gradient heading | Inter | `2.5rem`–`3rem` | 700 | CSS gradient fill |
| H3 card/step titles | Inter | `1.25rem`–`1.5rem` | 700 | `#ffffff` |
| Section overline badge | Lato / Inter | `0.75rem` | 600–700 | `#ffffff` on dark pill bg — uppercase, letter-spacing 0.05em |
| Body paragraph | Open Sans | `1rem` | 400 | `#8e8e8e` or `rgba(255,255,255,0.7)` |
| Body medium (lead) | Open Sans | `1rem`–`1.125rem` | 400 | `#ffffff` (for key descriptions) |
| Small text | Inter | `0.875rem` | 400 | `#6A6A6B` |
| Stat value (count-up) | Inter | `3.5rem`–`4.5rem` | 700 | `#ffffff` with gradient suffix span |
| Stat suffix (%, K+, +) | Inter | (inherited) | 700 | CSS gradient fill (white → light blue/indigo) |
| Nav links | Inter | `1rem` (16px) | 400 | `rgba(255,255,255,0.8)` on dark nav |
| Pricing plan name | Inter | `1.25rem` | 700 | `#e39607` (Gold) / `#ffffff` (Silver) |
| Pricing feature item | Open Sans | `0.875rem` | 400 | `rgba(255,255,255,0.8)` |
| Pricing feature group title | Inter | `0.875rem` | 600 | `#e39607` (Gold) / `rgba(255,255,255,0.5)` (Silver) |
| FAQ question | Inter | `1rem` | 700 | CSS gradient fill |
| FAQ answer | Open Sans | `0.875rem` | 400 | `rgba(255,255,255,0.7)` |
| Button text | Inter | `0.875rem`–`1rem` | 500–600 | `#ffffff` or `#e3e3e3` |
| Footer heading | Inter | `1.125rem` | 600 | `#ffffff` |
| Footer link | Inter | `0.875rem` | 400 | `rgba(255,255,255,0.6)` |
| Legal text | Open Sans | `0.75rem` | 400 | `rgba(255,255,255,0.4)` |

Letter spacing: Section overline badges use `letter-spacing: 0.05em`. Gradient headings use default (`letter-spacing: -0.01em`). Body copy uses default.
Line height: Body text uses `1.6`–`1.8`. Headings use `1.1`–`1.2`. Overline badges use `1.2` (tight).

## Spacing System

| Token | Value | Usage |
|---|---|---|
| Section padding (hero) | `py-32` (8rem top + bottom) | Hero section |
| Section padding (standard) | `py-20`–`py-24` | All content sections |
| Section padding (tight) | `py-12`–`py-16` | Awards carousel, stats bar |
| Container max-width | `max-w-7xl` (1280px) | Most sections |
| Container max-width narrow | `max-w-[720px]` | Centered text heading blocks |
| Container padding | `px-4` mobile, `px-8` lg: desktop | All sections |
| Card padding | `p-6`–`p-8` | Stat cards, pricing cards |
| Card gap | `gap-4`–`gap-6` | Grid gaps |
| Section header margin-bottom | `mb-10`–`mb-16` | Space between heading block and content grid |
| FAQ grid gap | `gap-6` | Between FAQ accordion items |
| Process timeline step gap | `gap-8`–`gap-12` | Between timeline steps |
| Footer padding | `pt-16 pb-8` | Footer top/bottom |

## Button System

| Variant | Classes | Notes |
|---|---|---|
| Primary CTA (arrow) | `bg-transparent border border-white/20 text-white rounded-full px-6 py-3 hover:bg-white/10 transition-colors inline-flex items-center gap-2` | All popup-trigger CTAs; diagonal arrow icon SVG on right |
| Primary CTA filled | `bg-[#1B1B1D] text-white rounded-full px-8 py-3.5 hover:bg-white/10 transition-colors` | Section CTAs (Book A Free Call) |
| Ghost (nav) | `bg-transparent border border-white/20 text-white text-sm px-5 py-2 rounded-full hover:border-white/40` | Navbar "Contact Us" button |
| Pricing CTA silver | `bg-transparent border border-white/30 text-white rounded-full px-6 py-3 hover:bg-white/5` | Silver Plan CTA |
| Pricing CTA gold | `bg-[#e39607] text-[#451A03] font-semibold rounded-full px-6 py-3 hover:bg-[#f5a800]` | Gold Plan CTA (amber fill) |
| Newsletter submit | `bg-[#ffffff] text-[#000212] font-semibold rounded-md px-5 py-2.5 text-sm` | Footer newsletter submit |
| Form submit | `bg-[#ffffff] text-[#000212] font-semibold w-full rounded-md py-3` | Contact/popup form submit |

**Rule: All main page CTAs use `rounded-full` pill buttons. This template does NOT use `rounded-md` for its primary CTAs — pills are the brand shape.**

## Border Radius System

| Value | Usage |
|---|---|
| `rounded-full` | All CTA buttons, nav CTA, badge pills, avatar circles |
| `rounded-xl` / `rounded-2xl` | Stat cards (`service-item-wrap`), pricing cards, FAQ dropdown container |
| `rounded-md` / `rounded-lg` | Form inputs, newsletter input, text fields |
| `rounded-sm` / `rounded-[4px]` | Small badge pills (section-subtitle), tiny labels |
| `50%` (circle) | Client avatar images |

## Shadow System

| Usage | Value |
|---|---|
| Stat cards | `box-shadow: 0 0 0 1px rgba(255,255,255,0.06)` (very subtle inset border) |
| Pricing cards | `box-shadow: 0 4px 24px rgba(0,0,0,0.4)` (elevated dark card) |
| Popup overlay | `box-shadow: 0 20px 60px rgba(0,0,0,0.8)` |
| Navbar on scroll | No shadow — dark nav blends with dark page; uses `backdrop-filter: blur` instead |
| No section elevation shadows | Unlike light templates, sections have no drop shadow — the dark bg provides visual separation |

## Animation Timing

| Token | Value |
|---|---|
| Standard fade-up | `duration: 0.6, ease: 'easeOut'` |
| Slide-in from left | `duration: 0.5, ease: 'easeOut', x: -30 → 0` |
| Stats entrance | `duration: 0.5, staggerChildren: 0.1` |
| Hero elements | `animate="visible"` — no `whileInView`, fires immediately |
| Count-up trigger | `IntersectionObserver { threshold: 0.5 }` → sets `data-fb-count-animate="true"` |
| Count-up duration | ~1.5s linear counter from 0 to target |
| Viewport threshold | `{ once: true, amount: 0.2 }` for all `whileInView` |
| Awards marquee | CSS `animation: scrollLoop 22s linear infinite` — continuous left scroll |
| Media logos marquee | CSS transform `translate3d(-17%, 0, 0)` continuous scroll |
| Client carousel | Splide.js: `speed: 4800, interval: 0, easing: linear, loop, perPage: 3` |
| GSAP stacked cards | `ScrollTrigger scrub: true`, scale from 0.95 → 1 on enter, reverse on leave-back |
| FAQ accordion | CSS `max-height` transition `300ms ease` on open/close |
| Popup open | `opacity: 0 → 1, scale: 0.95 → 1, duration: 300ms` |
| Navbar dropdown | `opacity: 0, y: -2rem → visible` Webflow-style, implement as `duration: 0.2` |

## Responsive Breakpoints

Only two breakpoints are used:
- **Mobile** (base): single column, full-width elements, hamburger nav
- **Desktop** (`lg:`, ≥992px): multi-column layouts, full nav with dropdowns

Key layout changes at `lg:`:
- Navbar: hamburger → full nav + dropdowns + CTA button
- Hero: `text-3xl` → `text-5xl–6xl`; stacked → side-by-side (heading left, image/widget right for Typed.js)
- Stats: `grid-cols-1` → `grid-cols-2` → `grid-cols-4`
- Industries: scrolling pill strip (same on all breakpoints, just wider)
- Client Results: `grid-cols-1` → featured client 2-col + metric grid `grid-cols-4`
- Process: `grid-cols-1` → `flex-row` timeline (vertical line → horizontal progression)
- Pricing: `grid-cols-1` → `grid-cols-2`
- FAQ: `grid-cols-1` → `grid-cols-2`
- Footer: `grid-cols-1` → `grid-cols-4`

## Section Background Sequence

| # | Section | Background | Notes |
|---|---|---|---|
| 0 | PopupOverlay | `rgba(0,0,0,0.85)` backdrop | Fixed full-screen modal |
| 1 | Navbar | `#000212` dark transparent, `backdrop-filter: blur(12px)` on scroll | No shadow on dark bg |
| 2 | HeroSection | `#000212` + `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))` | CSS radial glow — no photo bg |
| 3 | AwardsCarousel | `#000212` (seamless continuation) | Marquee strip only |
| 4 | StatsSection | `#29292B` slightly lighter dark | 4-column card grid with corner radii |
| 5 | IndustriesSection | `#000212` | Scrolling tag strip + section header |
| 6 | ClientResultsSection | `#000212` | Featured client + 4 metric cards |
| 7 | ProcessSection | `#000000` pure black (`black-copy` class) | Darkest section — maximum contrast |
| 8 | PricingSection | `#000212` | 2-column card grid |
| 9 | ContactSection | `#000212` | Form layout |
| 10 | FAQSection | `#000212` | 2-column accordion |
| 11 | Footer | `#000212` | 4-column grid + legal strip |

Dark rhythm: the entire page maintains a consistent near-black surface. Depth is created through card surfaces (`#1B1B1D`, `#29292B`), border highlights (`rgba(255,255,255,0.06)`), and gradient glow accents — never through background color changes.

## Section-by-Section Visual Design Notes

### PopupOverlay
Full-viewport dark modal (`rgba(0,0,0,0.85)` backdrop). Center-aligned white card (`#1B1B1D` bg, `rounded-2xl`, `shadow-2xl`). Form fields are dark inputs with a thin `border-white/10` border. Field icons appear as small gray SVGs inside the right side of each input. Submit button is full-width white on dark text. Close button is a top-right `×` icon.

### Navbar
Dark transparent, blurs on scroll. Logo (white SVG) sits left. Nav links are `rgba(255,255,255,0.8)` with hover → white. "Services" and "Use Cases" dropdowns are dark card panels with arrow icon toggles. "Contact Us" CTA is a ghost pill button (white border). Mobile: hamburger icon reveals a full-screen overlay menu.

### HeroSection
The hero background is pure CSS — a radial gradient glow (`rgba(120,119,198,0.3)`) centered at the top over the `#000212` base. No photography. Left column: star-badge trust indicator, H1 with gradient accent span, animated Typed.js sub-heading line, primary CTA button. Right/below: avatar group trust banner (`23,000+ Booked Calls`). Further below: "Featured In Top Media Outlets" overline + continuous horizontal logo marquee.

### AwardsCarousel
A seamless scrolling marquee of award badge `.avif` images at fixed height (~64px). No heading, no body text — the badges alone communicate credibility. The marquee doubles the badge array for infinite loop. CSS `animation: scrollLoop` running at `22s linear infinite`.

### StatsSection
4-stat grid cards on slightly lighter dark bg (`#29292B`). Each card: large icon (`.webp`), giant count-up number with gradient-colored suffix (`%`, `K+`, `+`), short description label. Cards have corner radii and a subtle white/6 border. Numbers animate from 0 on scroll entry using `IntersectionObserver`.

### IndustriesSection
Section heading centered. Below: a horizontal scrolling ticker of industry pill tags (Lawyers, Plumbers, Roofers, etc.) — each pill is a `beneftis_tab-link` with an icon + text, opacity 0.6 default. The strip uses CSS `animation: scrollLoop` for infinite scroll.

### ClientResultsSection
Left half: featured client testimonial card — client avatar (circle crop), client name + title, pull quote in italics, optional video embed (auto-play, muted, loop). Right half: 2×2 grid of result metric cards — each shows a large bold number (`+122%`, `2x`, `45%`, `89%`) + brief label. Awards mini-strip below the metric grid. Client cards use the slide-in-from-left entrance animation.

### ProcessSection
Darkest background (`#000000`). 3-step vertical timeline. Left: a thin vertical line with a fill animation on scroll (the `white-line` inside `grey-line` grows from 0% to 100% height). Right: steps 1–3 appear in sequence with `opacity: 0.15 → 1` on scroll entry. Each step: step number SVG image, step illustration SVG/Lottie, step title (H3 bold), step body text. Step 3 uses a Lottie animated bar chart (JSON from Webflow CDN). CTA button "Book A Free Call" at top of section.

### PricingSection
Section heading centered with gradient accent span. 2-column card grid: Silver (left, white-themed icons/text) and Gold (right, gold/amber `#e39607` themed). Each card: plan icon (SVG inside circle), plan name + subtitle, "Get Started" CTA pill, horizontal pricing divider, 3 feature groups (each group has a title + checklist items with small check icons). Silver CTA = ghost white outline pill. Gold CTA = amber fill pill. Bonus offer banner (Silver only): a special bordered banner with a vector star icon and "$500 Google Ads Credit (if eligible)" text. Add-ons dropdown on Silver card: 3 add-on items with price column.

### ContactSection
Section overline badge + H2 + body centered. Below: full-width contact form (Full Name, Email Address, Company Website inputs + Monthly Budget slider + Business Type dropdown + Current Channels checkboxes). Form submit = white fill button. Form success/error states use standard Webflow form messaging pattern.

### FAQSection
Section heading centered (gradient text). 2-column accordion grid. Each accordion item: question in gradient bold text + plus/minus icon toggle. Answer text appears below in muted white on open. Plus icon `opacity: 1` when closed, `opacity: 0` when open; minus icon is the inverse. Transition is CSS `max-height` + `opacity`.

### Footer
4-column grid on dark bg. Column 1: logo (white SVG) + address + phone + email contact links (icon + text). Column 2: Services nav links. Column 3: Use Cases by industry. Column 4: Solutions links + newsletter email signup form (dark input + white "Get Started" submit). Bottom strip: single copyright line. No social icon row — social links are in the logo column (Instagram, LinkedIn).

## Image Usage Patterns

- **Hero glow lights**: Two decorative `.webp` images (`Hero Right.webp` and `Hero Left.webp`) positioned absolute in `.home-lights` div — right image `opacity: 1`, left image `opacity: 0.4`. These create the soft colored glow visible at the page edges. Never remove; set `pointer-events: none`.
- **Award badges**: `.avif` format, fixed height ~64px, no width constraint. Display in a CSS marquee. All must have descriptive `alt` text per the original HTML.
- **Media logos**: Mixed `.avif` / `.png`, fixed height ~28px, opacity ~70% default. Displayed in continuous marquee.
- **Stat icons**: `.webp` format, 40px `icon-large` class. One per stat card top-left.
- **Client avatar**: `.avif` format, circle crop (`border-radius: 50%`), ~64px in the client results card.
- **Process step numbers**: SVG images (`one.svg`, `two.svg`, `three.svg`) — these render the step number as a styled SVG, not plain text.
- **Process step illustrations**: SVG illustration images shown at ~80–120px beside the step content.
- **Step 3 animation**: Lottie JSON animation from `690efe96164399fade61625f_Animated-Bar-Chart-[remix](3).json` — renders a live animated bar chart. In React, use `lottie-react` package.

## Spacing / Layout Patterns

- All sections use `max-w-7xl mx-auto px-4 lg:px-8` for consistent horizontal centering.
- The section vertical rhythm is `py-20` (5rem) for standard sections and `py-32` for the hero.
- The awards carousel and media logos marquee are full-bleed (no max-width container) — the marquee strips extend edge to edge.
- Stat cards use a 4-column CSS grid with `gap-4`. Each card has `border-radius: 1rem` and `overflow: hidden` for the card overlay effect.
- Pricing cards are equal height using CSS grid `align-items: stretch`. Feature group titles use `font-weight: 600` and are visually separated from items by `margin-top: 1rem`.
- The FAQ grid is `grid-cols-1 lg:grid-cols-2 gap-6`. Each accordion item has a `border-bottom: 1px solid rgba(255,255,255,0.06)`.
- The process timeline uses a CSS vertical line (`grey-line` / `white-line`) positioned to the left of the step content. The fill animation is GSAP ScrollTrigger: `height: 0% → 100%` as the user scrolls through the section.
- Footer columns use `grid-cols-1 lg:grid-cols-4 gap-8`. The newsletter form column spans full width on mobile.
