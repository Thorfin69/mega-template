# DESIGN.md — Template B: Light Clean

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| accent | #00A4A4 | Primary CTA bg, active tabs, stat card bg, result badges, icon wells |
| accent-hover | #008585 | Hover state for accent bg elements |
| bg-primary | #ffffff | Main page background, testimonial right panel |
| bg-secondary | #F7F9FF | Alternating section backgrounds |
| bg-footer | #0C206D | Footer only |
| text-primary | #0b0b0b | Headings, body text |
| text-muted | #6b7280 | Secondary body, labels, form hints |
| text-placeholder | #9ca3af | Input placeholders |
| border-standard | rgba(0,0,0,0.10) | Section dividers, card borders |
| white-8 | rgba(255,255,255,0.08) | Hero badge backgrounds |
| white-15 | rgba(255,255,255,0.15) | Hero badge borders |
| amber | #f59e0b | Star ratings (fill and stroke) |

## Typography

Font family: Geist only.

| Element | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero H1 | 72px (mobile: 44px) | Light | 78px (50px) | -2.16px (-1.32px) |
| Section H2 | 50px (mobile: 34px) | Light | 55px | -1.5px |
| Section H2 large | 60px | Light | 66px | -1.8px |
| Card H3 | 22–28px | Regular | auto | -0.66px to -0.84px |
| Section label | 12px | Regular | auto | +2px (positive) |
| Body | 16–18px | Light | 24–28px | -0.48px to -0.54px |
| Button/nav | 14px | Regular | auto | -0.42px |
| Small/meta | 12–13px | Light/Regular | auto | -0.36px to -0.39px |

Section labels are UPPERCASE with tracking-[2px] — this is POSITIVE tracking (unlike body content).
Button text is UPPERCASE with negative tracking.

## Spacing

- Content max-width: max-w-[1440px] mx-auto
- Desktop padding: px-[130px]
- Mobile padding: px-[24px] (max-lg:px-[24px])
- Section vertical: py-[120px]
- Trust bar: py-[56px]
- Card gap: gap-[2px] (grid with gap-2px creates seamless border effect)
- Section heading bottom margin: mb-[60px] standard, mb-[48px] compact
- Button padding: px-[21px] py-[11px]
- Form input padding: px-[14px] py-[12px]

## Buttons

Primary: `bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] text-white text-[14px] font-['Geist:Regular'] uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95`

Ghost (on dark): `border border-white/20 text-white/70 rounded-[50px] px-[21px] py-[11px] text-[14px] uppercase tracking-[-0.42px] hover:border-white/50 hover:text-white`

White on accent: `bg-white px-[21px] py-[11px] rounded-[50px] text-[#0b0b0b] text-[14px] uppercase tracking-[-0.42px] hover:bg-white/90`

Tab pill active: `bg-[#00A4A4] text-white border-[#00A4A4]`
Tab pill inactive: `bg-transparent text-[#0b0b0b]/60 border-black/20 hover:text-[#0b0b0b] hover:border-black/40`
Tab pill base: `px-[18px] py-[9px] rounded-[50px] text-[13px] uppercase tracking-[-0.39px] border`

## Border Radius

- Pill (buttons, badges): rounded-[50px]
- Cards (large): rounded-[16px]
- Cards (standard): rounded-[12px] to rounded-[14px]
- Icon wells: rounded-[10px]
- Form inputs: rounded-[10px]
- Form card: rounded-[20px]

## Section Background Sequence

Hero → dark overlay on image
TrustBar → #ffffff
Problems → #F7F9FF
TwoTrack → #ffffff
ServicesTabs → #F7F9FF
Solutions → #ffffff
HowItWorks → #F7F9FF
Testimonials → #ffffff
IRSNotice → split (#ffffff left, image right)
Stats → image with overlay
Blog → #ffffff
FAQ → #F7F9FF
CTA → #F7F9FF
Footer → #0C206D

## Animation Timing

Scroll entrance: duration 0.6s, ease "easeOut"
Stagger children: 0.08–0.1s
Hero mount delays: 0s, 0.1s, 0.2s, 0.35s
Tab switch (AnimatePresence): duration 0.35s
Image hover zoom: duration 700ms, ease "out"
Arrow hover translate: duration 300ms
