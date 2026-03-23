# COMPONENTS.md — Template L: B2B SaaS Cloud

## Navbar

**File:** `components/Navbar.tsx`

**Props:**
```typescript
interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  navLinks: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}
```

**Content slots:** logoSrc, logoAlt, navLinks (array), ctaLabel, ctaHref

**Design notes:** Sticky with `z-[999]`. White bg with bottom border. Desktop nav uses `hover:bg-blue-50` pill hover. Mobile uses AnimatePresence slide-down. CTA is always `rounded-full` blue pill.

---

## Hero

**File:** `components/Hero.tsx`

**Props:**
```typescript
interface HeroProps {
  badge: string;
  badgeIcon: string;
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  dashboardImage: string;
  dashboardAlt: string;
}
```

**Content slots:** badge, heading, subheading, both CTAs, dashboardImage

**Design notes:** Uses `animate="visible"` (not whileInView) — above the fold. Dashboard image has `rounded-t-2xl` and `border-b-0` to bleed into HowItWorks. Max width `760px` for text, full container for image.

---

## HowItWorks

**File:** `components/HowItWorks.tsx`

**Props:**
```typescript
interface Step {
  number: string;
  icon: string;
  title: string;
  body: string;
}
interface HowItWorksProps {
  overline: string;
  heading: string;
  subheading: string;
  steps: Step[];  // exactly 3 steps
}
```

**Content slots:** overline, heading, subheading, steps array (3 items)

**Design notes:** Light gray `#F8FAFC` bg. Horizontal connector line between step cards on desktop (absolutely positioned). Step number badges are `rounded-full bg-[#027DFC]`.

---

## Features

**File:** `components/Features.tsx`

**Props:**
```typescript
interface Feature {
  icon: string;
  title: string;
  body: string;
}
interface FeaturesProps {
  overline: string;
  heading: string;
  subheading: string;
  features: Feature[];  // exactly 6 features
}
```

**Content slots:** overline, heading, subheading, features array (6 items)

**Design notes:** White bg. Icon container turns blue on card hover (`group-hover:bg-[#027DFC]`). Icon inverts on hover (`group-hover:invert`). 3-column grid on desktop.

---

## SecuritySection

**File:** `components/SecuritySection.tsx`

**Props:**
```typescript
interface SecurityPoint {
  icon: string;
  title: string;
  body: string;
}
interface SecuritySectionProps {
  overline: string;
  heading: string;
  subheading: string;
  points: SecurityPoint[];  // exactly 3 points
  image: string;
  imageAlt: string;
}
```

**Content slots:** overline, heading, subheading, 3 security points, image

**Design notes:** Dark `#27313D` bg. Two-column layout (text left, image right). Image entry animates from `x: 40`. Icon containers use `bg-[#027DFC]/10 border-[#027DFC]/20`.

---

## WhyUs

**File:** `components/WhyUs.tsx`

**Props:**
```typescript
interface Differentiator {
  icon: string;
  title: string;
  body: string;
}
interface WhyUsProps {
  overline: string;
  heading: string;
  subheading: string;
  items: Differentiator[];  // exactly 4 items
}
```

**Content slots:** overline, heading, subheading, 4 differentiator items

**Design notes:** White bg. 2×2 grid. Each card is `bg-[#F8FAFC]` with hover effect. Icon on white card with shadow.

---

## Integrations

**File:** `components/Integrations.tsx`

**Props:**
```typescript
interface Integration {
  src: string;
  name: string;
}
interface IntegrationsProps {
  overline: string;
  heading: string;
  subheading: string;
  integrations: Integration[];  // exactly 7
}
```

**Content slots:** overline, heading, subheading, integrations array

**Design notes:** Dark `#27313D` bg. 7-column grid on desktop. Each logo card has `bg-white/5 border-white/10`. Logo images use `filter brightness-90`.

---

## Stats

**File:** `components/Stats.tsx`

**Props:**
```typescript
interface Stat {
  value: string;
  description: string;
}
interface StatsProps {
  stats: Stat[];  // exactly 2 stats
}
```

**Content slots:** 2 stats with value and description

**Design notes:** Blue `#027DFC` bg. 2-column on `sm:`. Divided by `divide-x divide-white/20`. Stat values are `text-[3.5rem]` on mobile, `text-[4.5rem]` on desktop.

---

## Manifesto

**File:** `components/Manifesto.tsx`

**Props:**
```typescript
interface ManifestoPoint {
  title: string;
  body: string;
}
interface ManifestoProps {
  overline: string;
  heading: string;
  body: string;
  points: ManifestoPoint[];  // exactly 3 points
}
```

**Content slots:** overline, heading, body text, 3 numbered points

**Design notes:** Dark `#1C2530` bg (slightly darker than `#27313D`). Two-column layout. Points have circular number badges in `bg-[#027DFC]`.

---

## ValueProps

**File:** `components/ValueProps.tsx`

**Props:**
```typescript
interface ValueProp {
  icon: string;
  title: string;
  body: string;
}
interface ValuePropsProps {
  overline: string;
  heading: string;
  subheading: string;
  items: ValueProp[];  // exactly 8 items
}
```

**Content slots:** overline, heading, subheading, 8 value prop items

**Design notes:** Light gray `#F8FAFC` bg. 4-column grid on `lg:`. Compact cards with small icon `(w-10 h-10)`, bold title, and `text-xs` body.

---

## Pricing

**File:** `components/Pricing.tsx`

**Props:**
```typescript
interface PlanFeature {
  label: string;
  included: boolean;
}
interface Plan {
  icon: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: PlanFeature[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  featuredLabel?: string;
}
interface PricingProps {
  overline: string;
  heading: string;
  subheading: string;
  plans: Plan[];  // exactly 3
  crownIcon: string;
}
```

**Variants:** Monthly / Yearly toggle (useState). Featured plan has dark `#27313D` bg with blue border. Enterprise plan sets `monthlyPrice: 'Custom'` to skip price rendering.

**Content slots:** overline, heading, subheading, 3 plans, crownIcon

**Design notes:** Toggle uses `bg-[#F3F4F6]` pill container. Featured plan shows crown icon badge at top. Feature checkmarks use SVG path icons.

---

## Testimonials

**File:** `components/Testimonials.tsx`

**Props:**
```typescript
interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
}
interface TestimonialsProps {
  overline: string;
  heading: string;
  subheading: string;
  testimonials: Testimonial[];  // 6 testimonials
}
```

**Content slots:** overline, heading, subheading, 6 testimonials

**Design notes:** Dark `#27313D` bg. 3×2 grid. Each card `bg-white/5`. Star row uses 5 SVG stars in `#F59E0B`. Avatar fallback is a letter-initial circle in `bg-[#027DFC]/20`.

---

## BlogSection

**File:** `components/BlogSection.tsx`

**Props:**
```typescript
interface BlogPost {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}
interface BlogSectionProps {
  overline: string;
  heading: string;
  subheading: string;
  posts: BlogPost[];  // exactly 3
}
```

**Content slots:** overline, heading, subheading, 3 blog posts

**Design notes:** White bg. 3-column grid. Post image has `group-hover:scale-105` zoom. Category badge is `bg-blue-50 text-[#027DFC]`. Title has hover color transition to `#027DFC`.

---

## FAQ

**File:** `components/FAQ.tsx`

**Props:**
```typescript
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQProps {
  overline: string;
  heading: string;
  subheading: string;
  items: FAQItem[];  // 10 items
}
```

**Variants:** Accordion — only one item open at a time (useState). First item open by default (`useState(0)`).

**Content slots:** overline, heading, subheading, 10 FAQ items

**Design notes:** Light gray `#F8FAFC` bg. Max width `860px`. Open item gets blue border and shadow. Chevron rotates `180deg` on open. AnimatePresence for smooth height animation.

---

## CTABanner

**File:** `components/CTABanner.tsx`

**Props:**
```typescript
interface CTABannerProps {
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  note?: string;
}
```

**Content slots:** heading, subheading, primary CTA, optional secondary CTA, optional note

**Design notes:** Blue `#027DFC` bg. Two decorative circles `bg-white/5` for depth. Primary CTA is white with blue text (inverted). `note` renders as small muted text below buttons.

---

## Footer

**File:** `components/Footer.tsx`

**Props:**
```typescript
interface NavColumn {
  heading: string;
  links: { label: string; href: string }[];
}
interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  emailSubscribeLabel?: string;
  emailSubscribePlaceholder?: string;
  navColumns: NavColumn[];
  socialLinks: SocialLink[];
  credit: string;
  bgImage?: string;
}
```

**Content slots:** logoSrc, logoAlt, tagline, email subscribe, navColumns (3 cols), socialLinks, credit, bgImage

**Design notes:** Dark `#27313D` bg with optional bg image (`bg-white/90` overlay). Logo uses `brightness-0 invert` CSS to appear white. Social icon buttons hover to `bg-[#027DFC]`. 4-column grid on `lg:` (brand col takes 1, nav cols take 3).
