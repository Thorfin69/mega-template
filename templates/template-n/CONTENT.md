# CONTENT.md — Template N: Home Loans / Mortgage Lending
# Machine-readable content slot map for the Tigerloans UI

---

## NAVBAR

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `navbar.logo_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2507b_TG_Logo.svg` | image URL | — | Navbar logo | required |
| `navbar.logo_alt` | `Tiger Loans Logo` | text | 80 chars | Logo alt text | required |
| `navbar.nmls_id` | `1169300` | text | 20 chars | NMLS ID badge in navbar | required |
| `navbar.apply_href` | `#contact` | text | — | "Apply Now" CTA link | required |
| `navbar.calculator_href` | `https://tigerloans.com/mortgage-calculator` | text | — | Mortgage Calculator nav link | required |
| `navbar.blogs_href` | `https://tigerloans.com/blog` | text | — | Our Blogs nav link | required |
| `navbar.officer_1_name` | `Alex Chen` | text | 40 chars | Loan Officer 1 name | required |
| `navbar.officer_1_phone` | `(888) 800-4151` | text | 20 chars | Officer 1 phone | required |
| `navbar.officer_1_nmls` | `233900` | text | 20 chars | Officer 1 NMLS | required |
| `navbar.officer_1_image` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2504d_4Jcht6Is...avif` | image URL | — | Officer 1 photo | required |
| `navbar.officer_1_href` | `https://tigerloans.com/alex-chen` | text | — | Officer 1 profile link | optional |
| `navbar.officer_2_name` | `Rebecca Adcock` | text | 40 chars | Loan Officer 2 name | required |
| `navbar.officer_2_nmls` | `1034159` | text | 20 chars | Officer 2 NMLS | required |
| `navbar.officer_3_name` | `John Li` | text | 40 chars | Loan Officer 3 name | required |
| `navbar.officer_3_nmls` | `867311` | text | 20 chars | Officer 3 NMLS | required |
| `navbar.officer_4_name` | `Linda Qu` | text | 40 chars | Loan Officer 4 name | required |
| `navbar.officer_4_nmls` | `1624935` | text | 20 chars | Officer 4 NMLS | required |
| `navbar.officer_5_name` | `Jianfeng Yin` | text | 40 chars | Loan Officer 5 name | required |
| `navbar.officer_5_nmls` | `2243881` | text | 20 chars | Officer 5 NMLS | required |
| `navbar.officer_6_name` | `Xueying "Sherry" Li` | text | 40 chars | Loan Officer 6 name | required |
| `navbar.officer_6_nmls` | `1822472` | text | 20 chars | Officer 6 NMLS | required |

---

## HERO (header-section + section-wrapper)

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `hero.eyebrow_badge` | `New` | text | 10 chars | Amber pill badge left of eyebrow text | optional |
| `hero.eyebrow_text` | `Multi-currency Loans` | text | 50 chars | Eyebrow text right of badge | optional |
| `hero.heading` | `Get Pre-Approved!` | text | 60 chars | Hero H1 main text | required |
| `hero.heading_accent` | `Before your house-hunting journey` | text | 60 chars | H1 amber-colored accent span | required |
| `hero.body` | `We are dedicated to helping you find the best home financing solution for your needs - whether you are buying a home or refinancing your existing mortgage.` | text | 200 chars | Hero body paragraph | required |
| `hero.feature_1` | `Quick Pre-Approval` | text | 40 chars | Feature bullet 1 | required |
| `hero.feature_2` | `Competitive Rates` | text | 40 chars | Feature bullet 2 | required |
| `hero.feature_3` | `Expert Guidance` | text | 40 chars | Feature bullet 3 | required |
| `hero.cta_primary_label` | `Apply Now` | text | 25 chars | Primary amber CTA button | required |
| `hero.cta_primary_href` | `#contact` | text | — | Primary CTA link | required |
| `hero.cta_secondary_label` | `Apply Now` | text | 25 chars | Secondary ghost CTA button | optional |
| `hero.cta_secondary_href` | `#contact` | text | — | Secondary CTA link | optional |
| `hero.apply_href` | `#contact` | text | — | Inline "Quick Pre-Approval" link | optional |
| `hero.bg_image` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25185_Group%203452.png` | image URL | — | Hero background/overlay image | required |

---

## STATS BAR

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `stats.overline` | `See why we're rated Almost 5-stars!` | text | 60 chars | Stats section overline heading | optional |
| `stats.stat_1_value` | `$50M+` | text | 10 chars | Stat 1 large amber number | required |
| `stats.stat_1_label` | `Loans Disbursed` | text | 40 chars | Stat 1 description | required |
| `stats.stat_2_value` | `5,000+` | text | 10 chars | Stat 2 large amber number | required |
| `stats.stat_2_label` | `Happy Homeowners` | text | 40 chars | Stat 2 description | required |
| `stats.stat_3_value` | `5★` | text | 10 chars | Stat 3 large amber number | optional |
| `stats.stat_3_label` | `Average Rating` | text | 40 chars | Stat 3 description | optional |

---

## LENDER LOGOS

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `lenders.heading` | `Lenders we work with` | text | 50 chars | Section heading above marquee | required |
| `lenders.logo_1_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2510e_Frame%20427319970.svg` | image URL | — | Lender logo 1 | required |
| `lenders.logo_1_alt` | `Lender partner 1` | text | 40 chars | Logo 1 alt text | required |
| `lenders.logo_2_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2510d_Frame%20427319967.svg` | image URL | — | Lender logo 2 | required |
| `lenders.logo_2_alt` | `Lender partner 2` | text | 40 chars | Logo 2 alt text | required |
| `lenders.logo_3_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2510c_Frame%20427319965.svg` | image URL | — | Lender logo 3 | required |
| `lenders.logo_4_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25108_Frame%20427319964.svg` | image URL | — | Lender logo 4 | required |
| `lenders.logo_5_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2510b_Frame%20427319966.svg` | image URL | — | Lender logo 5 | required |
| `lenders.logo_6_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff2510a_Frame%20427319968.svg` | image URL | — | Lender logo 6 | required |
| `lenders.logo_7_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25109_Frame%20427319963.svg` | image URL | — | Lender logo 7 | required |
| `lenders.logo_8_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25107_Frame%20427319969.svg` | image URL | — | Lender logo 8 | required |
| `lenders.group_image_src` | `https://cdn.prod.website-files.com/691cbc389e7f40013ff24efb/691cbc389e7f40013ff25185_Group%203452.png` | image URL | — | Group/team photo below marquee | optional |
| `lenders.group_image_alt` | `Tiger Loans team and partners` | text | 100 chars | Group image alt text | optional |

---

## LOAN TYPES (Purchase + Refinance)

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `loans.purchase_eyebrow` | `Purchase a home` | text | 40 chars | Card 1 eyebrow label | required |
| `loans.purchase_heading` | `Everything to know about buying a home.` | text | 80 chars | Card 1 heading | required |
| `loans.purchase_body` | `Get comprehensive insights into the entire home-buying process, from searching for properties to closing the deal, ensuring you're well-prepared at every step.` | text | 200 chars | Card 1 body | required |
| `loans.purchase_tag_1` | `Tax Filing` | text | 20 chars | Card 1 tag 1 | optional |
| `loans.purchase_tag_2` | `Buying` | text | 20 chars | Card 1 tag 2 | optional |
| `loans.purchase_tag_3` | `Loan Fund` | text | 20 chars | Card 1 tag 3 | optional |
| `loans.purchase_tag_4` | `Selling Houses` | text | 20 chars | Card 1 tag 4 | optional |
| `loans.purchase_tag_5` | `Best Rates` | text | 20 chars | Card 1 tag 5 | optional |
| `loans.purchase_cta_label` | `Get Pre-Approved` | text | 25 chars | Card 1 CTA button | required |
| `loans.purchase_cta_href` | `#contact` | text | — | Card 1 CTA link | required |
| `loans.refi_eyebrow` | `Refinance your mortgage` | text | 40 chars | Card 2 eyebrow label | required |
| `loans.refi_heading` | `Understand the ins and outs of refinancing.` | text | 80 chars | Card 2 heading | required |
| `loans.refi_body` | `Gain a thorough understanding of refinancing, including when to refinance and how it can benefit your financial situation.` | text | 200 chars | Card 2 body | required |
| `loans.refi_tag_1` | `Options` | text | 20 chars | Card 2 tag 1 | optional |
| `loans.refi_tag_2` | `Selling` | text | 20 chars | Card 2 tag 2 | optional |
| `loans.refi_tag_3` | `Loans` | text | 20 chars | Card 2 tag 3 | optional |
| `loans.refi_cta_label` | `Check Rate` | text | 25 chars | Card 2 CTA button | required |
| `loans.refi_cta_href` | `#contact` | text | — | Card 2 CTA link | required |

---

## TEAM SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `team.overline` | `team` | text | 20 chars | Section overline | optional |
| `team.heading` | `Meet Our Mortgage Expert Team` | text | 60 chars | Section H2 | required |
| `team.subheading` | `Our experienced Mortgage Loan Officers, Mortgage Agents, and Mortgage Brokers are here to guide you – find the best expert near you.` | text | 200 chars | Section sub | optional |
| `team.member_1_name` | `Alex Chen` | text | 40 chars | Team member 1 name | required |
| `team.member_1_title` | `Loan Officer` | text | 40 chars | Member 1 job title | required |
| `team.member_1_nmls` | `233900` | text | 20 chars | Member 1 NMLS ID | required |
| `team.member_1_image` | `(Webflow CDN .avif URL)` | image URL | — | Member 1 photo | required |
| `team.member_2_name` | `Rebecca Adcock` | text | 40 chars | Team member 2 name | required |
| `team.member_2_title` | `Loan Officer` | text | 40 chars | Member 2 title | required |
| `team.member_2_nmls` | `1034159` | text | 20 chars | Member 2 NMLS | required |
| `team.member_3_name` | `John Li` | text | 40 chars | Team member 3 name | required |
| `team.member_3_nmls` | `867311` | text | 20 chars | Member 3 NMLS | required |
| `team.member_4_name` | `Linda Qu` | text | 40 chars | Team member 4 name | required |
| `team.member_4_nmls` | `1624935` | text | 20 chars | Member 4 NMLS | required |
| `team.member_5_name` | `Jianfeng Yin` | text | 40 chars | Team member 5 name | required |
| `team.member_5_nmls` | `2243881` | text | 20 chars | Member 5 NMLS | required |
| `team.member_6_name` | `Xueying "Sherry" Li` | text | 40 chars | Team member 6 name | required |
| `team.member_6_nmls` | `1822472` | text | 20 chars | Member 6 NMLS | required |

---

## MORTGAGE CALCULATOR

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `calc.overline` | `CALCULATOR` | text | 20 chars | Section overline | optional |
| `calc.heading` | `Mortgage Financial Calculator` | text | 60 chars | Section H2 | required |
| `calc.subheading` | `Use our mortgage calculator to estimate your monthly payments, interest, and total loan costs—all in just a few clicks! Whether you're purchasing a new home or refinancing your existing loan, this tool gives you the clarity you need to plan confidently.` | text | 300 chars | Section body | optional |
| `calc.cta_label` | `Get Pre-Approved` | text | 25 chars | Post-calculator CTA | optional |
| `calc.cta_href` | `#contact` | text | — | Calculator CTA link | optional |

---

## INTEREST RATES SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `rates.heading` | `National Average Interest Rates` | text | 60 chars | Section H2 | required |
| `rates.subheading` | `Stay Informed with Current Rates: Keep track of the latest national average interest rates to make informed decisions about your mortgage. Understanding current rates can help you assess market trends, compare lenders, and find the best rate for your financial goals.` | text | 300 chars | Section body | optional |
| `rates.cta_label` | `Get in touch` | text | 25 chars | Rates section CTA | optional |
| `rates.cta_href` | `#contact` | text | — | Rates CTA link | optional |

---

## TESTIMONIALS

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `testimonials.overline` | `TESTIMONIALS` | text | 20 chars | Section overline | optional |
| `testimonials.heading` | `Our clients are the foundation of our success.` | text | 80 chars | Section H2 | required |
| `testimonials.t1_quote` | `I had a great experience with Jasmine! She is highly professional, attentive, and genuinely committed to helping her customers. Her effectiveness and dedication made the entire process smooth and hassle-free. I highly recommend her services!` | text | 400 chars | Testimonial 1 quote | required |
| `testimonials.t1_name` | `Eliauk` | text | 40 chars | Testimonial 1 name | required |
| `testimonials.t1_location` | `USA, California` | text | 40 chars | Testimonial 1 location | optional |
| `testimonials.t2_quote` | `It's a great experience working with Tiger Loans for my mortgage. The Loan Officer Howard worked really hard to get the right solution for us and Jianfeng went the extra mile to make sure things got done.` | text | 400 chars | Testimonial 2 quote | required |
| `testimonials.t2_name` | `James Xia` | text | 40 chars | Testimonial 2 name | required |
| `testimonials.t2_location` | `USA, Albuquerque` | text | 40 chars | Testimonial 2 location | optional |
| `testimonials.t3_quote` | `Thank you, Tiger Loan, for a seamless loan process! I had a fantastic experience, with everything running smoothly and on time. The team's responsiveness was impressive, and I am thoroughly impressed with their professionalism.` | text | 400 chars | Testimonial 3 quote | required |
| `testimonials.t3_name` | `Imran Ashraf` | text | 40 chars | Testimonial 3 name | required |
| `testimonials.t3_location` | `USA, Arizona` | text | 40 chars | Testimonial 3 location | optional |

---

## BLOG SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `blog.overline` | `READING` | text | 20 chars | Section overline | optional |
| `blog.heading` | `Our Blogs` | text | 40 chars | Section H2 | required |
| `blog.post_1_category` | `Refinance` | text | 20 chars | Post 1 category tag | required |
| `blog.post_1_title` | `Is It Time to Refinance Your Mortgage? Key Factors to Consider` | text | 100 chars | Post 1 title | required |
| `blog.post_1_author` | `Alex Chen` | text | 40 chars | Post 1 author | required |
| `blog.post_1_date` | `November 8, 2025` | text | 30 chars | Post 1 date | required |
| `blog.post_1_href` | `https://tigerloans.com/blog/refinance-key-factors` | text | — | Post 1 link | required |
| `blog.post_1_image` | `(Webflow CDN .avif URL)` | image URL | — | Post 1 thumbnail | optional |
| `blog.post_2_category` | `Refinance` | text | 20 chars | Post 2 category tag | required |
| `blog.post_2_title` | `Home Equity Loan or Refinance: Making the Right Choice for Your Financial Goals` | text | 100 chars | Post 2 title | required |
| `blog.post_2_author` | `Alex Chen` | text | 40 chars | Post 2 author | required |
| `blog.post_2_date` | `November 7, 2025` | text | 30 chars | Post 2 date | required |
| `blog.post_3_category` | `Refinance` | text | 20 chars | Post 3 category tag | required |
| `blog.post_3_title` | `Understanding Refinancing: How Often Can You Actually Refinance a Mortgage?` | text | 100 chars | Post 3 title | required |
| `blog.post_3_author` | `Alex Chen` | text | 40 chars | Post 3 author | required |
| `blog.post_3_date` | `November 7, 2025` | text | 30 chars | Post 3 date | required |
| `blog.view_all_label` | `Read More` | text | 20 chars | View all blogs CTA | optional |
| `blog.view_all_href` | `https://tigerloans.com/blog` | text | — | View all blogs link | optional |

---

## CONTACT SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `contact.overline` | `GET IN TOUCH` | text | 20 chars | Section overline | optional |
| `contact.heading` | `Contact Our Expert Loan Officer` | text | 60 chars | Section H2 | required |
| `contact.subheading` | `Have questions or need guidance on your mortgage journey? Our dedicated loan officers are here to help you every step of the way. Contact us today to explore your options or ask about your specific needs.` | text | 250 chars | Section body | optional |
| `contact.cta_primary_label` | `Schedule a call` | text | 25 chars | Primary form submit / CTA | required |
| `contact.cta_secondary_label` | `Get a Free Quote` | text | 25 chars | Secondary CTA button | optional |
| `contact.field_name_placeholder` | `Full Name` | text | 30 chars | Form field 1 placeholder | required |
| `contact.field_email_placeholder` | `Email` | text | 30 chars | Form field 2 placeholder | required |
| `contact.field_phone_placeholder` | `Phone number` | text | 30 chars | Form field 3 placeholder | required |
| `contact.eligibility_heading` | `Check If You're Eligible` | text | 50 chars | Eligibility form sub-heading | optional |

---

## FOOTER

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `footer.logo_src` | `(Tiger Loans SVG logo URL)` | image URL | — | Footer logo | required |
| `footer.legal_text` | `Tiger Loans, Inc. is a direct home mortgage lender currently licensed in Arizona, California, Colorado, Florida, Georgia, Idaho, Illinois, Indiana, Maryland, Nevada, North Carolina, Texas, and Washington, and a mortgage broker licensed in Massachusetts (MB1169300) and Virginia.` | text | 400 chars | Legal disclaimer paragraph | required |
| `footer.legal_note` | `We offer competitive rates and closing costs on conventional fixed and adjustable-rate home mortgages as well as government loans such as FHA and VA loans to qualified individuals in the above-licensed states.` | text | 300 chars | Secondary legal note | optional |
| `footer.nmls_id` | `1169300` | text | 20 chars | Company NMLS ID in footer | required |
| `footer.nmls_href` | `https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=1169300` | text | — | NMLS Consumer Access link | required |
| `footer.nav_link_1` | `Home` | text | 20 chars | Footer nav col 1 link 1 | optional |
| `footer.nav_link_2` | `About` | text | 20 chars | Footer nav col 1 link 2 | optional |
| `footer.nav_link_3` | `Contact Us` | text | 20 chars | Footer nav col 1 link 3 | optional |
| `footer.nav_link_4` | `Loans` | text | 20 chars | Footer nav col 1 link 4 | optional |
| `footer.nav_link_5` | `Calculators` | text | 20 chars | Footer nav col 1 link 5 | optional |
| `footer.nav_link_6` | `Blogs` | text | 20 chars | Footer nav col 1 link 6 | optional |
| `footer.loan_type_1` | `15 Year Fixed Mortgage` | text | 40 chars | Footer loan types col link 1 | optional |
| `footer.loan_type_2` | `30 Year Fixed Mortgage` | text | 40 chars | Footer loan types col link 2 | optional |
| `footer.loan_type_3` | `Adjustable Rate Mortgage` | text | 40 chars | Footer loan types col link 3 | optional |
| `footer.loan_type_4` | `Reverse Mortgage` | text | 40 chars | Footer loan types col link 4 | optional |
| `footer.loan_type_5` | `Rehab Loan` | text | 40 chars | Footer loan types col link 5 | optional |
| `footer.loan_type_6` | `USDA Loan` | text | 40 chars | Footer loan types col link 6 | optional |
| `footer.loan_type_7` | `VA Home Loan` | text | 40 chars | Footer loan types col link 7 | optional |
| `footer.loan_type_8` | `FHA Home Loan` | text | 40 chars | Footer loan types col link 8 | optional |
| `footer.loan_type_9` | `Jumbo Home Loan` | text | 40 chars | Footer loan types col link 9 | optional |
| `footer.email_label` | `Email us at:` | text | 30 chars | Contact col email label | optional |
| `footer.email` | `inquiry@tigerloans.com` | text | 60 chars | Contact email address | required |
| `footer.phone_label` | `Or call us at:` | text | 30 chars | Contact col phone label | optional |
| `footer.phone` | `888-800-4151` | text | 20 chars | Contact phone number | required |
| `footer.phone_href` | `tel:+1(888)800-4151` | text | — | Phone link | required |
| `footer.headquarters_label` | `Our Headquarters` | text | 30 chars | Address label | optional |
