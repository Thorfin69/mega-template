import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import SecuritySection from './components/SecuritySection';
import WhyUs from './components/WhyUs';
import Integrations from './components/Integrations';
import Stats from './components/Stats';
import Manifesto from './components/Manifesto';
import ValueProps from './components/ValueProps';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

// ---------------------------------------------------------------------------
// CONTENT — swap these values for each client deployment
// See CONTENT.md for the full slot map
// ---------------------------------------------------------------------------

const CDN = 'https://cdn.prod.website-files.com/696af2fc0ed703e7710c72fd';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Integration', href: '#integrations' },
  { label: 'Contact Us', href: '#contact' },
];

const HOW_IT_WORKS_STEPS = [
  {
    number: '1',
    icon: `${CDN}/696de890a322e13b9baa1e8c_plug_connect_44dp_027DFC_FILL0_wght400_GRAD0_opsz48.svg`,
    title: 'Connect',
    body: 'Securely connect your Snowflake account in minutes with read-only access — no data movement and zero performance impact.',
  },
  {
    number: '2',
    icon: `${CDN}/696de890c737633faad60094_energy_program_time_used_44dp_027DFC_FILL0_wght400_GRAD0_opsz48.svg`,
    title: 'Analyze',
    body: 'We analyze your Snowflake usage and workloads to uncover inefficiencies, idle compute, and hidden cost drivers.',
  },
  {
    number: '3',
    icon: `${CDN}/696de83fbfe82777b9dc70cf_assured_workload_44dp_027DFC_FILL0_wght400_GRAD0_opsz48.svg`,
    title: 'Optimize',
    body: 'Apply clear recommendations and automation to reduce waste, improve efficiency, and lower Snowflake costs.',
  },
];

const FEATURES = [
  {
    icon: `${CDN}/696af2fe0ed703e7710c73d6_9b43c25c340dffc3a25ada9480d073bb_icon-04.svg`,
    title: 'Cost Analysis & Audit',
    body: 'Deep dive into your Snowflake usage patterns to identify cost optimization opportunities and wasteful spending.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c73d9_aa08f3dde56b03f816bbb6e8b4a71859_icon-05.svg`,
    title: 'Query Optimization',
    body: 'Optimize your SQL queries and data models to reduce compute costs while improving performance.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c73d8_fb74e413f2a1392093a19a6cda053fa0_icon-07.svg`,
    title: 'Storage Optimization',
    body: 'Optimize data storage strategies, implement data lifecycle policies, and reduce unnecessary data retention.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c742c_bb62506952b6535027475db8d283245f_icon-08.svg`,
    title: 'Auto-Scaling Policies',
    body: 'Implement intelligent auto-scaling policies to automatically adjust resources based on demand.',
  },
  {
    icon: `${CDN}/696d069e6c0d51391a9e6969_Icon-1.svg`,
    title: 'Ongoing Monitoring',
    body: 'Continuous monitoring and alerting to prevent cost overruns and maintain optimal performance.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c7391_icon-03.svg`,
    title: 'Security by Design',
    body: 'Read-only access with enterprise-grade security. Your data never leaves Snowflake at any point.',
  },
];

const SECURITY_POINTS = [
  {
    icon: `${CDN}/696de83fbfe82777b9dc70cf_assured_workload_44dp_027DFC_FILL0_wght400_GRAD0_opsz48.svg`,
    title: 'Read-Only Access',
    body: 'MaxMyCloud connects using secure, read-only access to metadata only. We never touch your business data or proprietary tables.',
  },
  {
    icon: `${CDN}/696de890a322e13b9baa1e8c_plug_connect_44dp_027DFC_FILL0_wght400_GRAD0_opsz48.svg`,
    title: 'Your Data Stays in Snowflake',
    body: 'All analysis happens within your Snowflake environment. No data is copied, moved, or stored outside your account.',
  },
  {
    icon: `${CDN}/696de890c737633faad60094_energy_program_time_used_44dp_027DFC_FILL0_wght400_GRAD0_opsz48.svg`,
    title: 'Instant Access Revocation',
    body: 'Disconnect MaxMyCloud at any time with a single click. Access is fully revocable with zero residual data exposure.',
  },
];

const WHY_US_ITEMS = [
  {
    icon: `${CDN}/696af2fe0ed703e7710c742b_icon-09.svg`,
    title: 'Automated Optimization',
    body: 'Continuously monitors Snowflake usage and applies cost-saving optimizations automatically — no manual effort required.',
  },
  {
    icon: `${CDN}/696d0bd11d9973b0f8873e9d_Container.svg`,
    title: 'Guaranteed Savings',
    body: 'Cut your Snowflake cloud spend by at least 20% or you don\'t pay. Typical customers achieve 30–50% reduction.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c742d_icon-10.svg`,
    title: 'No Performance Impact',
    body: 'All optimizations are designed to maintain or improve query performance — zero disruption to your users or workloads.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c742e_icon-11.svg`,
    title: 'Expert Support',
    body: 'Get access to Snowflake and FinOps experts whenever you need help — real people, not bots.',
  },
];

const INTEGRATIONS = [
  { src: `${CDN}/69719911ecf17527dee530ac_a74f2088b690a02fb9639f077831fd45.webp`, name: 'Snowflake' },
  { src: `${CDN}/697199dca32505d7e754ff21_google-bigquery-logo-png_seeklogo-463927.webp`, name: 'BigQuery' },
  { src: `${CDN}/697199dc5430aee331be3f32_t_aws-amazon-web-services.webp`, name: 'AWS' },
  { src: `${CDN}/697199dcadac2e67cea3a641_azure-databricks5940.webp`, name: 'Databricks' },
  { src: `${CDN}/69719abc1e28f1888732ceb3_airbyte-logo-png_seeklogo-465321.webp`, name: 'Airbyte' },
  { src: `${CDN}/69719b21b8bec41c00dcac27_23dc5b62b07c84decb125e3acec7a74a29b3116a.webp`, name: 'dbt' },
  { src: `${CDN}/69719b55a55ebbcfc0f53b6c_matillion-logo-png_seeklogo-617927.webp`, name: 'Matillion' },
];

const STATS = [
  {
    value: '20%',
    description: 'Minimum guaranteed reduction in Snowflake costs — or you don\'t pay.',
  },
  {
    value: '< 60min',
    description: 'Average integration time with existing Snowflake environments.',
  },
];

const MANIFESTO_POINTS = [
  {
    title: 'Proven Performance',
    body: 'Consistently reduce Snowflake costs while maintaining or improving query performance.',
  },
  {
    title: 'Smart Automation',
    body: 'Automatically detect inefficiencies and apply optimizations with minimal manual effort.',
  },
  {
    title: 'Cost-Effective Plans',
    body: 'Flat, predictable pricing designed to scale without per-user or usage penalties.',
  },
];

const VALUE_PROPS = [
  {
    icon: `${CDN}/696d069ed549a337e065d23f_Icon.svg`,
    title: 'Automated Optimization',
    body: 'Continuously monitor Snowflake usage and optimize costs in the background.',
  },
  {
    icon: `${CDN}/696d069e6c0d51391a9e6969_Icon-1.svg`,
    title: 'Maximum Data Security',
    body: 'Read-only access with enterprise-grade security. Your data never leaves Snowflake.',
  },
  {
    icon: `${CDN}/696d069ea3e58af5a51fb72d_Icon-2.svg`,
    title: 'Flexible Scalability',
    body: 'Designed to scale seamlessly as Snowflake workloads and data volumes grow.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c742f_icon-12.svg`,
    title: 'Enhanced Productivity',
    body: 'Clear insights and recommendations help teams act faster with confidence.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c73f8_icon-13.svg`,
    title: 'Built for Peace of Mind',
    body: 'Designed to run continuously in the background without requiring constant oversight.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c73fb_icon-17.svg`,
    title: 'Proven Performance',
    body: 'Consistently reduce costs while maintaining or improving query performance.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c744e_icon-01.svg`,
    title: 'Smart Automation',
    body: 'Automatically detect inefficiencies and apply optimizations with minimal manual effort.',
  },
  {
    icon: `${CDN}/696af2fe0ed703e7710c738d_icon-02.svg`,
    title: 'Cost-Effective Plans',
    body: 'Flat, predictable pricing with no per-user or per-query fees. Just clear, tied-to-savings value.',
  },
];

const PRICING_PLANS = [
  {
    icon: `${CDN}/696d07469706745beba3d719_Pricing%20Icon.svg`,
    name: 'Starter',
    monthlyPrice: '99',
    yearlyPrice: '89',
    description: 'Core Snowflake cost visibility and optimization for a single account.',
    ctaLabel: 'Get started free',
    ctaHref: '#contact',
    features: [
      { label: '1 Snowflake account', included: true },
      { label: 'Cost analysis & audit', included: true },
      { label: 'Query optimization recommendations', included: true },
      { label: 'Storage optimization insights', included: true },
      { label: 'Basic monitoring & alerts', included: true },
      { label: 'Email support (48hr response)', included: true },
      { label: 'Automated optimization engine', included: false },
      { label: 'Implementation support', included: false },
    ],
  },
  {
    icon: `${CDN}/696d074610078a68a84815d4_Pricing%20Icon-1.svg`,
    name: 'Professional',
    monthlyPrice: '399',
    yearlyPrice: '350',
    description: 'Advanced cost monitoring and optimization across Snowflake accounts.',
    ctaLabel: 'Start free trial',
    ctaHref: '#contact',
    featured: true,
    featuredLabel: 'Most Popular',
    features: [
      { label: 'Up to 8 Snowflake accounts', included: true },
      { label: 'Everything in Starter', included: true },
      { label: 'Automated optimization engine', included: true },
      { label: 'Auto-scaling policies', included: true },
      { label: '200 monthly recommendation alerts', included: true },
      { label: 'Implementation support', included: true },
      { label: 'Priority support (8hr response)', included: true },
      { label: 'SSO integration', included: false },
    ],
  },
  {
    icon: `${CDN}/696d0746e51cdabde69efd94_Pricing%20Icon-2.svg`,
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    description: 'Custom Snowflake optimization for large-scale, multi-team environments.',
    ctaLabel: 'Talk to sales',
    ctaHref: '#contact',
    features: [
      { label: 'Unlimited Snowflake accounts', included: true },
      { label: 'Everything in Professional', included: true },
      { label: 'SSO integration', included: true },
      { label: 'Dedicated Snowflake expert', included: true },
      { label: 'Custom SLAs', included: true },
      { label: 'Phone & Slack support', included: true },
      { label: 'Custom integrations', included: true },
      { label: 'Security review & compliance docs', included: true },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: 'John D.',
    role: 'Head of Data Engineering',
    quote: 'MaxMyCloud helped us uncover cost inefficiencies we didn\'t even know existed. We reduced our Snowflake spend significantly without impacting performance.',
    avatar: `${CDN}/696af2fe0ed703e7710c73f4_avatar-1.webp`,
  },
  {
    name: 'Sarah K.',
    role: 'Director of Analytics',
    quote: 'We finally have confidence in our Snowflake spend. No guesswork — just clear data and smart recommendations that actually work.',
    avatar: `${CDN}/696af2fe0ed703e7710c73dc_avatar-2.webp`,
  },
  {
    name: 'Michael T.',
    role: 'Platform Engineering Lead',
    quote: 'The setup was quick, secure, and completely non-intrusive. Within days, we had clear visibility into where our Snowflake costs were leaking.',
    avatar: `${CDN}/696af2fe0ed703e7710c73dd_avatar-3.webp`,
  },
  {
    name: 'Priya N.',
    role: 'Head of Infrastructure',
    quote: 'We achieved meaningful cost savings while maintaining query performance. That balance is hard to find, and MaxMyCloud delivered on both counts.',
    avatar: `${CDN}/696af2fe0ed703e7710c73f6_avatar-4.webp`,
  },
  {
    name: 'David R.',
    role: 'VP of Engineering',
    quote: 'The read-only access and security-first approach made it easy to get internal buy-in. Zero risk, real results — that\'s the pitch and it\'s true.',
    avatar: `${CDN}/696af2fe0ed703e7710c73f7_avatar-5.webp`,
  },
  {
    name: 'Emma L.',
    role: 'Data Platform Manager',
    quote: 'What stood out was the clarity. MaxMyCloud made Snowflake cost optimization easy to understand and act on, even for non-technical stakeholders.',
    avatar: `${CDN}/696af2fe0ed703e7710c73f9_avatar-6.webp`,
  },
];

const BLOG_POSTS = [
  {
    image: `${CDN}/696af2fe0ed703e7710c7426_blog-04.webp`,
    imageAlt: 'The future of cloud storage',
    category: 'Cloud Storage',
    title: 'The future of cloud storage',
    excerpt: 'How modern cloud storage enhances scalability, security, and accessibility for data teams.',
    href: '#',
  },
  {
    image: `${CDN}/696af2fe0ed703e7710c7448_blog-06.webp`,
    imageAlt: 'Cloud collaboration',
    category: 'Productivity',
    title: 'Cloud collaboration: Boosting team productivity',
    excerpt: 'How cloud-based workspaces improve efficiency and remote teamwork across data organizations.',
    href: '#',
  },
  {
    image: `${CDN}/696af2fe0ed703e7710c7484_blog-05.webp`,
    imageAlt: 'Auto backup and recovery',
    category: 'Data Ops',
    title: 'Why auto backup & recovery matters',
    excerpt: 'The importance of automated backups in preventing data loss and ensuring business continuity.',
    href: '#',
  },
];

const FAQ_ITEMS = [
  {
    question: '1. How does MaxMyCloud connect to Snowflake?',
    answer: 'MaxMyCloud connects using secure, read-only access. No data is moved, modified, or stored outside your Snowflake environment.',
  },
  {
    question: '2. Will this impact Snowflake performance?',
    answer: 'No. All optimizations are designed to maintain or improve query performance without disrupting workloads or users.',
  },
  {
    question: '3. How quickly can we see cost savings?',
    answer: 'Most customers start identifying savings within days of connection, with measurable reductions following soon after.',
  },
  {
    question: '4. What kind of cost reduction can we expect?',
    answer: 'Customers typically achieve 30–50% reduction in Snowflake costs, depending on usage patterns and optimization opportunities.',
  },
  {
    question: '5. Do you charge per user or per query?',
    answer: 'No. MaxMyCloud uses flat, predictable pricing with no per-user or per-query fees.',
  },
  {
    question: '6. Is MaxMyCloud secure?',
    answer: 'Yes. We follow enterprise-grade security practices and require read-only access. Your data never leaves Snowflake.',
  },
  {
    question: '7. Does this replace our FinOps or data team?',
    answer: 'No. MaxMyCloud augments existing teams by providing clear insights and automated optimizations, reducing manual effort.',
  },
  {
    question: '8. What Snowflake environments are supported?',
    answer: 'MaxMyCloud works across all Snowflake environments, including Standard, Enterprise & Business Critical.',
  },
  {
    question: '9. How long does setup take?',
    answer: 'Setup typically takes less than 15 minutes, with no complex configuration or downtime required.',
  },
  {
    question: '10. What happens if we don\'t see savings?',
    answer: 'If savings aren\'t identified after we work with you to refine optimization strategies, we will issue a 100% refund. No questions asked.',
  },
];

const FOOTER_NAV_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Calculator', href: '#calculator' },
      { label: 'Security', href: '#security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const FOOTER_SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    href: '#',
    icon: `${CDN}/696af2fe0ed703e7710c738c_linkedin.svg`,
  },
];

// ---------------------------------------------------------------------------

export default function TemplateLPage() {
  return (
    <div className="font-[DM_Sans,sans-serif]">
      <Navbar
        logoSrc={`${CDN}/697195d684abf77438e7c2c4_Frame%202147258922.png`}
        logoAlt="MaxMyCloud Logo"
        navLinks={NAV_LINKS}
        ctaLabel="Start free trial"
        ctaHref="#contact"
      />

      <Hero
        badge="Snowflake Cost Reduction"
        badgeIcon={`${CDN}/6971988fa5f021f69f8703eb_nav-icon-snowflake-bug.svg`}
        heading="Snowflake Cost Control for Modern Data Teams"
        subheading="We specialize in Snowflake cost optimization, helping teams reduce cloud data warehouse spend without sacrificing performance."
        ctaPrimary={{ label: 'Start free trial', href: '#contact' }}
        ctaSecondary={{ label: 'Book a Demo', href: '#contact' }}
        dashboardImage={`${CDN}/696c4bf4a51433bf2ddf9e24_Dashboard%20Image.png`}
        dashboardAlt="MaxMyCloud Snowflake optimization dashboard"
      />

      <HowItWorks
        overline="Built for Security, Scale, and Control"
        heading="How MaxMyCloud works for you"
        subheading="We help you gain control over Snowflake costs through a simple, secure workflow — connect once, analyze usage, and optimize confidently."
        steps={HOW_IT_WORKS_STEPS}
      />

      <Features
        overline="Platform Capabilities"
        heading="Snowflake Clarity That Scales"
        subheading="We help teams reduce Snowflake costs by identifying inefficiencies and optimizing usage. Built for scale, security, and measurable savings."
        features={FEATURES}
      />

      <SecuritySection
        overline="Security First"
        heading="Enterprise-Grade Security by Design"
        subheading="MaxMyCloud utilizes a read-only connection to access metadata like query history and warehouse metrics. We never touch your business data or proprietary tables."
        points={SECURITY_POINTS}
        image={`${CDN}/696af2fe0ed703e7710c74b8_access-image.jpg`}
        imageAlt="MaxMyCloud secure access architecture"
      />

      <WhyUs
        overline="Why MaxMyCloud"
        heading="The platform built around real savings"
        subheading="We've designed every feature to deliver measurable cost reductions without compromise on performance, security, or control."
        items={WHY_US_ITEMS}
      />

      <Integrations
        overline="Integrations"
        heading="Connect your data ecosystem"
        subheading="Connect MaxMyCloud with your existing data and analytics stack to get a complete view of Snowflake usage. Integrations are secure, seamless, and designed to add context."
        integrations={INTEGRATIONS}
      />

      <Stats stats={STATS} />

      <Manifesto
        overline="Our Philosophy"
        heading="How MaxMyCloud thinks about this"
        body="We think cloud cost optimization is one of the highest-leverage things a data team can do — but it only works if the process is honest. That means:"
        points={MANIFESTO_POINTS}
      />

      <ValueProps
        overline="Everything You Need"
        heading="Built for modern data teams"
        subheading="MaxMyCloud empowers teams with smart, intuitive tools designed to simplify workflows, enhance collaboration, and drive measurable results."
        items={VALUE_PROPS}
      />

      <Pricing
        overline="Pricing"
        heading="Flexible pricing that grows with you"
        subheading="Simple, predictable pricing designed to scale as your Snowflake usage grows. No per-user fees, no surprise costs — just clear value tied to real savings."
        plans={PRICING_PLANS}
        crownIcon={`${CDN}/696af2fe0ed703e7710c74b6_crown.svg`}
      />

      <Testimonials
        overline="Customer Stories"
        heading="Voice of our customers"
        subheading="MaxMyCloud empowers teams with smart, intuitive tools designed to simplify workflows, enhance collaboration, and drive measurable results."
        testimonials={TESTIMONIALS}
      />

      <BlogSection
        overline="Insights"
        heading="Snowflake Optimization Blog"
        subheading="Expert tips, best practices, and proven strategies to reduce your Snowflake costs."
        posts={BLOG_POSTS}
      />

      <FAQ
        overline="FAQ"
        heading="We answer your questions"
        subheading="MaxMyCloud empowers teams with smart, intuitive tools designed to simplify workflows and drive measurable results."
        items={FAQ_ITEMS}
      />

      <CTABanner
        heading="Start Optimizing Your Snowflake Costs Today"
        subheading="Uncover hidden inefficiencies and start reducing Snowflake spend in minutes — no disruption, no risk."
        ctaPrimary={{ label: 'Calculate Your Savings', href: '#calculator' }}
        ctaSecondary={{ label: 'Schedule a Free Consultation', href: '#contact' }}
        note="No credit card required"
      />

      <Footer
        logoSrc={`${CDN}/697195d684abf77438e7c2c4_Frame%202147258922.png`}
        logoAlt="MaxMyCloud"
        tagline="Specializing in Snowflake cost optimization. We help reduce your cloud data warehouse spend by over 30–50%."
        emailSubscribeLabel="Get free optimization techniques"
        emailSubscribePlaceholder="Enter your email address"
        navColumns={FOOTER_NAV_COLUMNS}
        socialLinks={FOOTER_SOCIAL_LINKS}
        credit="Designed by BlitzStudio powered by MaxMyCloud"
        bgImage={`${CDN}/696af2fe0ed703e7710c73a4_footer-bg-image.webp`}
      />
    </div>
  );
}
