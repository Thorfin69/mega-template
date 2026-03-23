# Template-C Content Reference

All replaceable content slots, where to find them, and customization patterns.

---

## Navbar (`Navbar.tsx`)

### Navigation Links
**Location**: Top of component, `NAV_LINKS` constant
```tsx
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]
```
**Edit**: Array of objects with `name` (display text) and `href` (route path)

### Logo Image
**Location**: Line ~40, `src` attribute
```tsx
<img src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png" alt="SympleTax" />
```
**Edit**: Replace URL with your logo image URL

### Phone Number
**Location**: Line ~45
```tsx
<a href="tel:+19492873015" className="...">+1 (949) 287-3015</a>
```
**Edit**: Update phone number and href

### CTA Button Text & Route
**Location**: Line ~50
```tsx
<Link to="/contact" className="...">Get Started</Link>
```
**Edit**: Change text and `to` route

---

## Hero (`Hero.tsx`)

### Eyebrow Text
**Location**: Line ~25
```tsx
<span className="...">Expert Tax Solutions</span>
```
**Edit**: Inline text string

### Headline (H1)
**Location**: Line ~30
```tsx
<h1 className="..." style={{ fontSize: "clamp(42px, 4.5vw, 66px)" }}>
  IRS Tax Debt Relief<br />For Your Peace Of Mind
</h1>
```
**Edit**: Replace headline text; `<br />` controls line break position

### CTA Button Text & Route
**Location**: Line ~50
```tsx
<Link to="/contact" className="...">Start Your Free Consultation</Link>
```
**Edit**: Change text and route

### Background Image
**Location**: Line ~55
```tsx
<ImageWithFallback
  src="https://polstontax.com/wp-content/uploads/2024/09/banner-img.png.webp"
  alt="Tax Relief Hero"
/>
```
**Edit**: Replace image URL

### Handwritten SVG Text
**Location**: Line ~60 (inline SVG)
```tsx
<text x="..." y="...">How can we help?</text>
```
**Edit**: Change text content inside SVG

---

## TrustBar (`TrustBar.tsx`)

### Trust Pillars
**Location**: Top of component, `TRUST_POINTS` constant
```tsx
const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Licensed CPAs",
    description: "Expert tax professionals, NOT Enrolled Agents."
  },
  {
    icon: Clock,
    title: "Free Consultation",
    description: "No Obligation, No Upfront Fees."
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    description: "Your Information Is Protected."
  }
]
```
**Edit**:
- `icon`: Change to any Lucide icon (import at top)
- `title`: Short label (1–2 words)
- `description`: Supporting text

---

## ProblemStatement (`ProblemStatement.tsx`)

### Problem Categories (Accordion Items)
**Location**: `PROBLEMS` constant
```tsx
const PROBLEMS = [
  {
    id: "01",
    title: "Back Taxes & Penalties",
    description: "Short preview of the problem...",
    expandedDetails: "Full details shown when expanded...",
    image: "https://..."
  },
  // ... 4 items total
]
```
**Edit**:
- `id`: "01", "02", "03", "04" (number badges)
- `title`: Accordion heading
- `description`: Preview text
- `expandedDetails`: Full content revealed on click
- `image`: Crossfade image URL

### "Learn More" Button Link
**Location**: Line ~120 (inside accordion)
```tsx
<a href="/services">Learn More</a>
```
**Edit**: Change href route

---

## TwoTrackLayout (`TwoTrackLayout.tsx`)

### Tab Labels
**Location**: Lines ~30–35
```tsx
<button onClick={() => setActiveTrack("solution")}>
  I Need a Solution
</button>
<button onClick={() => setActiveTrack("problem")}>
  I Have a Problem
</button>
```
**Edit**: Change button text

### Solution Track Items
**Location**: `TRACKS.solution.items` array
```tsx
const TRACKS = {
  solution: {
    label: "I Need a Solution",
    items: [
      { title: "Offer in Compromise", desc: "Settle IRS debt for less...", icon: DollarSign },
      // ... 6 items
    ]
  },
  problem: {
    // ... similar structure
  }
}
```
**Edit**:
- `title`: Card heading
- `desc`: Card description
- `icon`: Lucide icon (imported at top)

### "Learn More" Links
**Location**: Inside each card
```tsx
<Link to="/services" className="...">Learn More →</Link>
```
**Edit**: Change route

### Bottom CTA
**Location**: Line ~200
```tsx
<Link to="/contact" className="...">Get Started Today</Link>
```
**Edit**: Change text and route

---

## SolutionsOverview (`SolutionsOverview.tsx`)

### Section Headline
**Location**: Line ~25
```tsx
<h2 className="..." style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}>
  Our Expertise <PaintStreak color="teal">In Action</PaintStreak>
</h2>
```
**Edit**: Change headline text

### Left Image
**Location**: Line ~40
```tsx
<ImageWithFallback src="https://..." alt="Expertise" />
```
**Edit**: Replace image URL

### Service Links
**Location**: `SERVICES` constant
```tsx
const SERVICES = [
  { title: "IRS Tax Resolution & Defense", href: "/services" },
  { title: "Wage Garnishment Relief", href: "/services" },
  // ... 6 items
]
```
**Edit**:
- `title`: Service name
- `href`: Route link

### Button Text
**Location**: Line ~100
```tsx
<Link to="/services" className="...">Explore All Solutions</Link>
```
**Edit**: Change text and route

---

## HowItWorks (`HowItWorks.tsx`)

### Section Headline
**Location**: Line ~25
```tsx
<h2>Our Proven Process <PaintStreak color="teal">Step By Step</PaintStreak></h2>
```
**Edit**: Change headline text

### Process Steps (Accordion)
**Location**: `STEPS` constant
```tsx
const STEPS = [
  {
    id: "01",
    title: "Deep Collaboration",
    description: "We work closely with you...",
    features: ["Joint Strategy Sessions", "Weekly Updates", "..."],
    image: "https://..."
  },
  // ... 4 steps
]
```
**Edit**:
- `id`: "01", "02", "03", "04"
- `title`: Step heading
- `description`: Short description
- `features`: Array of feature bullets
- `image`: Crossfade image URL

---

## MidCTA (`MidCTA.tsx`)

### Eyebrow
**Location**: Line ~25
```tsx
<span className="...">Why Choose Us</span>
```
**Edit**: Inline text

### Headline
**Location**: Line ~30
```tsx
<h2>You Don't Have To Go <PaintStreak color="teal">Alone</PaintStreak></h2>
```
**Edit**: Change headline text

### Description
**Location**: Line ~35
```tsx
<p className="...">Our team of licensed CPAs...</p>
```
**Edit**: Replace paragraph text

### Primary CTA
**Location**: Line ~50
```tsx
<Link to="/contact" className="...">Start Free Consultation</Link>
```
**Edit**: Change text and route

### Secondary CTA
**Location**: Line ~55
```tsx
<Link to="/about" className="...">Learn Our Process</Link>
```
**Edit**: Change text and route

---

## ResultsNumbers (`ResultsNumbers.tsx`)

### Stats Grid
**Location**: `STATS` constant
```tsx
const STATS = [
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    strokeColor: "teal",
    prefix: ""
  },
  {
    value: 500,
    suffix: "M+",
    label: "In Tax Debt Resolved",
    strokeColor: "purple",
    prefix: "$"
  },
  // ... 4 stats
]
```
**Edit**:
- `value`: Numeric value to animate
- `suffix`: Text after number (%, M+, etc.)
- `prefix`: Text before number ($, etc.)
- `label`: Stat description
- `strokeColor`: PaintStreak color (teal, purple, pink, blue-gray)

### Bottom CTA
**Location**: Line ~150
```tsx
<Link to="/contact" className="...">See Your Savings Potential</Link>
```
**Edit**: Change text and route

---

## Testimonials (`Testimonials.tsx`)

### Testimonial Cards
**Location**: `TESTIMONIALS` constant
```tsx
const TESTIMONIALS = [
  {
    quote: "They helped me settle my $50,000 tax debt for just...",
    name: "Michael R.",
    location: "Irvine, CA",
    rating: 5
  },
  // ... 6 testimonials
]
```
**Edit**:
- `quote`: Customer quote text (140–180 chars ideal)
- `name`: Customer name
- `location`: City, State
- `rating`: Star rating (1–5)

---

## CaseResultSpotlight (`CaseResultSpotlight.tsx`)

### Headline
**Location**: Line ~25
```tsx
<h2>A Real <PaintStreak color="teal">Success Story</PaintStreak></h2>
```
**Edit**: Change headline text

### Case Title
**Location**: Line ~35
```tsx
<h3 className="...">$250,000 IRS Debt Settlement</h3>
```
**Edit**: Change case title

### Stat Callouts
**Location**: Lines ~40–55
```tsx
<div className="...">
  <div className="...">$250,000</div>
  <div className="...">Amount Owed</div>
</div>
```
**Edit**: Change values and labels for each stat

### Description
**Location**: Line ~65
```tsx
<p className="...">John had been avoiding IRS notices...</p>
```
**Edit**: Replace case description

### Image
**Location**: Line ~75
```tsx
<ImageWithFallback src="https://..." alt="Case Result" />
```
**Edit**: Replace image URL

### CTA Button
**Location**: Line ~85
```tsx
<Link to="/contact" className="...">Get Started</Link>
```
**Edit**: Change text and route

---

## IRSNoticeCallout (`IRSNoticeCallout.tsx`)

### Headline
**Location**: Line ~25
```tsx
<h3 className="...">Received An IRS Notice?</h3>
```
**Edit**: Change headline text

### Description
**Location**: Line ~35
```tsx
<p className="...">Time is critical. We can help protect your rights...</p>
```
**Edit**: Replace description text

### CTA Button
**Location**: Line ~45
```tsx
<Link to="/contact" className="...">Get Emergency Help Now</Link>
```
**Edit**: Change text and route

---

## HomeFAQ (`HomeFAQ.tsx`)

### Sidebar Headline
**Location**: Line ~25
```tsx
<h2>Questions About <PaintStreak color="teal">Tax Relief?</PaintStreak></h2>
```
**Edit**: Change headline text

### Sidebar Description
**Location**: Line ~35
```tsx
<p className="...">We answer the most common questions...</p>
```
**Edit**: Replace description

### Sidebar CTA
**Location**: Line ~45
```tsx
<Link to="/contact" className="...">Ask Us Anything</Link>
```
**Edit**: Change text and route

### FAQ Items
**Location**: `HOME_FAQS` constant
```tsx
const HOME_FAQS = [
  {
    id: "01",
    question: "How long does the tax resolution process take?",
    answer: "The timeline varies depending on..."
  },
  // ... 5 FAQs
]
```
**Edit**:
- `id`: "01", "02", "03", "04", "05"
- `question`: FAQ heading
- `answer`: Full answer text (supports multiline)

---

## HomeContactForm (`HomeContactForm.tsx`)

### Contact Items (Left Sidebar)
**Location**: `CONTACT_ITEMS` constant
```tsx
const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "+1 (949) 287-3015",
    sub: "Call or text anytime",
    href: "tel:+19492873015"
  },
  {
    icon: Mail,
    label: "info@sympletax.com",
    sub: "General inquiries",
    href: "mailto:info@sympletax.com"
  },
  // ... 4 items
]
```
**Edit**:
- `icon`: Lucide icon
- `label`: Contact detail
- `sub`: Supporting text
- `href`: Link target (tel:, mailto:, or URL)

### Form Fields
**Location**: Lines ~100–150
```tsx
<input type="text" placeholder="First Name" />
<input type="email" placeholder="Email" />
// ... other fields
```
**Edit**: Change placeholder text, field types, or labels

### Tax Problem Dropdown
**Location**: Line ~130
```tsx
<select defaultValue="">
  <option value="">Select Tax Problem</option>
  <option value="back-taxes">Back Taxes</option>
  <option value="penalties">IRS Penalties</option>
  // ... options
</select>
```
**Edit**: Change option labels or values

### Success Message
**Location**: Line ~170
```tsx
<h3 className="...">Thank You!</h3>
<p className="...">We've received your information...</p>
```
**Edit**: Change success headline and message

---

## BlogPreview (`BlogPreview.tsx`)

### Blog Posts
**Location**: `POSTS` constant
```tsx
const POSTS = [
  {
    image: "https://...",
    category: "Tax Resolution",
    title: "How to Successfully Apply for an Offer in Compromise",
    description: "An Offer in Compromise (OIC) allows you to...",
    link: "/blog/offer-in-compromise"
  },
  // ... 2 posts
]
```
**Edit**:
- `image`: Article thumbnail URL
- `category`: Category label
- `title`: Article headline
- `description`: Preview text (2–3 sentences)
- `link`: Article route

### Editorial Box Headline
**Location**: Line ~80
```tsx
<h3 className="...">Latest Resources</h3>
```
**Edit**: Change headline text

### Editorial Box Description
**Location**: Line ~90
```tsx
<p className="...">Explore our tax guides and expert advice...</p>
```
**Edit**: Change description

### Editorial Box CTA
**Location**: Line ~100
```tsx
<Link to="/resources" className="...">View All Articles</Link>
```
**Edit**: Change text and route

---

## FinalCTA (`FinalCTA.tsx`)

### Eyebrow
**Location**: Line ~25
```tsx
<span className="...">Ready To Take Action?</span>
```
**Edit**: Inline text

### Headline
**Location**: Line ~30
```tsx
<h2>Get Your IRS Debt Relief <PaintStreak color="teal">Plan Today</PaintStreak></h2>
```
**Edit**: Change headline text

### Description
**Location**: Line ~40
```tsx
<p className="...">Our free consultation takes just 15 minutes...</p>
```
**Edit**: Replace description

### Primary CTA
**Location**: Line ~55
```tsx
<Link to="/contact" className="...">Schedule Free Consultation</Link>
```
**Edit**: Change text and route

### Secondary CTA
**Location**: Line ~60
```tsx
<Link to="/services" className="...">Explore Solutions</Link>
```
**Edit**: Change text and route

### Left Image
**Location**: Line ~75
```tsx
<ImageWithFallback src="https://..." alt="Team" />
```
**Edit**: Replace image URL

### Trust Bar (Bottom)
**Location**: Lines ~120–145
```tsx
// Icons + text pairs like "Licensed CPAs", "No Upfront Fees", etc.
```
**Edit**: Change text labels or icons

---

## Footer (`Footer.tsx`)

### Logo & Tagline
**Location**: Line ~30
```tsx
<img src="https://..." alt="SympleTax" />
<p className="...">Professional tax relief for Americans...</p>
```
**Edit**: Replace logo image URL and tagline text

### Quick Links Section
**Location**: Lines ~45–60
```tsx
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  // ... more links
]
```
**Edit**: Change link labels and routes

### Services Section
**Location**: Lines ~65–80
```tsx
const services = [
  { label: "Tax Resolution", href: "/services" },
  // ... services
]
```
**Edit**: Change service labels and routes

### Contact Info
**Location**: Lines ~85–100
```tsx
<a href="tel:+19492873015">+1 (949) 287-3015</a>
<a href="mailto:info@sympletax.com">info@sympletax.com</a>
<p className="...">123 Tax Avenue, Suite 100</p>
```
**Edit**: Update phone, email, and address

### Newsletter Signup
**Location**: Lines ~105–120
```tsx
<input type="email" placeholder="Enter your email" />
<button>Subscribe</button>
```
**Edit**: Change placeholder and button text

### Copyright & Links
**Location**: Lines ~130–145
```tsx
<p className="...">© 2024 SympleTax. All rights reserved.</p>
<div className="...">Privacy Policy | Terms of Service</div>
```
**Edit**: Update year, company name, and legal links

### Social Links (Optional)
**Location**: Lines ~150–165
```tsx
<a href="https://facebook.com/...">Facebook</a>
<a href="https://linkedin.com/...">LinkedIn</a>
```
**Edit**: Add or update social media URLs

---

## Summary: Content Customization Checklist

- [ ] **Navbar**: Logo, nav links, phone, CTA button
- [ ] **Hero**: Eyebrow, headline, CTA, background image, SVG text
- [ ] **TrustBar**: 3 trust pillars (icon, title, description)
- [ ] **ProblemStatement**: 4 problem items (title, description, image, expanded details)
- [ ] **TwoTrackLayout**: Tab labels, 6 solution items, 6 problem items, CTAs
- [ ] **SolutionsOverview**: Headline, image, 6 service links, CTA
- [ ] **HowItWorks**: Headline, 4 step items (title, description, features, image)
- [ ] **MidCTA**: Headline, description, primary CTA, secondary CTA, image
- [ ] **ResultsNumbers**: 4 stat items (value, suffix, prefix, label, color)
- [ ] **Testimonials**: 6 testimonial items (quote, name, location, rating)
- [ ] **CaseResultSpotlight**: Case title, 3 stat callouts, description, image, CTA
- [ ] **IRSNoticeCallout**: Headline, description, CTA
- [ ] **HomeFAQ**: Sidebar headline/description/CTA, 5 FAQ items (question, answer)
- [ ] **HomeContactForm**: 4 contact items, form fields, dropdown options, success message
- [ ] **BlogPreview**: 2 blog posts, editorial box headline/description/CTA
- [ ] **FinalCTA**: Headline, description, primary CTA, secondary CTA, image, trust bar text
- [ ] **Footer**: Logo, tagline, quick links, services, contact info, newsletter signup, copyright, social links
