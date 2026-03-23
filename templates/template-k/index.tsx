import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import HowWeWork from './components/HowWeWork';
import WhyChooseUs from './components/WhyChooseUs';
import PayTransparency from './components/PayTransparency';
import WeeklyPay from './components/WeeklyPay';
import DayOneBenefits from './components/DayOneBenefits';
import Specialties from './components/Specialties';
import AssignmentOptions from './components/AssignmentOptions';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import CareAreas from './components/CareAreas';
import Footer from './components/Footer';

// ---------------------------------------------------------------------------
// CONTENT — swap these values for each client deployment
// See CONTENT.md for the full slot map
// ---------------------------------------------------------------------------

const CDN = 'https://cdn.prod.website-files.com/6976d49ed571e41def17fb56';

const SLIDES = [
  {
    image: `${CDN}/6976d4a0d571e41def17fcc1_doctors%20attends%20surgeries.webp`,
    alt: 'Doctors attending surgeries',
  },
  {
    image: `${CDN}/6976d4a0d571e41def17fd52_team-doctors-are-standing-emergency-room.webp`,
    alt: 'Team of doctors in emergency room',
  },
  {
    image: `${CDN}/6976d4a0d571e41def17fd51_doctors.webp`,
    alt: 'Group of doctors',
  },
];

const AVATAR_IMAGES = [
  `${CDN}/6976d4a0d571e41def17fcd4_patient%20three.webp`,
  `${CDN}/6976d4a0d571e41def17fcd1_patient%20image%20two-svg.webp`,
  `${CDN}/6976d4a0d571e41def17fcd0_patient%20four-svg.webp`,
  `${CDN}/6976d4a0d571e41def17fccf_patient%20four.webp`,
];

const STATS = [
  { value: '48 Hour', unit: 'Service', description: 'Average Nurse Placement Time' },
  { value: '8 Years', unit: 'Of Experience', description: 'Years of Experience in Nurse Placement.' },
  { value: 'High quality', unit: 'care', description: 'We take care of our nurses housing, insurance, weekly pay.' },
];

const HOW_WE_WORK_STEPS = [
  {
    number: '01',
    title: 'Apply in Minutes, Not Hours',
    body: 'Skip the paperwork. Submit one simple profile and let our credentialing team handle the heavy lifting to verify you instantly.',
    ctaLabel: 'Read More',
    ctaHref: '#',
  },
  {
    number: '02',
    title: 'Get Matched with Top Hospitals',
    body: 'Your dedicated recruiter learns your specific needs—pay, location, shift—to bring you offers that actually fit your life.',
    ctaLabel: 'Read More',
    ctaHref: '#',
  },
  {
    number: '03',
    title: 'Empowering Independence',
    body: 'Never get ghosted. We guarantee a 10-minute response from your recruiter during business hours, plus 24/7 support for emergencies.',
    ctaLabel: 'Read More',
    ctaHref: '#',
  },
];

const WHY_US_FEATURES = [
  {
    title: 'The 10-Minute Response Promise',
    body: 'Never get ghosted. We guarantee a 10-minute response from your recruiter during business hours, plus 24/7 support for emergencies.',
  },
  {
    title: 'Dedicated Recruiter',
    body: 'One recruiter. One point of contact. No hand-offs, no confusion—just someone who knows you and your goals.',
  },
  {
    title: 'Always Human, Never Corporate',
    body: 'Friendly, real conversations—not call centers or scripted responses. We treat you like a person, not a placement.',
  },
  {
    title: '24/7 Priority Support',
    body: 'Day shift or night shift, emergencies don\'t wait. Our support line is always open for critical issues.',
  },
];

const WHY_US_IMAGES = [
  `${CDN}/6976d4a0d571e41def17fbf3_8cf2ae3c6bbdcd339273a5d489d737d5_medical.webp`,
  `${CDN}/6976d4a0d571e41def17fcca_3fd8610561817f9dca480291ce2770a1_medical.webp`,
  `${CDN}/6976d4a0d571e41def17fcc9_a2dc3c5f6c604b4edfb7b809f6994cbd_li.webp`,
];

const SPECIALTIES_CDN = 'https://cdn.prod.website-files.com/6976d4a0d571e41def17fbca';

const SPECIALTIES = [
  {
    number: '01',
    title: 'Primary Care',
    body: 'Support mothers & newborns through every stage of labor with skill, care, & confidence.',
    image: `${SPECIALTIES_CDN}/69779de5acf15b193fc033c9_medical%20service.png`,
    ctaHref: '#',
  },
  {
    number: '02',
    title: 'ICU / Critical Care',
    body: 'Deliver high-acuity care in fast-paced environments where expertise matters most.',
    image: `${SPECIALTIES_CDN}/69779dfd1aa1669a3b0b7945_medical%20service-1.png`,
    ctaHref: '#',
  },
  {
    number: '03',
    title: 'Medical & Surgical',
    body: 'Provide hands-on care across diverse patient populations in med-surg units.',
    image: `${SPECIALTIES_CDN}/69779e4653f99df5f9563888_medical%20service-2.png`,
    ctaHref: '#',
  },
  {
    number: '04',
    title: 'Emergency / ER',
    body: 'Thrive in high-pressure emergency settings where every second counts.',
    image: `${SPECIALTIES_CDN}/69779e53070e8a097a231fa3_medical%20service-3.png`,
    ctaHref: '#',
  },
  {
    number: '05',
    title: 'Labor & Delivery',
    body: 'Bring compassion and expertise to one of medicine\'s most important moments.',
    image: `${SPECIALTIES_CDN}/69779e60e911d6b7c397ae32_medical%20service-4.png`,
    ctaHref: '#',
  },
  {
    number: '06',
    title: 'Pediatrics',
    body: 'Deliver specialized care to children and families across all clinical settings.',
    image: `${SPECIALTIES_CDN}/69779e7310797869764df0cb_medical%20service-5.png`,
    ctaHref: '#',
  },
];

const ASSIGNMENT_OPTIONS = [
  {
    id: 'travel',
    label: 'Travel Nursing',
    heading: 'Ready for Your Next Assignment?',
    body: 'Take your skills on the road with 13-week contracts nationwide. We handle housing, travel, and logistics so you can focus on the adventure. Includes tax-free housing stipends, relocation assistance, and comprehensive benefits.',
    image: `${CDN}/6976d4a0d571e41def17fd40_Lady%20Doctor.webp`,
  },
  {
    id: 'local',
    label: 'Local Contracts',
    heading: 'Stay Close, Earn More',
    body: 'Stay close to home while enjoying competitive travel rates. Work 13-week assignments within 50 miles of your permanent address—no relocation required. Perfect for nurses who want higher pay without leaving their community.',
    image: `${CDN}/6976d4a0d571e41def17fd41_ratings.jpg`,
  },
  {
    id: 'per-diem',
    label: 'Per Diem',
    heading: 'Maximum Flexibility',
    body: 'Pick up shifts when you want them, where you want them—no long-term commitment required. Ideal for experienced nurses seeking supplemental income or complete control over their schedule.',
    image: `${CDN}/6976d4a0d571e41def17fd42_medical%20treatment.webp`,
  },
  {
    id: 'direct',
    label: 'Direct Hire',
    heading: 'Put Down Roots',
    body: 'Ready to settle? We connect you with hospitals seeking full-time staff nurses for direct hire positions. Enjoy stability, benefits, and growth opportunities while we handle negotiations and ensure you\'re set up for success.',
    image: `${CDN}/6976d4a0d571e41def17fce7_child%20doctor.webp`,
  },
  {
    id: 'crisis',
    label: 'Crisis Response',
    heading: 'Answer the Call',
    body: 'Deploy to high-need areas during staffing emergencies, natural disasters, or pandemic surges. Rapid placement within 48-72 hours with premium crisis pay rates and comprehensive support.',
    image: `${CDN}/6976d4a0d571e41def17fcf1_medical%20sign.webp`,
  },
  {
    id: 'short-term',
    label: 'Short-Term Contracts',
    heading: 'Bridge the Gap',
    body: 'Bridge staffing gaps with short-term assignments ranging from 4-12 weeks. Fill in during peak seasons, maternity leaves, or special projects. Get consistent work with flexibility between contracts.',
    image: `${CDN}/6976d4a0d571e41def17fced_health%20care.webp`,
  },
];

const DESTINATIONS = [
  {
    state: 'California',
    avgWeekly: '$3,200 / wk',
    city: 'Los Angeles',
    type: 'Travel Contract',
    image: `${CDN}/6976d4a0d571e41def17fd19_sad%20lady.webp`,
    ctaLabel: 'View jobs in California',
    ctaHref: '#',
  },
  {
    state: 'Texas',
    avgWeekly: '$2,800 / wk',
    city: 'Houston',
    type: 'Travel Contract',
    image: `${CDN}/6976d4a0d571e41def17fd4f_doctor-explaining-anatomic-model-patient.webp`,
    ctaLabel: 'View jobs in Texas',
    ctaHref: '#',
  },
  {
    state: 'Florida',
    avgWeekly: '$2,700 / wk',
    city: 'Jacksonville',
    type: 'Travel Contract',
    image: `${CDN}/6976d4a0d571e41def17fd50_eye%20care.webp`,
    ctaLabel: 'View jobs in Florida',
    ctaHref: '#',
  },
  {
    state: 'New York',
    avgWeekly: '$3,200 / wk',
    city: 'New York City',
    type: 'Critical Response',
    image: `${CDN}/697cabf6299cd0e3b4407db8_two-female-nurses-working-clinic-sc.webp`,
    ctaLabel: 'View jobs in New York',
    ctaHref: '#',
  },
];

const TESTIMONIALS = [
  {
    name: 'Marcus Thompson',
    role: 'ER Travel Nurse',
    quote: '"I\'ve worked with three travel agencies and Better Nurses is the only one where I felt like a person, not a number. My recruiter Rachel picked up at 11 PM when I had a housing issue on my first night. That\'s real support."',
  },
  {
    name: 'Jessica Kim',
    role: 'ICU Travel Nurse',
    quote: '"The pay transparency alone sold me. No hidden fees, no surprise deductions — just honest pay rates from day one. I\'m making $600 more per week than my last agency and the benefits are actually good."',
  },
  {
    name: 'David Okafor',
    role: 'Travel Nurse',
    quote: '"My recruiter helped me get my compact license sorted in three days when my old agency said it would take two weeks. Better Nurses doesn\'t just talk about support — they actually deliver it."',
  },
  {
    name: 'Sarah Martinez',
    role: 'New Travel Nurse',
    quote: '"I was nervous about my first travel assignment. My recruiter walked me through everything — housing, credentialing, even helped me budget. I\'ve extended twice because of how well it\'s gone."',
  },
  {
    name: 'James Chen',
    role: '5-Year Travel Nurse',
    quote: '"My recruiter answered on a Sunday night. I was submitted Monday morning and had an offer by Tuesday. Fastest process I\'ve ever seen in 5 years of traveling."',
  },
  {
    name: 'Amanda Ross',
    role: 'ICU Travel Nurse',
    quote: '"Finally, an agency that shows the full pay package upfront. No bait and switch. The weekly direct deposit has never been late once."',
  },
  {
    name: 'Michael Torres',
    role: 'Travel Nurse',
    quote: '"My recruiter told me honestly when a hospital wasn\'t a good fit for me. I trust them completely to put my safety over a quick commission."',
  },
  {
    name: 'Priya Sharma',
    role: 'Travel Nurse',
    quote: '"They handled my housing and license transfer effortlessly. I just showed up and started working. They made the cross-country move stress-free."',
  },
];

const CARE_AREAS = [
  { title: 'Cardiac ICU', image: `${CDN}/6976d4a0d571e41def17fd47_patient%20care.webp`, href: '#' },
  { title: 'Oncology', image: `${CDN}/6976d4a0d571e41def17fd46_health-care.webp`, href: '#' },
  { title: 'Neurology', image: `${CDN}/6976d4a0d571e41def17fd02_research.webp`, href: '#' },
  { title: 'Pediatric ICU', image: `${CDN}/6976d4a0d571e41def17fd03_masked%20women.webp`, href: '#' },
  { title: 'Operating Room', image: `${CDN}/6976d4a0d571e41def17fce5_9999e8dfdb3b6097b2344dad735147fd_pi.webp`, href: '#' },
  { title: 'Radiology', image: `${CDN}/6983019e046468d9abbec82b_94ea2d7896d3d52c7d9fd67c6e3b3b96_Ha.webp`, href: '#' },
];

const SOCIAL_LINKS = [
  {
    platform: 'Facebook',
    href: '#',
    icon: `${CDN}/6976d4a0d571e41def17fbd0_facebook.svg`,
  },
  {
    platform: 'Twitter',
    href: '#',
    icon: `${CDN}/6976d4a0d571e41def17fbc4_twitter.svg`,
  },
  {
    platform: 'LinkedIn',
    href: '#',
    icon: `${CDN}/6976d4a0d571e41def17fd54_linkedin.png`,
  },
  {
    platform: 'Instagram',
    href: '#',
    icon: `${CDN}/6976d4a0d571e41def17fbc2_instagram.svg`,
  },
];

// ---------------------------------------------------------------------------

export default function TemplateKPage() {
  return (
    <div className="font-[DM_Sans,sans-serif]">
      <Navbar
        hours="Mon - Fri: 9.00am - 11.00pm"
        phone1="+1 (909) 900-6309"
        phone2="+1 (909) 900-6309"
        logoSrc={`${CDN}/6976d4a0d571e41def17fd48_dde32a20e3cbb2699966cda80dbf08d0_black%20mediclinic%20image.png`}
        logoAlt="Bettermint Healthcare Logo"
        ctaLabel="Apply Now"
        ctaHref="#apply"
      />

      <Hero
        heading="Find your next travel nursing or allied health job."
        subheading="Find exciting travel nursing, allied health, patient support & non-clinical jobs today!"
        slides={SLIDES}
        ctaPrimary={{ label: 'Discover Jobs', href: '#jobs' }}
        ctaSecondary={{ label: 'Talk to a Recruiter', href: '#contact' }}
        trustCount="6,287"
        trustLabel="users with 5 Star reviews and counting"
        avatarImages={AVATAR_IMAGES}
      />

      <StatsBar stats={STATS} />

      <HowWeWork
        overline="How we work"
        heading="Your Career, Your Rules, Our Support"
        subheading="Find exciting travel nursing, allied health, patient support & non-clinical jobs today!"
        steps={HOW_WE_WORK_STEPS}
        sideImage={`${CDN}/6976d4a0d571e41def17fcc1_doctors%20attends%20surgeries.webp`}
      />

      <WhyChooseUs
        overline="Why Better Mint?"
        heading="A Travel Nursing Experience Built Around You"
        subheading="We've redesigned the agency experience to put your career, your pay, and your peace of mind first—no corporate runaround included."
        features={WHY_US_FEATURES}
        sideImages={WHY_US_IMAGES}
      />

      <PayTransparency
        heading="Full Pay Transparency & Benefits"
        subheading="See the full pay breakdown before you commit. No hidden math, no surprises—just clear numbers and real support."
        benefits={[
          {
            title: 'Upfront Pay Breakdown',
            body: 'We show your hourly rate, stipends, and bonuses clearly before you apply, so you always know what you\'re earning.',
          },
          {
            title: 'Benefits That Start Day One',
            body: 'Health, dental, vision, and retirement options kick in immediately—because your well-being shouldn\'t wait.',
          },
        ]}
        image={`${CDN}/6976d4a0d571e41def17fbf3_8cf2ae3c6bbdcd339273a5d489d737d5_medical.webp`}
      />

      <WeeklyPay
        heading="Weekly Pay & Financial Freedom"
        subheading="Get paid consistently and stay in control of your finances—without delays, confusion, or guesswork."
        benefits={[
          {
            title: 'Guaranteed Weekly Pay',
            body: 'Direct deposits go out every Friday, so your money arrives on time, every time. No waiting weeks to get paid for work you\'ve already done.',
          },
          {
            title: 'Financial Support That Works for You',
            body: 'Access free CPA guidance, clear online pay stubs, and tax-efficient stipend structures designed to maximize your take-home pay.',
          },
        ]}
        image={`${CDN}/6976d4a0d571e41def17fcca_3fd8610561817f9dca480291ce2770a1_medical.webp`}
      />

      <DayOneBenefits
        heading="Day 1 Health & Wellness Benefits"
        subheading="Your well-being matters from day one. Our benefits are designed to support your physical, mental, and financial health—so you can focus on what you do best."
        cards={[
          { title: 'Access Expert Care, Instantly' },
          { title: 'Health Coverage That Actually Covers' },
          { title: 'Proactive Wellness Support' },
          { title: 'Mental Health & Long-Term Care' },
        ]}
        image={`${CDN}/6976d4a0d571e41def17fcc9_a2dc3c5f6c604b4edfb7b809f6994cbd_li.webp`}
      />

      <Specialties
        overline="our Specialties"
        heading="Find Jobs in Your Specialty"
        subheading="We've redesigned the agency experience to put your career, your pay, and your peace of mind first."
        specialties={SPECIALTIES}
      />

      <AssignmentOptions
        overline="Assignment options"
        heading="Your Career, Your Way."
        subheading="Take your skills on the road with 13-week contracts nationwide. We handle housing, travel, and logistics."
        assignments={ASSIGNMENT_OPTIONS}
      />

      <Destinations
        overline="Trending Destinations"
        heading="Explore Our Highest Paying Markets."
        subheading="Take your skills on the road with 13-week contracts nationwide. We handle housing, travel, and logistics."
        destinations={DESTINATIONS}
      />

      <Testimonials
        overline="How we work"
        heading="What Our Greatest Customers Say About Us"
        satisfactionRate="100%"
        avgRating="4.9"
        testimonials={TESTIMONIALS}
        ctaLabel="View More"
        ctaHref="#"
      />

      <CareAreas
        overline="our Destinations"
        heading="Popular Care Areas"
        subheading="Browse travel nurse jobs across our most in-demand specialties."
        areas={CARE_AREAS}
        ctaLabel="Browse travel nurse jobs"
        ctaHref="#"
      />

      <Footer
        logoSrc={`${CDN}/6976d4a0d571e41def17fd48_dde32a20e3cbb2699966cda80dbf08d0_black%20mediclinic%20image.png`}
        logoAlt="Bettermint Healthcare"
        tagline="find exciting travel nursing, allied health, patient support & non-clinical jobs today!"
        navColumns={[
          {
            heading: 'Company',
            links: [
              { label: 'Home', href: '#' },
              { label: 'About', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Blog', href: '#' },
              { label: 'Contact', href: '#contact' },
            ],
          },
        ]}
        address="256/A, Central Park Avenue, Main Town, New York City"
        email="araby.h@outlook.com"
        phone="+1 (909) 900-6309"
        socialLinks={SOCIAL_LINKS}
        credit="Designed by BlitzStudio powered by Better Mint LLC"
      />
    </div>
  );
}
