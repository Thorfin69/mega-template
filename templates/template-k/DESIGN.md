# DESIGN.md — Template K: Medical & Wellness

## Color Palette

| Token | Hex | Semantic Role |
|---|---|---|
| `--anthracite` | `#27272e` | Primary dark text, dark section backgrounds |
| `--dark-soft-violet` | `#4da7aa` | Primary teal accent — buttons, hero gradient, highlights |
| `--forged-steel` | `#7e7e7e` | Body text secondary, muted labels |
| `--best-in-show` | `#b8b8bd` | Footer nav links, light muted text |
| `--white` | `#ffffff` | Page background, light section fill |
| `--light-violet` | `#5552e71a` | Subtle tinted card backgrounds |
| `--transparent-blue` | `#d7d7ff` | Soft accent tint on hover/card states |
| `#5552e7` | `#5552e7` | Violet — badge accents, pill tags |
| `#2b7f5c` | `#2b7f5c` | Green — success / availability indicators |
| `#313139` | `#313139` | Slightly lighter dark — card interiors |
| `#49494d` | `#49494d` | Dark mid-tone — secondary card backgrounds |
| `#eeeefd` | `#eeeefd` | Very light violet — section wash |
| `#f8f8ff` | `#f8f8ff` | Ghost white — alternating section bg |
| `#f3f3ff` | `#f3f3ff` | Tinted white — feature card fill |
| `#fffbfe` | `#fffbfe` | Warm white — footer section bg |
| `#d8d8d8` | `#d8d8d8` | Divider lines, input borders |
| `#0003` | `rgba(0,0,0,0.2)` | Navbar drop shadow |
| `#27272e33` | `rgba(39,39,46,0.2)` | Card overlay tint |

### Background Color Sequence (top → bottom)
1. Navbar: `#ffffff` with `box-shadow: 0 2px 30px rgba(0,0,0,0.2)`
2. Hero: full-bleed with teal left-to-right gradient over image
3. Stats Bar: `#ffffff`
4. How We Work: `#f8f8ff`
5. Why Choose Us: `#ffffff`
6. Pay Transparency: `#27272e` (dark)
7. Weekly Pay: `#27272e` (dark)
8. Day 1 Benefits: `#27272e` (dark)
9. Specialties: `#f8f8ff`
10. Assignment Options: `#ffffff`
11. Destinations: `#f3f3ff`
12. Testimonials: `#27272e` (dark with marquee)
13. Care Areas: `#ffffff`
14. Footer: `#27272e` (dark)

---

## Typography

### Font Stack
- **Primary**: `DM Sans, sans-serif` — all body text, headings, buttons
- **Secondary**: `Urbanist, sans-serif` — decorative labels, overline tags
- **Load**: Google Fonts — `DM Sans:300,400,500,600,700`

### Scale

| Role | Size | Weight | Line-Height | Letter-Spacing |
|---|---|---|---|---|
| H1 (hero) | `3.75rem` | `700` | `4rem` | `-0.03rem` |
| H2 (section title) | `2.5rem` | `700` | `1.2` | `-0.02rem` |
| H3 (card title) | `1.5rem` | `600` | `1.3` | `0` |
| H4 (sub-heading) | `1.25rem` | `600` | `1.4` | `0` |
| Body large | `1.25rem` | `400` | `1.7` | `0` |
| Body standard | `1rem` | `400` | `1.7` | `0` |
| Body small | `0.9375rem` | `400` | `1.6` | `0` |
| Caption / tag | `0.875rem` | `500` | `1.4` | `0.02rem` |
| Stat number | `3.6rem` | `700` | `1` | `0` |
| Nav link | `0.9375rem` | `500` | `1` | `0` |
| Button label | `0.9375rem` | `600` | `1` | `0` |
| Footer nav | `1.125rem` | `400` | `3rem` | `0` |

---

## Spacing System

| Token | Value | Usage |
|---|---|---|
| Section vertical padding (desktop) | `100px` top and bottom | All full-width sections |
| Section vertical padding (mobile) | `75px var(--mobile-inner-padding)` | Mobile sections |
| `--mobile-inner-padding` | `20px` | Mobile horizontal gutter |
| Container max-width | `1230px` | All content containers |
| Grid column gap | `30px` | Standard grid gaps |
| Card internal padding | `40px` | Feature/benefit cards |
| Navbar height (approx) | `80px` | Desktop nav |
| Info bar padding | `12px 15px 16px` | Top info bar |

---

## Button System

### Primary Button (`.button-new.background-color-blue`)
```
background-color: #4da7aa
border-radius: 5px
padding: 15px 30px
font-size: 0.9375rem
font-weight: 600
color: #ffffff
display: flex
align-items: center
justify-content: center
overflow: hidden
position: relative
```
> Note: This template uses `border-radius: 5px` (not pill shape) as its brand standard.

### Dark Button (`.button-new.background-color-black`)
```
background-color: #27272e
border-radius: 5px
padding: 17.5px 30px
font-size: 0.9375rem
font-weight: 600
color: #ffffff
```

### White Button (`.button-new.background-color-white`)
```
background-color: #ffffff
border-radius: 5px
padding: 17.5px 30px
font-size: 0.9375rem
font-weight: 600
color: #27272e
```

### Button Overlay (hover effect)
- An absolutely-positioned overlay `div.button-overlay` with `background-color: #27272e` slides in on hover using Framer Motion or CSS transition.
- Button text has `z-index: 1` to stay above overlay.

---

## Border Radius System

| Value | Where Used |
|---|---|
| `5px` | All buttons (`.button-new`) |
| `6px` | Input fields, small tags |
| `10px` | Feature cards, stat cards |
| `11px` | Specialty cards |
| `15px` | Destination cards |
| `17px` | Testimonial avatars |
| `20px` | Section-level containers (CTA section) |
| `25px` | Large image containers |
| `50px` | Badge pills, large rounded cards |
| `60px` | Hero bottom corners (`border-bottom-left-radius`, `border-bottom-right-radius`) |
| `99999px` | Fully pill — marquee tags, small chips |
| `50%` | Circular avatars |

---

## Shadow System

| Usage | Value |
|---|---|
| Navbar | `box-shadow: 0 2px 30px rgba(0,0,0,0.2)` |
| Cards (subtle) | `box-shadow: 0 4px 20px rgba(39,39,46,0.08)` |
| Image overlays | `box-shadow: 0 8px 40px rgba(0,0,0,0.12)` |

---

## Animation Timing

All animations use Framer Motion (`motion/react`).

| Property | Value |
|---|---|
| Viewport trigger | `{ once: true, amount: 0.2 }` |
| Fade-in duration | `0.6s` |
| Slide-up Y offset | `30px → 0` |
| Stagger children | `0.1s` interval |
| Easing | `easeOut` |
| Hero overlay transition | `duration: 0.8, ease: "easeInOut"` |
| Marquee speed | `30s` continuous linear scroll |

### Standard Entry Pattern
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
// Usage:
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
```

---

## Responsive Breakpoints

| Breakpoint | Trigger | Layout Changes |
|---|---|---|
| Desktop | `≥ 1024px` | 2-column grids, horizontal navbars, multi-column cards |
| Mobile | `< 1024px` | Single column, stacked nav, full-width cards, reduced font sizes |

### Key Mobile Overrides
- H1 hero: `3.75rem → 2.1rem`
- H2 section: `2.5rem → 1.8rem`
- Stat numbers: `3.6rem → 2rem`
- Navbar: horizontal → hamburger menu
- Hero height: auto (no fixed height)
- Grid columns: all → 1 column
- Section padding: `100px → 75px var(--mobile-inner-padding)`

---

## Hero Section Detail

- **Structure**: Full-bleed slider with 3 medical images
- **Height**: `min-height: 600px` desktop, auto mobile
- **Bottom corners**: `border-bottom-left-radius: 60px; border-bottom-right-radius: 60px`
- **Overlay**: `linear-gradient(90deg, #4da7aa, rgba(60,159,185,0.55) 45%, rgba(60,159,185,0))`
- **Text alignment**: Centered, overlaid on gradient-left zone
- **Slider images**:
  1. `doctors attends surgeries.webp` (Webflow CDN)
  2. `team-doctors-are-standing-emergency-room.webp`
  3. `doctors.webp`
- **Trust bar**: avatars + "Trusted by 6,287 users with 5 Star reviews"

---

## Section Background Pattern

```
Navbar      → white + shadow
Hero        → image + teal gradient
Stats       → white
How We Work → #f8f8ff
Why Us      → white
Pay Trans.  → #27272e (dark)
Weekly Pay  → #27272e (dark)
Day 1 Bens  → #27272e (dark)
Specialties → #f8f8ff
Assignments → white
Destinations→ #f3f3ff
Testimonials→ #27272e (dark)
Care Areas  → white
Footer      → #27272e (dark)
```
