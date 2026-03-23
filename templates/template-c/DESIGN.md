# Template-C Design System

## Color Palette

### Primary
- **Teal (Primary Action)**: `#00A4A4` — CTAs, active states, highlights
- **Teal Dark (Hover)**: `#007a7a` — Button hover state
- **Teal Darker**: `#005f5f` — Button active state
- **Teal Light (Backgrounds)**: `rgba(0,164,164,0.10)` — Icon backgrounds

### Neutral
- **Dark Navy (Text)**: `#0f172a` — Primary text, headings
- **Navy Hover**: `#0f172a` — Hover state
- **Beige (Sections)**: `#f5f1e8` — Alternating section backgrounds
- **Trust Bar Teal**: `#009B96` — TrustBar background
- **White**: `#ffffff` — Cards, navbar background
- **Light Cream**: `#f9f7f3` — Form inputs background

### Text Colors
- **Body Text**: `#475569` — Standard paragraph text
- **Muted Text**: `#64748b` — Secondary text
- **Light Gray**: `#94a3b8` — Tertiary text
- **White/Light**: `rgba(249,250,251,0.75)` — Light text on dark

### Accent Colors (PaintStreak)
- **Teal Stroke**: `#8DD5CF`
- **Pink Stroke**: `#E8597A`
- **Purple Stroke**: `#C9AEE8`
- **Blue-Gray Stroke**: `#B8C9D8`

## Typography

### Font Family
- **Primary Font**: `Inter` — All body text, labels, and most UI
- **Headings Font**: `Outfit` — H1, H2, H3, feature text (specified via `font-['Outfit']`)
- **Note**: No Google Fonts — Outfit and Inter are web-safe or bundled

### Font Sizes
- **H1 (Hero)**: `clamp(42px, 4.5vw, 66px)`
- **H2 (Section)**: `clamp(36px, 4.5vw, 60px)` or `clamp(32px, 4vw, 52px)`
- **H3 (Card)**: `clamp(24px, 2.5vw, 36px)`
- **Body**: `16px`
- **Body Large**: `18px`
- **Small**: `14px` to `15px`
- **Eyebrow**: `12px` to `14px`

### Font Weights
- **Headlines (Outfit)**: `font-black` — Heaviest weight for impact
- **Subheadings (Outfit)**: `font-bold`
- **Body (Inter)**: `font-normal`
- **Labels (Inter)**: `font-bold` or `font-medium`
- **Semibold (Inter)**: `font-semibold` — CTAs, emphasis

### Letter Spacing
- **Headlines**: `-2px`, `-1.5px`, `-1px` — Tighter spacing
- **Body**: `-0.3px` — Subtle tightening
- **Labels**: `0.05em`, `0.08em` — Tracking for uppercase

### Line Height
- **Headlines**: `1.04` to `1.08`
- **Body**: `1.65` to `1.7`
- **Compact**: `1.2` to `1.25`

## Spacing

### Section Padding
- **Vertical**: `py-[120px]` — Standard section padding
- **Horizontal**: `px-[70px]` — Container gutters
- **Max Width**: `max-w-[1330px]` with `mx-auto`

### Component Gaps
- **Large**: `gap-[80px]` — Between major sections
- **Medium**: `gap-[60px]`, `gap-[48px]` — Between blocks
- **Small**: `gap-[24px]`, `gap-[20px]` — Component gaps
- **Tiny**: `gap-[10px]`, `gap-[12px]` — Icon/text pairs

### Card/Box Padding
- **Large Cards**: `p-[40px]`, `p-[48px]`
- **Medium**: `p-[32px]`
- **Small**: `p-[28px]`, `p-[20px]`

## Shadows

### Elevation Levels
- **Navbar (Scroll)**: `0 4px 24px rgba(0,0,0,0.10)` + `0 4px 24px rgba(0,0,0,0.04)`
- **Card Hover**: `0 8px 32px rgba(0,0,0,0.08)` or `0 4px 24px rgba(0,0,0,0.06)`
- **Button (Primary)**: `0 8px 28px rgba(0,164,164,0.35)` — Teal glow
- **Button (Hover)**: `0 12px 36px rgba(0,164,164,0.38)` — Increased glow

## Border Radius

### Values
- **Rounded Full**: `rounded-full` or `rounded-[50px]` — Pill buttons
- **Large**: `rounded-[24px]`, `rounded-[20px]` — Cards, sections
- **Medium**: `rounded-[16px]` — Containers
- **Small**: `rounded-[12px]` — Inputs, icon backgrounds
- **Tiny**: `rounded-[10px]` — Number badges

## Breakpoints

### Responsive Design
- **Desktop**: `≥1024px` — Full layout with sidebars
- **Mobile**: `<1024px` — Single column, adjusted padding
- **Utilities**:
  - `hidden md:flex` — Hide on mobile
  - `lg:flex-row` — Row on desktop, column on mobile
  - `grid grid-cols-1 lg:grid-cols-3` — Dynamic columns

## Borders

### Border Colors
- **Subtle**: `border-slate-200` or `border-[#e8e4dd]` — Dividers
- **Light**: `border-gray-100` — Navigation
- **Input**: `border-[#d8d3c8]` — Form fields
- **Teal Accent**: `border-[#00A4A4]` — Active states

### Border Widths
- **Thin**: `border` (1px) — Standard
- **Medium**: `border-[1.5px]` — Pill badges
- **Thick**: `border-[2px]` — Tab buttons

## Animations

### Motion/Framer Motion
- **Fade In**: `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- **Slide Up**: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Slide Left**: `initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}`
- **Scale In**: `initial={{ scale: 1.03 }} animate={{ scale: 1 }}`
- **Duration**: `0.5s` to `0.8s` — Standard transitions
- **Viewport**: `whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}`

## Form Elements

### Input Styling
- **Background**: `#f9f7f3` — Cream input background
- **Border**: `1.5px solid #d8d3c8` — Subtle border
- **Padding**: `py-[14px] px-[16px]`
- **Border Radius**: `rounded-[12px]`
- **Focus**: `focus:outline-none` — No default focus ring

### Button Styling
- **Pill Buttons**: `rounded-full` or `rounded-[50px]`
- **Primary CTA**: `bg-[#00A4A4] hover:bg-[#007a7a]` + teal glow shadow
- **Secondary**: `border-[1.5px] border-[#0f172a]` with hover fill

## Layout Patterns

### Hero Section
- **Height**: `min-h-screen` or `calc(100vh - 72px)`
- **Image Width**: `52%` on desktop, full on mobile
- **Content Width**: `flex-1` (remaining space)

### Two-Column
- **Desktop**: 50/50 split with `gap-[60px]`
- **Mobile**: Single column stacked
- **Image Height**: `h-[560px]` for medium cards

### Grid
- **Default**: `grid-cols-1 lg:grid-cols-3` — 3 columns on desktop
- **Max Gap**: `gap-[16px]` between cards
- **Stat Grid**: `grid-cols-2 lg:grid-cols-4` — 4 stat boxes

## PaintStreak Component
- **Stroke Colors**: `teal`, `pink`, `purple`, `blue-gray`
- **Opacity**: `0.72` default
- **Background Size**: `110% 115%`
- **Position**: `center 55%`

## Icons
- **Size**: `w-[16px] h-[16px]` to `w-[20px] h-[20px]` — Lucide icons
- **Stroke Width**: `strokeWidth={1.5}` or `strokeWidth={2}`
- **Color**: `text-[#00A4A4]` — Primary color

## Navbar Specific
- **Background**: `bg-white/95 backdrop-blur-sm` — Frosted glass
- **Border**: `border border-gray-100`
- **Padding**: `py-3` (desktop), responsive on mobile
- **Link Underline**: `h-[1.5px] bg-[#00A4A4]` on hover
- **Fixed Position**: `fixed top-0 z-50`

## Accessibility
- **Selection Color**: `selection:bg-[#00838F] selection:text-white` — Custom text selection
- **Overflow**: `overflow-x-hidden` on body
- **Z-Index Stacking**: Navbar (`z-50`), modals/overlays (`z-10`)
