import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AwardsBanner from './components/AwardsBanner';
import StatsBar from './components/StatsBar';
import OurEdge from './components/OurEdge';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// ---------------------------------------------------------------------------
// CONTENT — swap these values for each client deployment
// See CONTENT.md for the full slot map
// ---------------------------------------------------------------------------

const CDN = 'https://cdn.prod.website-files.com/690efe96164399fade616019';

const NAV_LINKS = [
  { label: 'Home', href: 'https://brandbooster.ai/' },
  { label: 'Services', href: 'https://brandbooster.ai/#services' },
  { label: 'Use Cases', href: 'https://brandbooster.ai/#use-cases' },
  { label: 'Pricing', href: 'https://brandbooster.ai/pricing' },
  { label: 'About Us', href: 'https://brandbooster.ai/about-us' },
  { label: 'Blogs', href: 'https://brandbooster.ai/blog' },
];

const HERO_STATS = [
  { value: '45.7%', label: 'Reductions in CAC' },
  { value: '55%', label: 'Increase in ROAS' },
  { value: '20K+', label: 'Campaigns Managed' },
  { value: '5,600+', label: 'ADs Generated' },
];

const MEDIA_LOGOS = [
  {
    src: `${CDN}/690efe96164399fade6161a6_86d20f6c36fd41db48e42279c1dae657_671f4f5b0f9ee131dc279956_Group-p-500.avif`,
    alt: 'Media outlet logo',
  },
  {
    src: `${CDN}/690efe96164399fade616246_Frame%2016.avif`,
    alt: 'Media outlet logo',
  },
  {
    src: `${CDN}/690efe96164399fade6162d1_Frame%2026.avif`,
    alt: 'Media outlet logo',
  },
  {
    src: `${CDN}/690efe96164399fade6162a4_Frame%2025.avif`,
    alt: 'Media outlet logo',
  },
  {
    src: `${CDN}/690efe96164399fade616247_Frame%2011.avif`,
    alt: 'Media outlet logo',
  },
];

const AWARDS = [
  {
    src: `${CDN}/690efe96164399fade61634c_Frame%206.avif`,
    alt: 'Titan Awards',
  },
  {
    src: `${CDN}/690efe96164399fade616347_awards-1.avif`,
    alt: 'Capterra Best Ease of Use 2024',
  },
  {
    src: `${CDN}/690efe96164399fade616346_awards.avif`,
    alt: 'Bronze 2025 Stevie Winner International Business Awards',
  },
  {
    src: `${CDN}/690efe96164399fade616345_awards-3.avif`,
    alt: 'Software Advice Most Recommended 2024',
  },
  {
    src: `${CDN}/690efe96164399fade616344_awards-6.avif`,
    alt: 'Software Suggest – Reviewed On',
  },
  {
    src: `${CDN}/690efe96164399fade616343_awards-5.avif`,
    alt: 'GetApp Best Functionality & Features 2024',
  },
  {
    src: `${CDN}/690efe96164399fade616355_awards2.avif`,
    alt: 'Capterra Best Ease of Use 2024',
  },
  {
    src: `${CDN}/690efe96164399fade61634a_awards.avif`,
    alt: 'NVIDIA Inception Program',
  },
];

const HERO_STATS_BAR = [
  { value: '436', label: 'SMBs Served' },
  { value: '23,000+', label: 'Booked Calls & Leads Generated' },
  { value: '4.9★', label: 'Average Rating (436 reviews)' },
  { value: '100%', label: 'Money-Back Guarantee' },
];

const OUR_EDGE_FEATURES = [
  {
    title: 'Ads That Already Know How to Win',
    description:
      'Access a unique database of high-performing ads. Powered by Quickads. Unlike most lead generation companies, we don\'t guess.',
  },
  {
    title: 'Competitor Deep Dive',
    description:
      'Curious why competitors get more calls? We analyze your niche, identify gaps, and create systems to attract more qualified leads.',
  },
  {
    title: 'Lead Generation Systems',
    description:
      'No fluff, no long decks — just real funnels that turn your ad spend into clients. We\'re the lead generation agency that talks results.',
  },
  {
    title: 'Human Creativity & AI Productivity',
    description:
      'High-performing creatives powered by an AI-driven, data-backed framework. Powered by Quickads AI.',
  },
  {
    title: 'We Only Make Money When You Do',
    description:
      'You don\'t pay us to "manage" campaigns — you pay us to bring results. After a focused 100-day launch period, we shift to a fair revenue-share model.',
  },
  {
    title: 'Revenue Sharing, Success Scaling',
    description:
      'Our flexible, performance-based revenue-sharing model aligns our success with yours, ensuring a mutually beneficial partnership that scales your business while managing costs effectively.',
  },
];

const INDUSTRIES = [
  'Lawyers',
  'Plumbers',
  'Contractors',
  'Realtors',
  'Local Service Providers',
  'Legal Services',
  'Home Service Pros',
  'Construction Businesses',
  'Roofers',
  'Dentists',
  'Doctors',
  'Manufacturers',
  'Warehouses',
  'HVAC Companies',
  'Solar Installers',
  'Pest Control',
  'Auto Repair',
  'Foundation Repair',
];

const INDUSTRIES_RESULT_STATS = [
  { value: '+122%', label: 'Leads in 3 Weeks' },
  { value: '2x', label: 'Lower Cost Per Lead' },
  { value: '45%', label: 'ROI Improvement in Business' },
  { value: '89%', label: 'Client Satisfaction' },
];

const TESTIMONIALS = [
  {
    name: 'Patrik Findaro',
    role: 'Founder, Visa Franchise',
    quote:
      'BrandBooster provided us with the guidance we needed to select the optimal budget, strategy, and marketing channels, helping us improve our ROAS in under 90 days.',
    imageSrc: `${CDN}/690efe96164399fade61631e_patrick-findaro-visa-franchise-square.avif`,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Mitchell Plumbing Co.',
    quote:
      'We went from barely getting calls to having a full schedule every week. BrandBooster delivered real leads that actually convert into paying customers.',
  },
  {
    name: 'James Rodriguez',
    role: 'Managing Partner, Rodriguez Law Firm',
    quote:
      'Our cost per lead dropped by over 50% within the first two months. The team is incredibly responsive and the results speak for themselves.',
  },
  {
    name: 'Linda Chen',
    role: 'CEO, ProRoof Solutions',
    quote:
      'BrandBooster transformed how we generate leads. We finally have a predictable pipeline of new clients each month instead of relying on word of mouth.',
  },
  {
    name: 'Tom Harris',
    role: 'General Manager, Harris HVAC Services',
    quote:
      'The combination of Google Ads and AI-powered creatives they set up for us has been game-changing. Our booking rate has never been higher.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Lead Audit (2 Weeks)',
    description:
      'We review your current marketing, uncover wasted ad spend, and find hidden opportunities for better lead generation.',
  },
  {
    number: '02',
    title: 'Content That Sells, Not Just Shows',
    description:
      'We create ads, visuals, and messaging designed to get booked calls for lawyers, plumbers, contractors, and other local businesses.',
  },
  {
    number: '03',
    title: 'Launch + Optimization',
    description:
      'We track every click, call, and form submission — then optimize weekly to scale what works. No waiting 6 months. Just fast, measurable lead generation results.',
  },
];

const PRICING_PLANS = [
  {
    name: 'Silver Plan',
    tagline: 'For mid size & SMBs ready to turn on predictable Google Ads leads.',
    price: '$700',
    period: '/ month',
    highlight: false,
    ctaLabel: 'Get Started',
    ctaHref: 'https://www.brandbooster.ai/#contact-form-section',
    featureGroups: [
      {
        title: 'Platforms Supported & Setup',
        items: [
          'Google Search',
          'Google Ads',
          'Google Business Profile',
          'Google Search + Display Network',
          'Bing PPC Networks ($150/mo)',
          'YouTube Ads Management',
        ],
      },
      {
        title: 'Google Ads Management',
        items: [
          'Google Ads Campaign Strategy & Launch',
          'Google Ads Keyword Research & Optimization',
          'Dynamic Keyword Insertion',
          'Google Ads Geo-Targeting & Exclusions',
          'Google Ads Rule-Based Bid Automation',
        ],
      },
      {
        title: 'Data & Support',
        items: [
          'Google Ads Search Retargeting',
          'Google Ads Conversion Tracking',
          'Google Ads Performance Reporting',
          'Dedicated Account Manager',
          '2 Strategy Hours / Month',
          'BONUS: $500 Google Ads Credit (if eligible)',
          'Add On: Social Media Posts $200',
          'Add On: AI Voice Receptionist/Sales $300',
          'Add On: SEO Optimization $500',
        ],
      },
    ],
  },
  {
    name: 'Gold Plan',
    tagline: 'For growing businesses scaling Google Ads with precision.',
    price: '$1,200',
    period: '/ month',
    highlight: true,
    ctaLabel: 'Get Started',
    ctaHref: 'https://www.brandbooster.ai/#contact-form-section',
    featureGroups: [
      {
        title: 'Platforms Supported & Setup',
        items: [
          'Everything from the Silver Package',
          'Google Search & Ads',
          'Google Business Profile',
          'Facebook Ads',
          'Instagram Ads',
        ],
      },
      {
        title: 'Creatives & Ad Production',
        items: [
          'Advanced Google Ads Buyer-Intent Targeting',
          'AI-Optimized Google Ads Bid Management',
          'High-Velocity Google Ads Creative Testing',
          'Weekly Optimization Cycles',
        ],
      },
      {
        title: 'Reporting & Support',
        items: [
          'Google Ads Retargeting',
          'YouTube Funnel Alignment',
          'Google Ads Attribution Models',
          'Scaling Frameworks',
          'Priority Support Access',
          'BONUS: $500 Google Ads Credit (if eligible)',
          'Add On: Social Media Posts $200',
          'Add On: AI Voice Receptionist/Sales $300',
          'Add On: SEO Optimization $500',
        ],
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: 'Why should I hire a lead generation agency?',
    answer:
      'A lead generation agency brings expertise, tools, and strategy to consistently get you leads so you don\'t waste time or money figuring it out yourself. They help you scale faster and get more predictable results.',
  },
  {
    question: 'What types of businesses benefit from local lead generation?',
    answer:
      'Local lead generation works best for service-based businesses like lawyers, plumbers, roofers, realtors, dentists, and contractors. If your customers are searching in your city or region, lead gen can help you dominate your local market.',
  },
  {
    question: 'What channels do lead generation services use?',
    answer:
      'Top agencies use a mix of paid ads (Google, Meta, YouTube), SEO, landing pages, retargeting, and marketing automation. The goal isn\'t just leads — it\'s consistent, high-intent leads that convert.',
  },
  {
    question: 'Is lead generation expensive for small businesses?',
    answer:
      'Not necessarily. With the right strategy, lead generation can be cost-effective and deliver strong ROI. A good agency builds campaigns tailored to your budget and growth goals.',
  },
  {
    question: 'What are lead generation services?',
    answer:
      'Lead generation services help businesses attract and convert potential customers (leads) into real sales opportunities. These services often use targeted ads, landing pages, and proven funnels to bring qualified leads directly to your business.',
  },
  {
    question: 'How is a lead generation company different from running ads myself?',
    answer:
      'Lead generation companies focus on full-funnel strategy — not just clicks. While running ads gets you traffic, a professional agency builds systems that turn traffic into booked calls, clients, and revenue.',
  },
  {
    question: 'How quickly can I expect results from a lead gen agency?',
    answer:
      'Most businesses start seeing results within 2–4 weeks, depending on the niche and offer. A good agency sets up campaigns, tests messaging, and optimizes fast to bring in qualified leads.',
  },
  {
    question: 'Can I track where my leads are coming from?',
    answer:
      'Yes. A professional lead generation service sets up proper tracking, analytics, and reporting so you can see exactly where leads originate and which campaigns deliver the best ROI.',
  },
];

const FOOTER_NAV_COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: 'https://brandbooster.ai/' },
      { label: 'Pricing', href: 'https://brandbooster.ai/pricing' },
      { label: 'Blog', href: 'https://brandbooster.ai/blog' },
      { label: 'About Us', href: 'https://brandbooster.ai/about-us' },
      { label: 'Contact Us', href: 'https://www.brandbooster.ai/#contact-form-section' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'All Services', href: '#' },
      { label: 'Google Ads Agency', href: 'https://brandbooster.ai/google-ads' },
      { label: 'PPC Management Services', href: 'https://brandbooster.ai/ppc-managment' },
      { label: 'Facebook Advertising Agency', href: 'https://brandbooster.ai/services/facebook-advertising-agency' },
      { label: 'Instagram Ads Agency', href: 'https://brandbooster.ai/services/instagram-ads-agency' },
      { label: 'SEO Services', href: 'https://brandbooster.ai/services/seo-services' },
      { label: 'LinkedIn Advertising Agency', href: 'https://brandbooster.ai/services/linkedin-advertising-agency' },
      { label: 'TikTok Ads Agency', href: 'https://brandbooster.ai/services/tiktok-ads-agency' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'All Industries', href: '#' },
      { label: 'Franchisors & Franchise', href: 'https://brandbooster.ai/franchisers' },
      { label: 'Family Lawyers', href: 'https://brandbooster.ai/landing-page/family-lawyers' },
      { label: 'Dental Clinics', href: 'https://brandbooster.ai/landing-page/dental-clinics' },
      { label: 'Roofing & Gutter Installation', href: 'https://brandbooster.ai/landing-page/roofing-gutter-installation' },
      { label: 'HVAC Installation & Repair', href: 'https://brandbooster.ai/landing-page/hvac-installation-repair' },
      { label: 'Real Estate Agents / Brokers', href: 'https://brandbooster.ai/landing-page/real-estate-agents-brokers' },
    ],
  },
];

const SOCIAL_LINKS = [
  { platform: 'Instagram', href: 'https://www.instagram.com/brandbooster.ai' },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/brandbooster-ai/' },
  { platform: 'Facebook', href: '#' },
  { platform: 'Twitter', href: '#' },
];

// ---------------------------------------------------------------------------

export default function TemplateOPage() {
  return (
    <div className="font-[Inter,sans-serif]">
      <Navbar
        logoSrc={`${CDN}/690efe96164399fade616096_Group%20112.svg`}
        logoAlt="BrandBooster"
        navLinks={NAV_LINKS}
        ctaLabel="Contact Us"
        ctaHref="https://www.brandbooster.ai/#contact-form-section"
      />

      <Hero
        badge="436 SMBs Trust BrandBooster"
        heading="#1 Lead Generation Agency For Growing Businesses"
        subheading="Drive growth with consistent leads, real conversions, not just traffic."
        body="Lawyers, contractors, and local service pros use BrandBooster to turn ads into predictable lead flow every single week. We're the lead generation agency built to get real clients — not just traffic."
        ctaPrimary={{ label: 'Yep, I Want More Leads', href: 'https://www.brandbooster.ai/#contact-form-section' }}
        ctaSecondary={{ label: 'Book A Free Call', href: 'https://www.brandbooster.ai/#contact-form-section' }}
        statsLabel="Real Leads. Real Clients. Real Numbers."
        stats={HERO_STATS}
        heroImageLeft={`${CDN}/690efe96164399fade6160f4_Hero%20Left.webp`}
        heroImageRight={`${CDN}/690efe96164399fade6160f5_Hero%20Right.webp`}
        mediaLogos={MEDIA_LOGOS}
        mediaLabel="Featured In Top Media Outlets"
      />

      <AwardsBanner
        label="Trusted by Industry Innovators"
        awards={AWARDS}
      />

      <StatsBar stats={HERO_STATS_BAR} />

      <OurEdge
        overline="Our Edge"
        heading="Smart Lead Generation for"
        headingRotating={['Plumbers', 'Roofers', 'Dentists', 'Lawyers', 'Contractors']}
        body="We're not just another lead generation agency — we build powerful local systems that turn your ad spend into booked calls, fast."
        features={OUR_EDGE_FEATURES}
        ctaLabel="Book A Free Call"
        ctaHref="https://www.brandbooster.ai/#contact-form-section"
        aiPartnerLabel="Human Creativity & AI Productivity"
        aiPartnerNote="High-performing creatives powered by an AI-driven, data-backed framework. Powered by Quickads AI."
        adCountLabel="300K+"
      />

      <Industries
        overline="Industries We Serve"
        heading="Real Clients. Real Results."
        headingAccent="Real ROI."
        body="Our lead generation services are designed for service-based professionals who need predictable growth."
        industries={INDUSTRIES}
        resultStats={INDUSTRIES_RESULT_STATS}
      />

      <Testimonials
        overline="Client Success Stories"
        heading="What Our Clients"
        headingAccent="Say About Us"
        testimonials={TESTIMONIALS}
        resultStats={[{ value: '+122%', label: 'Leads in 3 weeks' }, { value: '4.9★', label: '436 SMB reviews' }]}
      />

      <Process
        overline="Our Process"
        heading="Our 3-Step"
        headingAccent="Lead Gen Process"
        body="We keep it simple — no long audits or endless strategy decks. Just three focused steps to take you from zero to a predictable lead pipeline."
        steps={PROCESS_STEPS}
        ctaLabel="Book A Free Call"
        ctaHref="https://www.brandbooster.ai/#contact-form-section"
      />

      <Pricing
        overline="Affordable Pricing"
        heading="Open to Value Based"
        headingAccent="Partnership"
        body="Empowering your growth with smarter, data-backed strategies. BrandBooster provides the roadmap to dominate your market."
        plans={PRICING_PLANS}
      />

      <ContactForm
        overline="Contact Us"
        heading="Let's Create"
        headingAccent="Impact"
        body="Schedule a call by filling out the form — we'll get in touch shortly."
        email="support@brandbooster.ai"
        phone="(415) 000-000"
        address="Boston – Massachusetts 01420"
        formCtaLabel="Schedule a Call"
      />

      <FAQ
        overline="FAQ"
        heading="Frequently Asked"
        headingAccent="Questions"
        items={FAQ_ITEMS}
      />

      <Footer
        logoSrc={`${CDN}/690efe96164399fade616096_Group%20112.svg`}
        logoAlt="BrandBooster"
        tagline="At BrandBooster.ai, we blend cutting-edge AI technology with human expertise to deliver marketing strategies that are data-driven, impactful, and tailored to your business."
        address="Boston – Massachusetts 01420"
        email="support@brandbooster.ai"
        phone="(415) 000-000"
        navColumns={FOOTER_NAV_COLUMNS}
        socialLinks={SOCIAL_LINKS}
        newsletterPlaceholder="Join our newsletter"
        credit="© 2026 All Rights Reserved by 88 Ventures US, LLC"
      />
    </div>
  );
}
