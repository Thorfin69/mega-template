import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

// ---------------------------------------------------------------------------
// CONTENT — swap these values for each client deployment
// See CONTENT.md for the full slot map
// ---------------------------------------------------------------------------

const CDN = 'https://cdn.prod.website-files.com/67b9954de6955a9128473878';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'For Nurses', href: '#nurses' },
  { label: 'Staffing Request', href: '#staffing' },
  { label: 'Blog', href: '#blog' },
];

const STATS = [
  { value: '3,900+', label: 'Happy Patients' },
  { value: '24+', label: 'Years of Experience' },
  { value: '750+', label: 'Partner Expert Doctors' },
  { value: '100+', label: 'Awards Won' },
];

const SERVICES = [
  {
    title: 'Temporary Staffing',
    description:
      'Cover staffing gaps seamlessly with our qualified temporary nurses. Whether it\'s an emergency shortage, seasonal surge, or maternity leave — we respond with speed and precision.',
    icon: `${CDN}/67b9954de6955a912847399d_blue%20background%20headphone.svg`,
    href: '#',
  },
  {
    title: 'Specialized Nursing Staffing',
    description:
      'We provide highly trained nurses for critical care, pediatrics, surgery, and more. Our specialists ensure top-tier care tailored to your facility\'s unique needs.',
    icon: `${CDN}/67b9954de6955a912847399f_blue%20background%20Medical%20Sign.svg`,
    href: '#',
  },
  {
    title: 'Specialty Care',
    description:
      'Our team delivers personalized care for geriatric, pediatric, and specialized medical needs. Trust us to provide expert support where it matters most.',
    icon: `${CDN}/67b9954de6955a91284739a2_blue%20heart.svg`,
    href: '#',
  },
  {
    title: 'Permanent Staffing',
    description:
      'We recruit and place skilled nurses for permanent roles, ensuring stability and excellence in your healthcare facility\'s workforce.',
    icon: `${CDN}/67b9954de6955a912847399e_blue%20hand.svg`,
    href: '#',
  },
  {
    title: 'Travel Nurse Staffing',
    description:
      'Our travel nurses bring experience and flexibility to fill short-term staffing gaps across the nation. Count on reliable professionals who adapt quickly.',
    icon: `${CDN}/67b9954de6955a91284739a3_blue%20water%20drop.svg`,
    href: '#',
  },
  {
    title: 'Per Diem Staffing',
    description:
      'Flexible, day-to-day staffing solutions to meet fluctuating demands. Get qualified nurses for single shifts or variable hours without long-term commitments.',
    icon: `${CDN}/67b9954de6955a91284739a0_blue%20eye.svg`,
    href: '#',
  },
];

const WHY_US_FEATURES = [
  {
    title: 'Expertly Vetted Staff',
    body: 'All our healthcare professionals undergo a thorough screening process, including background checks, licensure verification, and skill assessments. You can trust that the staff we provide will meet your high standards for patient care.',
  },
  {
    title: '24/7 Support and Flexibility',
    body: 'Healthcare is a round-the-clock industry, and so are we. Whether you need last-minute staffing support or consistent coverage for extended periods, we offer flexible, on-demand staffing solutions.',
  },
  {
    title: 'Ongoing Training and Development',
    body: 'We invest in the continuous development of our nurses through ongoing training, certifications, and career advancement opportunities, keeping them current with industry standards.',
  },
  {
    title: 'Commitment to Quality Care',
    body: 'Our commitment goes beyond filling staffing needs. We ensure that every nurse we place is not only highly skilled but also aligned with the core values of the healthcare organizations we serve.',
  },
  {
    title: 'Accreditations and Certifications',
    body: 'We are accredited by recognized healthcare organizations, including the Massachusetts Department of Public Health and the Joint Commission, meeting the highest industry standards.',
  },
];

const TEAM_MEMBERS = [
  {
    name: 'Emmanuel Asia',
    role: 'Chief Executive Officer',
    image: `${CDN}/67b9954de6955a9128473a79_doctors.webp`,
    linkedinHref: '#',
  },
  {
    name: 'Ify Blessing',
    role: 'Staffing Coordinator',
    image: `${CDN}/67b9954de6955a912847391a_customers%20image.webp`,
    linkedinHref: '#',
  },
];

const TESTIMONIALS = [
  {
    name: 'Dr. Emily Thompson',
    role: 'Director of Nursing, Sunrise Hospital',
    quote:
      'CareElite has been our go-to for emergency staffing needs. Their rapid response and quality of nurses provided have been exceptional. It\'s reassuring to know we have such a dependable partner.',
  },
  {
    name: 'Michael Reynolds',
    role: 'Family Member',
    quote:
      'When my father needed in-home care, CareElite stepped in promptly with compassionate and professional staff. Their dedication made a challenging time much more manageable.',
  },
  {
    name: 'Linda Martinez',
    role: 'HR Manager, Greenfield Rehabilitation Center',
    quote:
      "We've collaborated with several staffing agencies, but CareElite's commitment to excellence and swift service sets them apart. Their nurses seamlessly integrate with our team, ensuring uninterrupted patient care.",
  },
  {
    name: "James O'Connor",
    role: 'Admin, Maplewood Nursing Home',
    quote:
      "CareElite's emphasis on urgency and quality is evident in every interaction. Their team consistently provides top-tier professionals who align with our facility's values and standards.",
  },
  {
    name: 'Samantha Lee',
    role: 'COO, Harmony Health Services',
    quote:
      "In the fast-paced world of healthcare, having a reliable staffing partner is crucial. CareElite's responsiveness and the caliber of their staff have been invaluable to our operations.",
  },
  {
    name: 'Michelle Loke',
    role: 'CEO, Boston Hospital Group',
    quote:
      "CareElite's emphasis on urgency and quality is evident in every interaction. Their team consistently provides top-tier professionals who align with our facility's standards.",
  },
];

const SOCIAL_LINKS = [
  {
    platform: 'Facebook',
    href: '#',
    icon: `${CDN}/67b9954de6955a9128473926_facebook.svg`,
  },
  {
    platform: 'Twitter',
    href: '#',
    icon: `${CDN}/67b9954de6955a9128473922_twitter.svg`,
  },
  {
    platform: 'LinkedIn',
    href: '#',
    icon: `${CDN}/67b9954de6955a9128473a7d_linkedin.png`,
  },
  {
    platform: 'Instagram',
    href: '#',
    icon: `${CDN}/67b9954de6955a9128473920_instagram.svg`,
  },
];

const FOOTER_NAV_COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Temporary Staffing', href: '#' },
      { label: 'Specialized Nursing Staffing', href: '#' },
      { label: 'Specialty Care', href: '#' },
      { label: 'Permanent Staffing', href: '#' },
      { label: 'Travel Nurse Staffing', href: '#' },
      { label: 'Per Diem Staffing', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'For Hospitals / Facilities', href: '#' },
      { label: 'Apply as a Nurse', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
];

// ---------------------------------------------------------------------------

export default function TemplateMPage() {
  return (
    <div className="font-[DM_Sans,sans-serif]">
      <Navbar
        logoSrc={`${CDN}/67baeaf4a3ae7caf35402f1e_CareElite%20logo%20SVG%201.svg`}
        logoAlt="Care Elite Logo"
        email="care@careeliteagency.com"
        phone1="+1 508-333-7992"
        phone2="+1 774-507-0042"
        navLinks={NAV_LINKS}
        ctaLabel="Find Staffing Solutions"
        ctaHref="#staffing"
      />

      <Hero
        tagline="Sense of Urgency"
        heading="Providing Reliable Qualified Nursing Staff to Healthcare Facilities"
        body="Care Elite is a temporary nursing staffing agency dedicated to providing highly skilled Registered Nurses, Nurse Practitioners, Licensed Practical Nurses, and Certified Nursing Assistants to hospitals, nursing homes, rehabilitation centers, and private residences."
        ctaPrimary={{ label: 'Find Staffing Solutions', href: '#staffing' }}
        ctaSecondary={{ label: 'For Nurses', href: '#nurses' }}
        trustCount="100+"
        trustLabel="Business Partners Nationwide"
        heroImage={`${CDN}/67bae53828820cb88d273a0a_Agency-Nurses-vs-Staff-Nurses-1.webp`}
        heroImageAlt="Agency nurses vs staff nurses"
        bgShapeSrc={`${CDN}/67b9954de6955a912847399c_background%20shape.svg`}
      />

      <StatsBar stats={STATS} />

      <About
        overline="Sense of Urgency"
        heading="compassionate Care, Exceptional Talent"
        body="At Care Elite our commitment to quality care goes beyond simply filling staffing needs. We understand the vital role nurses play in the healthcare system, and as such, we ensure that every nurse we place is not only highly skilled but also aligned with the core values of the healthcare organizations we serve. We take a comprehensive approach to recruitment, carefully vetting candidates through background checks, interviews, and competency evaluations to guarantee their qualifications meet the highest standards of care."
        ctaLabel="Learn More"
        ctaHref="#about"
        image={`${CDN}/67b9f380910af53580aaf5c6_about-us.png`}
        imageAlt="Care Elite team providing compassionate nursing care"
        badgeSrc={`${CDN}/67b9f2d8089e0920bf2cf6c6_round-text.png`}
      />

      <Services
        overline="Our Services"
        heading="The Best Staffing"
        headingAccent="Expertise in the Industry"
        services={SERVICES}
        ctaNote="Contact our team today to discover how we can address your staffing needs with precision and care."
        ctaLabel="Find Staffing Solutions"
        ctaHref="#staffing"
        ctaLinkLabel="View All Services"
        ctaLinkHref="#services"
      />

      <WhyChooseUs
        heading="Why Choose"
        headingAccent="Care Elite?"
        subheading="Trust, Compliance, and Excellence in Every Placement"
        features={WHY_US_FEATURES}
        image={`${CDN}/67b9954de6955a91284739cd_medium%20shot%20smiley%20man%20nurse.webp`}
        imageAlt="Smiling nurse representing Care Elite quality"
        checkIconSrc={`${CDN}/67b9f2d8089e0920bf2cf6bf_check-circle.svg`}
      />

      <Team
        overline="Our Team"
        heading="Meet our expert Team"
        subheading="Dedicated Professionals Committed to Your Success"
        members={TEAM_MEMBERS}
        linkedinIconSrc={`${CDN}/67b9954de6955a9128473a7d_linkedin.png`}
      />

      <Testimonials
        heading="What Our Greatest Customers"
        headingAccent="Say About Us"
        starSrc={`${CDN}/67b9954de6955a912847391b_star.svg`}
        testimonials={TESTIMONIALS}
      />

      <CTABanner
        heading="Looking For The Best"
        headingAccent="Staffing Solutions?"
        body="Care Elite is committed to delivering reliable, and highly skilled nursing staff to healthcare facilities and private clients. We provide immediate, flexible staffing solutions with a relentless focus on professionalism, quality care, and a Sense of Urgency."
        phone="+1 508-333-7992"
        ctaLabel="Chat with Us"
        ctaHref="#contact"
        callIconSrc={`${CDN}/67b9954de6955a9128473939_faa41dcfed3d5845c6e306bdba924ca6_call%20icon.svg`}
      />

      <Footer
        logoSrc={`${CDN}/67baeaf4a3ae7caf35402f1e_CareElite%20logo%20SVG%201.svg`}
        logoAlt="Care Elite"
        tagline="Bridging the gap between top-tier healthcare talent and organizations that need them, ensuring seamless staffing solutions that prioritize quality care and operational excellence."
        address="Deanna Dr, Holden, MA 01520"
        email="care@careeliteagency.com"
        phone="508-333-7992"
        navColumns={FOOTER_NAV_COLUMNS}
        socialLinks={SOCIAL_LINKS}
        credit="© 2025 Care Elite Nursing. Designed by Blitz Studio"
        license="Licensed by Department of Public Health Of Massachusetts"
      />
    </div>
  );
}
