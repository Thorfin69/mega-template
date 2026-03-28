import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import LenderLogos from './components/LenderLogos';
import About from './components/About';
import LoanTypes from './components/LoanTypes';
import Team from './components/Team';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import EligibilityBanner from './components/EligibilityBanner';
import Footer from './components/Footer';

// ---------------------------------------------------------------------------
// CONTENT — swap these values for each client deployment
// See CONTENT.md for the full slot map
// ---------------------------------------------------------------------------

// Two CDN base paths used by Tigerloans:
// SITE_CDN  — main site assets (logos, banners, lender logos, etc.)
// COLL_CDN  — CMS collection items (team officer headshots)
const SITE_CDN = 'https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb';
const COLL_CDN = 'https://cdn.prod.website-files.com/691cbc389e7f40013ff24f0b';

// Placeholder portrait used when a loan officer has no photo
const PLACEHOLDER_PORTRAIT = `${COLL_CDN}/691cbc389e7f40013ff2508c_Portrait_placeholder.avif`;

// ---------------------------------------------------------------------------

const LOAN_OFFICERS = [
  {
    name: 'Xiaoyang Xu',
    phone: '(949) 862-8460',
    nmls: '1694351',
    image: `${COLL_CDN}/691cbc389e7f40013ff2504d_4Jcht6Isgkg7trDspOpgG7yNdnhyU6HOIWdkJNPN.avif`,
    href: 'https://tigerloans.com/loan-officers/1694351',
  },
  {
    name: 'Xueying "Sherry" Li',
    phone: '(949) 398-0399',
    nmls: '1822472',
    image: `${COLL_CDN}/691cbc389e7f40013ff24ffe_Usuau5qv09rtuXMl6BermctH8YOABZuUFwwh9O5K.avif`,
    href: 'https://tigerloans.com/loan-officers/1822472',
  },
  {
    name: 'Jianfeng Yin',
    phone: '(949) 317-1616',
    nmls: '2243881',
    image: `${COLL_CDN}/691cbc389e7f40013ff24fa2_QdWKrBvpN7tjt0wgvCDhIa6Ywgr3nK7PExZmCQFh.avif`,
    href: 'https://tigerloans.com/loan-officers/2243881',
  },
  {
    name: 'Wei Xie',
    phone: '(949) 407-9560',
    nmls: '2159350',
    image: PLACEHOLDER_PORTRAIT,
    href: 'https://tigerloans.com/loan-officers/2159350',
  },
  {
    name: 'Joan Xiao',
    phone: '(847) 924-6368',
    nmls: '229074',
    image: PLACEHOLDER_PORTRAIT,
    href: 'https://tigerloans.com/loan-officers/229074',
  },
  {
    name: 'Linda Qu',
    phone: '(469) 515-4121',
    nmls: '1624935',
    image: `${COLL_CDN}/691cbc389e7f40013ff25017_x0C4bQVc8waAor3kXEQpTLW0342mB42ePlDxhEoT.avif`,
    href: 'https://tigerloans.com/loan-officers/1624935',
  },
  {
    name: 'Howard Shen',
    phone: '(224) 805-9898',
    nmls: '288604',
    image: `${COLL_CDN}/691cbc389e7f40013ff2506d_xw7aEJ1ViSXG1mvrOv0GkIsOX240bjOGoGnBfkQz.avif`,
    href: 'https://tigerloans.com/loan-officers/288604',
  },
  {
    name: 'Jun Li',
    phone: '(317) 457-8922',
    nmls: '1921851',
    image: PLACEHOLDER_PORTRAIT,
    href: 'https://tigerloans.com/loan-officers/1921851',
  },
  {
    name: 'John Li',
    phone: '(858) 568-8850',
    nmls: '867311',
    image: `${COLL_CDN}/691cbc389e7f40013ff24fbd_1pP0QWLnHdVp6StpKVfU1frKulFNSbEjPwh3qxYe.avif`,
    href: 'https://tigerloans.com/loan-officers/867311',
  },
  {
    name: 'Richard Leung',
    phone: '(813) 906-6318',
    nmls: '2081954',
    image: PLACEHOLDER_PORTRAIT,
    href: 'https://tigerloans.com/loan-officers/2081954',
  },
  {
    name: 'Wei Guo',
    phone: '(972) 757-7965',
    nmls: '1848572',
    image: `${COLL_CDN}/691cbc389e7f40013ff25030_0fOuEDQ3HNQLVPj1Ht64tYW54wyidNKNDivmNJ0j.avif`,
    href: 'https://tigerloans.com/loan-officers/1848572',
  },
  {
    name: 'Alex Chen',
    phone: '(949) 829-3863',
    nmls: '233900',
    image: `${COLL_CDN}/691cbc389e7f40013ff24fe4_cUqdtTFXZSooBOPtqzRcVQEQGywxNfl9SioRwNWC.avif`,
    href: 'https://tigerloans.com/loan-officers/233900',
  },
  {
    name: 'Rebecca Adcock',
    phone: '(217) 433-0720',
    nmls: '1034159',
    image: `${COLL_CDN}/693b70faa70cd7bd4d9f5755_Business%20Card%20Pic%202.avif`,
    href: 'https://tigerloans.com/loan-officers/1034159',
  },
];

const HERO_FEATURES = [
  { label: 'Quick Pre-Approval' },
  { label: 'Competitive Rates' },
  { label: 'Multi-currency Loans' },
];

const STATS = [
  { value: '$50M+', label: 'Loans Disbursed' },
  { value: '5,000+', label: 'Happy Homeowners' },
  { value: '4.8 / 5', label: 'Average Customer Satisfaction' },
];

const LENDER_LOGOS = [
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff2510e_Frame%20427319970.svg`,
    alt: 'Lender partner 1',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff2510d_Frame%20427319967.svg`,
    alt: 'Lender partner 2',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff2510c_Frame%20427319965.svg`,
    alt: 'Lender partner 3',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff25108_Frame%20427319964.svg`,
    alt: 'Lender partner 4',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff2510b_Frame%20427319966.svg`,
    alt: 'Lender partner 5',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff2510a_Frame%20427319968.svg`,
    alt: 'Lender partner 6',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff25109_Frame%20427319963.svg`,
    alt: 'Lender partner 7',
  },
  {
    src: `${SITE_CDN}/691cbc389e7f40013ff25107_Frame%20427319969.svg`,
    alt: 'Lender partner 8',
  },
];

const LOAN_TYPES = [
  {
    title: 'Purchase a Home',
    description:
      'Everything to know about buying a home. Get comprehensive insights into the entire home-buying process, from searching for properties to closing the deal, ensuring you\'re well-prepared at every step.',
    tags: ['Tax Filing', 'Buying', 'Best Rates', 'Loan Fund'],
    ctaLabel: 'Get Pre-Approved',
    ctaHref: 'https://tigerloans.com/#',
  },
  {
    title: 'Refinance Your Mortgage',
    description:
      'Understand the ins and outs of refinancing. Gain a thorough understanding of refinancing, including when to refinance and how it can benefit your financial situation.',
    tags: ['Options', 'Loans', 'Quarterly Estimates', 'New Home'],
    ctaLabel: 'Check Rate',
    ctaHref: 'https://tigerloans.com/#',
  },
  {
    title: 'Mortgage Resource Center',
    description:
      'Everything to know about mortgages. Access information on all types of mortgages, including types, terms, and application processes, helping you understand every aspect.',
    tags: ['Tax Filing', 'Buying', 'Quarterly Estimates', 'Best Rates'],
    ctaLabel: 'Read More',
    ctaHref: 'https://tigerloans.com/#',
  },
];

// Team members shown in the Team section grid
const TEAM_MEMBERS = LOAN_OFFICERS;

const CALCULATOR_FEATURES = [
  {
    title: 'Estimate Your Monthly Payment',
    body: 'Get a clear idea of your monthly mortgage payment by entering the loan amount, interest rate, and loan term.',
  },
  {
    title: 'Plan Your Budget',
    body: 'Use the calculator to explore how different rates, down payments, or loan terms can impact your affordability and budget planning.',
  },
  {
    title: 'Compare Loan Options',
    body: 'Evaluate various mortgage scenarios to find the best fit for your financial goals, whether you\'re buying a home or refinancing.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'I had a great experience with Jasmine! She is highly professional, attentive, and genuinely committed to helping her customers. Her effectiveness and dedication made the entire process smooth and hassle-free. I highly recommend her services!',
    name: 'Eliauk',
    location: 'USA, California',
  },
  {
    quote:
      "It's a great experience working with Tiger Loans for my mortgage. The Loan Officer Howard worked really hard to get the right solution for us and Jianfeng went the extra mile to make sure things got done.",
    name: 'James Xia',
    location: 'USA, Albuquerque',
  },
  {
    quote:
      'Thank you, Tiger Loan, for a seamless loan process! I had a fantastic experience, with everything running smoothly and on time. The team\'s responsiveness was impressive, and I am thoroughly impressed with their professionalism.',
    name: 'Imran Ashraf',
    location: 'USA, Arizona',
  },
  {
    quote:
      'I had a great experience working with Howard and Jianfeng for my loan and they got it done for me to close my home. Would always recommend them. Thank you.',
    name: 'Haonan Li',
    location: 'USA, California',
  },
];

const BLOG_POSTS = [
  {
    category: 'Refinance',
    title: 'Is It Time to Refinance Your Mortgage? Key Factors to Consider',
    author: 'Alex Chen',
    date: 'November 8, 2025',
    image: `${SITE_CDN}/691cbc389e7f40013ff2589d_task_01k9rtpj3rfqkvw35s5t7sqh2m_1762843755_img_1.avif`,
    href: 'https://tigerloans.com/blog/is-it-time-to-refinance-your-mortgage-key-factors-to-consider',
  },
  {
    category: 'Refinance',
    title: 'Home Equity Loan or Refinance: Making the Right Choice for Your Financial Goals',
    author: 'Alex Chen',
    date: 'November 7, 2025',
    image: `${SITE_CDN}/691cbc389e7f40013ff2589c_task_01k9rtehjwejcvfppr689w8b7x_1762843485_img_1.avif`,
    href: 'https://tigerloans.com/blog/home-equity-loan-or-refinance',
  },
  {
    category: 'Refinance',
    title: 'Understanding Refinancing: How Often Can You Actually Refinance a Mortgage?',
    author: 'Alex Chen',
    date: 'November 7, 2025',
    image: `${SITE_CDN}/691cbc389e7f40013ff25898_task_01k9rsqzfcf2k9zmjmxtehez7m_1762842743_img_1.avif`,
    href: 'https://tigerloans.com/blog/understanding-refinancing-how-often',
  },
  {
    category: 'Refinance',
    title: 'Unlock Savings: Your Guide to Arizona Mortgage Refinance Options',
    author: 'Alex Chen',
    date: 'November 7, 2025',
    image: `${SITE_CDN}/691cbc389e7f40013ff25897_task_01k9rsa18zfx78a5g9217dvsvz_1762842283_img_1.avif`,
    href: 'https://tigerloans.com/blog/arizona-mortgage-refinance-options',
  },
];

const FOOTER_NAV_COLUMNS = [
  {
    heading: 'Site Map',
    links: [
      { label: 'Home', href: 'https://tigerloans.com/' },
      { label: 'About', href: 'https://tigerloans.com/#' },
      { label: 'Contact Us', href: 'https://tigerloans.com/#' },
      { label: 'Loans', href: 'https://tigerloans.com/#' },
      { label: 'Calculators', href: 'https://tigerloans.com/mortgage-calculator' },
      { label: 'Blogs', href: 'https://tigerloans.com/blog' },
    ],
  },
  {
    heading: 'Loan Options',
    links: [
      { label: '15 Year Fixed Mortgage', href: 'https://tigerloans.com/#' },
      { label: '30 Year Fixed Mortgage', href: 'https://tigerloans.com/#' },
      { label: 'Adjustable Rate Mortgage', href: 'https://tigerloans.com/#' },
      { label: 'Reverse Mortgage', href: 'https://tigerloans.com/#' },
      { label: 'Rehab Loan', href: 'https://tigerloans.com/#' },
      { label: 'USDA Loan', href: 'https://tigerloans.com/#' },
      { label: 'VA Home Loan', href: 'https://tigerloans.com/#' },
      { label: 'FHA Home Loan', href: 'https://tigerloans.com/#' },
      { label: 'Jumbo Home Loan', href: 'https://tigerloans.com/#' },
    ],
  },
];

// Social icon SVG paths (filled, 24×24 viewBox)
const SOCIAL_LINKS = [
  {
    platform: 'Facebook',
    href: 'http://www.facebook.com/TigerLoans',
    svgPath:
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    platform: 'Instagram',
    href: 'https://www.instagram.com/tiger_loans/',
    svgPath:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/company/tigerloans',
    svgPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    platform: 'TikTok',
    href: 'https://www.tiktok.com/@tigerloans',
    svgPath:
      'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
];

// ---------------------------------------------------------------------------

export default function TemplateNPage() {
  return (
    <div className="font-[Manrope,sans-serif]">
      <Navbar
        logoSrc={`${SITE_CDN}/691cbc389e7f40013ff2507b_TG_Logo.svg`}
        logoAlt="Tiger Loans"
        nmlsId="1169300"
        loanOfficers={LOAN_OFFICERS}
        applyHref="https://tigerloans.my1003app.com/233900/register"
        mortgageCalculatorHref="https://tigerloans.com/mortgage-calculator"
        blogsHref="https://tigerloans.com/blog"
      />

      <Hero
        eyebrowBadge="New"
        eyebrowText="Multi-currency Loans"
        heading="Get Pre-Approved!"
        headingAccent="Before your house-hunting journey"
        body="We are dedicated to helping you find the best home financing solution for your needs — whether you are buying a home or refinancing your existing mortgage."
        features={HERO_FEATURES}
        ctaPrimary={{ label: 'Get Pre-Approved', href: 'https://tigerloans.com/#' }}
        ctaSecondary={{ label: 'Apply Now', href: 'https://tigerloans.my1003app.com/233900/register' }}
      />

      <StatsBar stats={STATS} />

      <LenderLogos
        heading="Lenders we work with"
        logos={LENDER_LOGOS}
        groupImageSrc={`${SITE_CDN}/691cbc389e7f40013ff25185_Group%203452.png`}
        groupImageAlt="Tiger Loans lender partners"
      />

      <About
        overline="Welcome to Tiger Loans"
        heading="We help to bring your dream home to reality"
        body="Our goal is to help families attain generational wealth through homeownership. Whether you are looking to make your mortgage more affordable by refinancing or you are looking to purchase your first ever home, we understand how valuable owning real estate and more importantly owning a home is!"
        heroImage={`${SITE_CDN}/691cbc389e7f40013ff25186_Untitled%20design%201.jpg`}
        heroImageAlt="Tiger Loans team celebrating homeownership"
      />

      <LoanTypes
        overline="Our Services"
        heading="The Right Loan for Every Journey"
        body="Whether you're buying your first home or refinancing an existing mortgage, we have the expertise and loan products to guide you."
        loanTypes={LOAN_TYPES}
      />

      <Team
        overline="team"
        heading="Meet Our Mortgage Expert Team"
        subheading="Our experienced Mortgage Loan Officers, Mortgage Agents, and Mortgage Brokers are here to guide you – find the best expert near you."
        members={TEAM_MEMBERS}
        teamBgImage={`${SITE_CDN}/691cbc389e7f40013ff25186_Untitled%20design%201.jpg`}
      />

      <Calculator
        overline="Tools"
        heading="Mortgage Financial Calculator"
        body="Use our mortgage calculator to estimate your monthly payments, interest, and total loan costs — all in just a few clicks! Whether you're purchasing a new home or refinancing your existing loan, this tool gives you the clarity you need to make informed financial decisions."
        features={CALCULATOR_FEATURES}
        ctaLabel="Try the Calculator"
        ctaHref="https://tigerloans.com/mortgage-calculator"
        macImage={`${SITE_CDN}/691cbc389e7f40013ff250af_macpro_front_4-5.webp`}
        macImageAlt="Tiger Loans mortgage calculator on MacBook"
      />

      <Testimonials
        overline="Testimonials"
        heading="Our clients are the foundation of our success."
        testimonials={TESTIMONIALS}
      />

      <Blog
        overline="Reading"
        heading="Our Blogs"
        posts={BLOG_POSTS}
        viewAllHref="https://tigerloans.com/blog"
      />

      <Contact
        heading="Contact Our Expert Loan Officer"
        body="Have questions or need guidance on your mortgage journey? Our dedicated loan officers are here to help you every step of the way. Contact us today to explore your options or ask about your specific needs."
        scheduleCallHref="https://tigerloans.com/#"
        freeQuoteHref="https://tigerloans.com/#"
      />

      <EligibilityBanner
        heading="Check If You're Eligible"
        body="Our team of loan experts is ready to review your situation and help you find a mortgage solution that fits your budget, credit, and financial goals."
        applyHref="https://tigerloans.my1003app.com/233900/register"
        equalHousingLogoSrc={`${SITE_CDN}/691cbc389e7f40013ff25189_Equal%20Housing%20Lender%20logo%201.png`}
      />

      <Footer
        logoSrc={`${SITE_CDN}/691cbc389e7f40013ff2507b_TG_Logo.svg`}
        logoAlt="Tiger Loans"
        tagline="Tiger Loans, Inc. is a direct home mortgage lender licensed in Arizona, California, Colorado, Florida, Georgia, Idaho, Illinois, Indiana, Maryland, Nevada, North Carolina, Texas, and Washington."
        address="780 Roosevelt, Ste 120, Irvine, CA 92620"
        email="inquiry@tigerloans.com"
        phone="888-800-4151"
        navColumns={FOOTER_NAV_COLUMNS}
        socialLinks={SOCIAL_LINKS}
        nmlsId="1169300"
        nmlsHref="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=1169300"
        credit="© 2025 Tiger Loans, Inc. | NMLS ID: 1169300. Designed by Blitz Studio"
        disclaimer="Tiger Loans, Inc. is a direct home mortgage lender currently licensed in Arizona, California, Colorado, Florida, Georgia, Idaho, Illinois, Indiana, Maryland, Nevada, North Carolina, Texas, and Washington, and a mortgage broker licensed in Massachusetts (MB1169300) and Virginia. We offer competitive rates and closing costs on conventional fixed and adjustable-rate home mortgages as well as government loans such as FHA and VA loans to qualified individuals in the above-licensed states. For information purposes only. This is not a commitment to lend or extend credit. Information and/or dates are subject to change without notice. All loans are subject to credit approval. Other restrictions may apply."
      />
    </div>
  );
}
