# COMPONENTS.md — Template K: Medical & Wellness

## Component Catalog

---

### 1. `Navbar`
**File**: `templates/template-k/components/Navbar.tsx`

**Props**:
```ts
interface NavbarProps {
  hours?: string;           // "Mon - Fri: 9.00am - 11.00pm"
  phone1: string;           // "+1 (909) 900-6309"
  phone2?: string;          // second phone (same number, shown twice)
  logoSrc: string;          // logo image URL
  logoAlt: string;
  ctaLabel?: string;        // "Apply Now"
  ctaHref?: string;
}
```

**Variants**: Single variant. Sticky position. Top info bar (dark `#27272e`) + main white bar.

**Usage**:
```tsx
<Navbar
  hours="Mon - Fri: 9.00am - 11.00pm"
  phone1="+1 (909) 900-6309"
  logoSrc="https://cdn.prod.website-files.com/.../black%20mediclinic%20image.png"
  logoAlt="Bettermint Healthcare Logo"
  ctaLabel="Apply Now"
  ctaHref="#apply"
/>
```

**Content slots**: `hours`, `phone1`, `phone2`, `ctaLabel`
**Design notes**: Sticky via Tailwind `sticky top-0 z-[999]`. Nav links: Home, Job Portal, Employers, Resources, Contact Us. Mobile: hamburger menu toggles nav visibility.

---

### 2. `Hero`
**File**: `templates/template-k/components/Hero.tsx`

**Props**:
```ts
interface Slide {
  image: string;
  alt: string;
}

interface HeroProps {
  heading: string;
  subheading: string;
  slides: Slide[];
  searchPlaceholder?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  trustCount?: string;        // "6,287"
  trustLabel?: string;        // "users with 5 Star reviews and counting"
  avatarImages: string[];     // array of 4 avatar image URLs
}
```

**Variants**: None. Single layout. Teal gradient left-to-right over full-bleed sliding images. Bottom corners rounded 60px.

**Usage**:
```tsx
<Hero
  heading="Find your next travel nursing or allied health job."
  subheading="Find exciting travel nursing, allied health, patient support & non-clinical jobs today!"
  slides={SLIDES}
  ctaPrimary={{ label: 'Discover Jobs', href: '/jobs' }}
  ctaSecondary={{ label: 'Talk to a Recruiter', href: '/contact' }}
  trustCount="6,287"
  trustLabel="users with 5 Star reviews and counting"
  avatarImages={AVATAR_URLS}
/>
```

**Content slots**: `heading`, `subheading`, `ctaPrimary.label`, `ctaSecondary.label`, `trustCount`, `trustLabel`, all `slides[n].image`
**Design notes**: Gradient overlay: `linear-gradient(90deg, #4da7aa, rgba(60,159,185,0.55) 45%, rgba(60,159,185,0))`. Text sits left/center on desktop. Auto-advancing slider every 5s.

---

### 3. `StatsBar`
**File**: `templates/template-k/components/StatsBar.tsx`

**Props**:
```ts
interface Stat {
  value: string;      // "48 Hour"
  unit?: string;      // "Service"
  description: string;
}

interface StatsBarProps {
  stats: Stat[];      // exactly 3
}
```

**Variants**: None. White bg, 3-column grid.

**Usage**:
```tsx
<StatsBar stats={[
  { value: '48 Hour', unit: 'Service', description: 'Average Nurse Placement Time' },
  { value: '8 Years', unit: 'Of Experience', description: 'Years of Experience in Nurse Placement.' },
  { value: 'High quality', unit: 'care', description: 'We take care of our nurses housing, insurance, weekly pay.' }
]} />
```

**Content slots**: `stats[n].value`, `stats[n].unit`, `stats[n].description`

---

### 4. `HowWeWork`
**File**: `templates/template-k/components/HowWeWork.tsx`

**Props**:
```ts
interface Step {
  number: string;    // "01"
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface HowWeWorkProps {
  overline?: string;   // "How we work"
  heading: string;
  subheading: string;
  steps: Step[];       // 3 steps
  sideImage?: string;  // right-side illustration URL
}
```

**Content slots**: `overline`, `heading`, `subheading`, `steps[n].title`, `steps[n].body`
**Design notes**: Light gray bg `#f8f8ff`. Steps numbered 01/02/03 with teal number color.

---

### 5. `WhyChooseUs`
**File**: `templates/template-k/components/WhyChooseUs.tsx`

**Props**:
```ts
interface Feature {
  icon?: string;     // SVG URL or inline icon
  title: string;
  body: string;
}

interface WhyChooseUsProps {
  overline?: string;
  heading: string;
  subheading?: string;
  features: Feature[];   // 4 features
  sideImage?: string;
}
```

**Content slots**: `heading`, `features[n].title`, `features[n].body`
**Design notes**: White bg. Features in 2x2 grid on desktop, 1 column mobile. Left side = text + features, right side = stacked medical images.

---

### 6. `PayTransparency`
**File**: `templates/template-k/components/PayTransparency.tsx`

**Props**:
```ts
interface Benefit {
  title: string;
  body: string;
}

interface PayTransparencyProps {
  heading: string;
  subheading: string;
  benefits: Benefit[];   // 2 benefits
  image?: string;
}
```

**Variants**: Dark section (`#27272e` bg, white text). Part of the 3-section dark block.
**Content slots**: `heading`, `subheading`, `benefits[n].title`, `benefits[n].body`

---

### 7. `WeeklyPay`
**File**: `templates/template-k/components/WeeklyPay.tsx`

**Props**: Same interface as `PayTransparencyProps`. Dark section.
**Content slots**: `heading`, `subheading`, `benefits[n].title`, `benefits[n].body`
**Design notes**: Shares layout pattern with `PayTransparency`. Image on opposite side.

---

### 8. `DayOneBenefits`
**File**: `templates/template-k/components/DayOneBenefits.tsx`

**Props**:
```ts
interface BenefitCard {
  title: string;
  body: string;
  icon?: string;
}

interface DayOneBenefitsProps {
  heading: string;
  subheading: string;
  cards: BenefitCard[];   // 4 cards
  image?: string;
}
```

**Variants**: Dark section (`#27272e`). Card grid 2x2. White text on dark cards.
**Content slots**: `heading`, `subheading`, `cards[n].title`, `cards[n].body`

---

### 9. `Specialties`
**File**: `templates/template-k/components/Specialties.tsx`

**Props**:
```ts
interface Specialty {
  number: string;    // "01"
  title: string;
  body: string;
  image: string;
  ctaHref?: string;
}

interface SpecialtiesProps {
  overline?: string;
  heading: string;
  subheading?: string;
  specialties: Specialty[];   // 6
}
```

**Content slots**: `heading`, `specialties[n].title`, `specialties[n].body`, `specialties[n].image`
**Design notes**: Light gray bg `#f8f8ff`. Cards in 3-column grid. Each card has a top image, number badge, title, body, and "Read More" link.

---

### 10. `AssignmentOptions`
**File**: `templates/template-k/components/AssignmentOptions.tsx`

**Props**:
```ts
interface Assignment {
  id: string;
  label: string;      // tab label
  heading: string;
  body: string;
  image: string;
}

interface AssignmentOptionsProps {
  overline?: string;
  heading: string;
  subheading?: string;
  assignments: Assignment[];   // 6 options
}
```

**Variants**: Tabbed interface. Active tab shows content panel with image on right (desktop).
**Content slots**: `heading`, `assignments[n].label`, `assignments[n].heading`, `assignments[n].body`, `assignments[n].image`
**Design notes**: White bg. Tabs are left-side vertical list on desktop. Selected tab text turns teal.

---

### 11. `Destinations`
**File**: `templates/template-k/components/Destinations.tsx`

**Props**:
```ts
interface Destination {
  state: string;        // "California"
  avgWeekly: string;    // "$3,200 / wk"
  city: string;         // "Los Angeles"
  type: string;         // "Travel Contract"
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface DestinationsProps {
  overline?: string;
  heading: string;
  subheading?: string;
  destinations: Destination[];   // 4
}
```

**Content slots**: `heading`, all `destinations[n].*`
**Design notes**: Light violet bg `#f3f3ff`. Cards in 2x2 grid desktop, 1 col mobile. Each card is image-top with overlay badge showing avg weekly pay.

---

### 12. `Testimonials`
**File**: `templates/template-k/components/Testimonials.tsx`

**Props**:
```ts
interface Testimonial {
  name: string;
  role: string;        // "ER Travel Nurse"
  quote: string;
  avatar?: string;
}

interface TestimonialsProps {
  overline?: string;
  heading: string;
  satisfactionRate?: string;   // "100%"
  avgRating?: string;          // "4.9"
  testimonials: Testimonial[];   // 8–12 for marquee
  ctaLabel?: string;
  ctaHref?: string;
}
```

**Variants**: Dark bg `#27272e`. Two-row marquee (row 1 scrolls left, row 2 scrolls right).
**Content slots**: `heading`, `satisfactionRate`, `avgRating`, `testimonials[n].name`, `testimonials[n].role`, `testimonials[n].quote`
**Design notes**: Continuous scroll via CSS animation `animate-marquee`. Each card is white on dark bg. Star rating displayed as 5 teal stars.

---

### 13. `CareAreas`
**File**: `templates/template-k/components/CareAreas.tsx`

**Props**:
```ts
interface CareArea {
  title: string;
  image: string;
  href?: string;
}

interface CareAreasProps {
  overline?: string;
  heading: string;
  subheading?: string;
  areas: CareArea[];    // 6
  ctaLabel?: string;
  ctaHref?: string;
}
```

**Content slots**: `heading`, `areas[n].title`, `areas[n].image`
**Design notes**: White bg. 3-column grid desktop. Each card: image top, title bottom, hover lifts card.

---

### 14. `Footer`
**File**: `templates/template-k/components/Footer.tsx`

**Props**:
```ts
interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  subscribeHeading?: string;
  navColumns: { heading: string; links: FooterLink[] }[];
  address: string;
  email: string;
  phone: string;
  socialLinks: { platform: string; href: string; icon: string }[];
  credit?: string;    // "Designed by BlitzStudio powered by Better Mint LLC"
}
```

**Content slots**: `tagline`, `address`, `email`, `phone`, `navColumns[n].links[n].label`, `credit`
**Design notes**: Dark bg `#27272e`. Nav link color `#b8b8bd`. Email subscribe form. Social icons row. Horizontal rule divider above copyright.
