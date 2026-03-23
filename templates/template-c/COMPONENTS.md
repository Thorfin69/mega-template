# Template-C Component Catalog

## Main Layout Component

### **TemplateC** (`index.tsx`)
Full-page landing page component. Composes all section components in sequence with fade-in animation.

**Props**: None
**Children**: Navbar, Hero, TrustBar, ProblemStatement, TwoTrackLayout, SolutionsOverview, HowItWorks, MidCTA, ResultsNumbers, Testimonials, CaseResultSpotlight, IRSNoticeCallout, HomeFAQ, HomeContactForm, BlogPreview, FinalCTA, Footer

---

## Section Components

### **Navbar** (`Navbar.tsx`)
Fixed navigation bar with floating pill design. Shows logo, nav links, phone number, and CTA button on desktop. Mobile hamburger menu with animated dropdown.

**Props**: None
**Data**:
```tsx
NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]
```
**State**: `isOpen` (mobile menu), `scrolled` (navbar shadow on scroll)
**Features**:
- Responsive: Hidden nav on mobile, drawer on trigger
- Scroll effect: Shadow increases on scroll
- Logo with image fallback

---

### **Hero** (`Hero.tsx`)
Full-viewport hero section with image on left (52%), content on right. Staggered animations for headline and CTA.

**Props**: None
**Features**:
- Split layout: Image (52%) + Content (flex-1)
- Image source: `https://polstontax.com/wp-content/uploads/2024/09/banner-img.png.webp`
- Eyebrow icon + text
- H1 headline with line break
- CTA button linking to `/contact`
- Handwritten "How can we help?" SVG animation

---

### **TrustBar** (`TrustBar.tsx`)
Teal section showcasing three trust pillars with icon, title, and description.

**Props**: None
**Data**:
```tsx
TRUST_POINTS = [
  { icon: ShieldCheck, title: "Licensed CPAs", description: "Expert tax professionals, NOT Enrolled Agents." },
  { icon: Clock, title: "Free Consultation", description: "No Obligation, No Upfront Fees." },
  { icon: Lock, title: "Confidential & Secure", description: "Your Information Is Protected." },
]
```
**Layout**: 3-column on desktop, 1 column on mobile with dividers
**Styling**: Teal background (`#009B96`)

---

### **ProblemStatement** (`ProblemStatement.tsx`)
Left image (crossfading) + Right accordion. 4 problem categories with image, title, description, and expandable details.

**Props**: None
**Data**:
```tsx
PROBLEMS = [
  {
    id: "01",
    title: "Back Taxes & Penalties",
    description: "...",
    image: "...",
  },
  // ... 4 items total
]
```
**State**: `activeId` (which problem is expanded)
**Features**:
- Image crossfades on tab change
- Number badges (01–04) with teal background
- Accordion expand/collapse
- "Learn More" button in expanded content

---

### **TwoTrackLayout** (`TwoTrackLayout.tsx`)
Tab-switching section showing either "I Have a Solution" or "I Have a Problem" paths. Displays 6-card grid per path.

**Props**: None
**Data**:
```tsx
TRACKS = {
  solution: {
    label: "I Need a Solution",
    items: [
      { title: "Offer in Compromise", desc: "...", icon: DollarSign },
      // ... 6 items
    ],
  },
  problem: {
    label: "I Have a Problem",
    items: [
      { title: "Back Taxes", desc: "...", icon: TrendingUp },
      // ... 6 items
    ],
  },
}
```
**State**: `activeTrack` (solution or problem)
**Features**:
- Pill tab buttons with active state
- Card grid with icon, title, description, "Learn More" link
- Crossfade animation on tab switch
- Bottom CTA bar

---

### **SolutionsOverview** (`SolutionsOverview.tsx`)
Dark navy section (background `#0f172a`) with flowing SVG line patterns. Left column has headline, image, button. Right column has 6 service links with slide-up hover animation.

**Props**: None
**Data**:
```tsx
SERVICES = [
  { title: "IRS Tax Resolution & Defense", href: "/services" },
  // ... 6 services
]
```
**Features**:
- Background lines (SVG pattern)
- PaintStreak on "Expertise"
- Service links with vertical text slide-up on hover
- Arrow circle buttons

---

### **HowItWorks** (`HowItWorks.tsx`)
Left: Crossfading image + step counter. Right: Accordion with 4 steps. Progress dots at bottom of image for navigation.

**Props**: None
**Data**:
```tsx
STEPS = [
  {
    id: "01",
    title: "Deep Collaboration",
    description: "...",
    features: ["Joint Strategy Sessions", ...],
    image: "...",
  },
  // ... 4 steps
]
```
**State**: `activeTab` (which step is open)
**Features**:
- Step counter overlay on image
- Progress dots (short dots for inactive, longer for active)
- Feature pills in expanded content
- Left border highlight on active accordion item

---

### **MidCTA** (`MidCTA.tsx`)
Mid-page call-to-action with split layout: Left text + Right image with decorative teal shape behind.

**Props**: None
**Features**:
- PaintStreak on "Alone"
- Two CTA buttons: Primary (teal) + Secondary (border)
- Right-side decorative teal rounded square
- Decorative teal circle accent

---

### **ResultsNumbers** (`ResultsNumbers.tsx`)
4-stat grid with animated counters, painted numbers, and PaintStreak accents. Bottom CTA button.

**Props**: None
**Data**:
```tsx
STATS = [
  { value: 98, suffix: "%", label: "Client Satisfaction Rate", strokeColor: "teal", prefix: "" },
  { value: 500, suffix: "M+", label: "In Tax Debt Resolved", strokeColor: "purple", prefix: "$" },
  // ... 4 stats
]
```
**Features**:
- AnimatedCounter component (Framer Motion springs)
- PaintStreak colors per stat
- 2-column on mobile, 4-column on desktop
- Custom border-radius per corner (top-left, top-right, bottom-left, bottom-right rounded)

---

### **Testimonials** (`Testimonials.tsx`)
Infinite horizontal carousel of 6 testimonials. Each card shows quote, star rating, name, location, and large quote mark.

**Props**: None
**Data**:
```tsx
TESTIMONIALS = [
  {
    quote: "...",
    name: "Michael R.",
    location: "Irvine, CA",
  },
  // ... 6 testimonials
]
```
**Features**:
- Full-bleed carousel with fade edges
- Infinite loop (duplicates array internally)
- 60-second animation duration
- Vertical dividers between cards
- 5-star rating display

---

### **CaseResultSpotlight** (`CaseResultSpotlight.tsx`)
Single featured case story with title, metrics, description, and image. Emphasizes dramatic debt reduction.

**Props**: None
**Features**:
- Large headline with PaintStreak
- Multiple stat callouts (owed amount, settled amount, months to resolve)
- Full-width image with overlay
- CTA button

---

### **IRSNoticeCallout** (`IRSNoticeCallout.tsx`)
Eye-catching alert box for urgent/emergency messaging. Shows red alert icon and strong copy.

**Props**: None
**Features**:
- Red/alert color scheme
- Icon accent
- Strong headline
- Secondary text
- CTA button

---

### **HomeFAQ** (`HomeFAQ.tsx`)
Left sticky sidebar with headline, PaintStreak, paragraph, and CTA. Right: 5-question accordion with open/close icons.

**Props**: None
**Data**:
```tsx
HOME_FAQS = [
  {
    id: "01",
    question: "How long does the tax resolution process take?",
    answer: "...",
  },
  // ... 5 FAQs
]
```
**State**: `activeId` (which question is open)
**Features**:
- Sticky sidebar on desktop
- Accordion items with left border highlight
- Plus/minus icons on toggle
- Smooth height animation

---

### **HomeContactForm** (`HomeContactForm.tsx`)
Split layout: Left side with contact info + trust signals. Right side with form + success screen.

**Props**: None
**Data**:
```tsx
CONTACT_ITEMS = [
  { icon: Phone, label: "+1 (949) 287-3015", sub: "Call or text anytime", href: "tel:..." },
  { icon: Mail, label: "info@sympletax.com", sub: "General inquiries", href: "mailto:..." },
  // ... 4 items
]
```
**State**: `submitted` (form success state)
**Features**:
- Form fields: First Name, Last Name, Phone, Email
- Dropdown: "Select Tax Problem"
- Textarea: "Additional Details"
- Success screen with checkmark icon
- Submit button resets form on success

---

### **BlogPreview** (`BlogPreview.tsx`)
2 blog cards + 1 editorial box (right side, dark background). Each blog card has image, category pill, title, description, read-more link.

**Props**: None
**Data**:
```tsx
POSTS = [
  {
    image: "...",
    category: "Tax Resolution",
    title: "How to Successfully Apply for an Offer in Compromise",
    description: "...",
  },
  // ... 2 posts
]
```
**Features**:
- Image hover scale effect
- Category pill overlay on image
- Editorial box with dark background
- Decorative circles on editorial box

---

### **FinalCTA** (`FinalCTA.tsx`)
Split layout: Left image (with fade) + Right strong copy with teal blob decoration. Bottom trust bar with 4 icons.

**Props**: None
**Features**:
- Pill badge ("Get Started")
- Headline with PaintStreak
- Two CTA buttons
- Decorative teal blob background
- Trust bar footer with icons + text

---

### **Footer** (`Footer.tsx`)
Multi-column footer with company info, quick links, services, and contact details. Newsletter signup option.

**Props**: None
**Features**:
- Logo and tagline
- Column layout: Quick Links, Services, Contact Info
- Newsletter signup
- Copyright notice
- Social links (if configured)

---

## Shared / Utility Components

### **PaintStreak** (`PaintStreak.tsx`)
Hand-painted underline/highlight for text. Accepts color prop.

**Props**:
```tsx
interface PaintStreakProps {
  color: 'blue-gray' | 'pink' | 'purple' | 'teal'
  children: React.ReactNode
  opacity?: number
  className?: string
}
```
**Colors**:
- `teal`: `#8DD5CF`
- `pink`: `#E8597A`
- `purple`: `#C9AEE8`
- `blue-gray`: `#B8C9D8`

**Example**:
```tsx
<PaintStreak color="teal">Expert Results</PaintStreak>
```

---

### **ImageWithFallback** (`ImageWithFallback.tsx`)
Image component with error fallback. Shows error SVG if image fails to load.

**Props**: Standard HTML `img` attributes
**Features**:
- Error state handling
- Fallback SVG placeholder
- No console errors on failed loads

**Example**:
```tsx
<ImageWithFallback
  src="https://..."
  alt="Description"
  className="w-full h-full object-cover"
/>
```

---

### **FormField** (in `HomeContactForm.tsx`)
Reusable form input component. Wraps label + input.

**Props**:
```tsx
interface FormFieldProps {
  label: string
  placeholder: string
  required?: boolean
  type?: string
}
```

---

### **AnimatedCounter** (in `ResultsNumbers.tsx`)
Spring-animated counter for stat numbers. Counts up on scroll into view.

**Props**:
```tsx
interface AnimatedCounterProps {
  value: number
  suffix?: string
}
```
**Features**:
- Framer Motion spring physics
- Triggers on viewport entry

---

## Data Constants (Extracted)

All data constants are defined inline in their respective components. To customize, edit the const arrays at the top of each component file.

**Examples**:
- `NAV_LINKS` in `Navbar.tsx`
- `TRUST_POINTS` in `TrustBar.tsx`
- `PROBLEMS` in `ProblemStatement.tsx`
- `TRACKS` in `TwoTrackLayout.tsx`
- `SERVICES` in `SolutionsOverview.tsx`
- `STEPS` in `HowItWorks.tsx`
- `STATS` in `ResultsNumbers.tsx`
- `TESTIMONIALS` in `Testimonials.tsx`
- `HOME_FAQS` in `HomeFAQ.tsx`
- `CONTACT_ITEMS` in `HomeContactForm.tsx`
- `POSTS` in `BlogPreview.tsx`

---

## Component Tree Diagram

```
TemplateC (index.tsx)
├── Navbar
├── Hero
├── TrustBar
├── ProblemStatement (uses ImageWithFallback, PaintStreak)
├── TwoTrackLayout (uses PaintStreak)
├── SolutionsOverview (uses ImageWithFallback, PaintStreak)
├── HowItWorks (uses ImageWithFallback, PaintStreak)
├── MidCTA (uses ImageWithFallback, PaintStreak)
├── ResultsNumbers (uses PaintStreak, AnimatedCounter)
├── Testimonials
├── CaseResultSpotlight (uses ImageWithFallback)
├── IRSNoticeCallout
├── HomeFAQ (uses PaintStreak)
├── HomeContactForm (uses FormField)
├── BlogPreview (uses ImageWithFallback, PaintStreak)
├── FinalCTA (uses ImageWithFallback, PaintStreak)
└── Footer
```

---

## Dependencies

- **motion/react**: AnimatePresence, motion.div, useSpring, useTransform, useInView
- **react-router**: Link component
- **lucide-react**: Icons (Phone, Mail, MapPin, ShieldCheck, Clock, Lock, ArrowUpRight, Plus, Minus, etc.)
- **Custom Components**: PaintStreak, ImageWithFallback
- **React Hooks**: useState, useEffect, useRef, useCallback

---

## Notes

- All components use **Tailwind CSS 4** for styling
- No component-specific CSS files — all styles inline
- Animations leverage Framer Motion's `motion/react`
- Responsive behavior via Tailwind's `md:` and `lg:` utilities (breakpoint at 1024px)
- Icons from Lucide React (open-source SVG icon library)
