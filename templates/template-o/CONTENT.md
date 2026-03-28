# CONTENT.md — Template O: Lead Generation Agency (Local Service Pros)
# Machine-readable content slot map for the BrandBooster UI

---

## POPUP OVERLAY (Lead Capture Form)

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `popup.heading` | `Schedule a Call` | text | 60 chars | Popup modal H2 | required |
| `popup.subheading` | `Schedule a call by filling out the form — we'll get in touch shortly` | text | 150 chars | Popup sub-heading | optional |
| `popup.field_name_placeholder` | `John Smith` | text | 40 chars | Full Name field placeholder | required |
| `popup.field_email_placeholder` | `johndoe@email.com` | text | 40 chars | Email Address field placeholder | required |
| `popup.field_website_placeholder` | `www.company.com` | text | 50 chars | Company Website field placeholder | optional |
| `popup.field_budget_label` | `Monthly Marketing Budget` | text | 50 chars | Budget slider label | optional |
| `popup.field_business_type_label` | `Business Type` | text | 30 chars | Business type dropdown label | optional |
| `popup.field_channels_label` | `Current Marketing Channels` | text | 50 chars | Channels checkbox label | optional |
| `popup.submit_label` | `Book A Free Strategy Call` | text | 40 chars | Submit button text | required |
| `popup.cta_label` | `Yep, I Want More Leads` | text | 40 chars | Primary hero popup-trigger CTA | required |

---

## NAVBAR

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `navbar.logo_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616096_Group%20112.svg` | image URL | — | Navbar logo | required |
| `navbar.logo_alt` | `BrandBooster Logo` | text | 80 chars | Logo alt text | required |
| `navbar.logo_href` | `https://brandbooster.ai/` | text | — | Logo link (home) | required |
| `navbar.nav_link_home` | `Home` | text | 20 chars | First nav link | optional |
| `navbar.nav_link_pricing` | `Pricing` | text | 20 chars | Pricing page nav link | optional |
| `navbar.nav_link_pricing_href` | `https://brandbooster.ai/pricing` | text | — | Pricing link href | optional |
| `navbar.nav_link_about` | `About Us` | text | 20 chars | About page nav link | optional |
| `navbar.nav_link_about_href` | `https://brandbooster.ai/about-us` | text | — | About link href | optional |
| `navbar.nav_link_blog` | `Blogs` | text | 20 chars | Blog nav link | optional |
| `navbar.nav_link_blog_href` | `https://brandbooster.ai/blog` | text | — | Blog link href | optional |
| `navbar.cta_label` | `Contact Us` | text | 25 chars | Top-right CTA button | required |
| `navbar.cta_href` | `https://www.brandbooster.ai/#contact-form-section` | text | — | CTA link target | required |
| `navbar.services_dropdown_label` | `Services` | text | 20 chars | Services dropdown toggle label | optional |
| `navbar.service_1` | `PPC Management Services` | text | 50 chars | Services dropdown item 1 | optional |
| `navbar.service_1_href` | `https://brandbooster.ai/ppc-managment` | text | — | Service 1 link | optional |
| `navbar.service_2` | `Google Ads Agency` | text | 50 chars | Services dropdown item 2 | optional |
| `navbar.service_3` | `Instagram Ads Agency` | text | 50 chars | Services dropdown item 3 | optional |
| `navbar.service_4` | `Facebook Advertising Agency` | text | 50 chars | Services dropdown item 4 | optional |
| `navbar.service_5` | `Shopify Ads Agency` | text | 50 chars | Services dropdown item 5 | optional |
| `navbar.service_6` | `E-Commerce Ads Agency` | text | 50 chars | Services dropdown item 6 | optional |
| `navbar.service_7` | `TikTok Ads Agency` | text | 50 chars | Services dropdown item 7 | optional |
| `navbar.service_8` | `YouTube Advertising` | text | 50 chars | Services dropdown item 8 | optional |
| `navbar.service_9` | `LLM Visibility Services` | text | 50 chars | Services dropdown item 9 (bold) | optional |
| `navbar.service_10` | `SEO Services` | text | 50 chars | Services dropdown item 10 (bold) | optional |
| `navbar.service_11` | `LinkedIn Advertising Agency` | text | 50 chars | Services dropdown item 11 | optional |
| `navbar.service_12` | `Social Media Marketing Services` | text | 50 chars | Services dropdown item 12 | optional |
| `navbar.service_13` | `Email Marketing Services` | text | 50 chars | Services dropdown item 13 | optional |
| `navbar.service_14` | `Short Video Management Services` | text | 50 chars | Services dropdown item 14 | optional |
| `navbar.use_cases_dropdown_label` | `Use Cases` | text | 20 chars | Use Cases dropdown toggle | optional |
| `navbar.use_case_1` | `Franchisors & Franchise` | text | 50 chars | Use Cases item 1 | optional |
| `navbar.use_case_2` | `Jewelers` | text | 50 chars | Use Cases item 2 | optional |
| `navbar.use_case_3` | `Roofers` | text | 50 chars | Use Cases item 3 | optional |

---

## HERO SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `hero.badge_text` | `436 SMBs` | text | 20 chars | Star-badge trust label beside the star icon | required |
| `hero.heading_main` | `#1 Lead Generation Agency For` | text | 60 chars | H1 main line (white text) | required |
| `hero.heading_accent` | `Growing Businesses` | text | 60 chars | H1 gradient-colored accent span | required |
| `hero.subheading_prefix` | `Drive growth for` | text | 40 chars | Typed sub-heading prefix text | required |
| `hero.subheading_suffix` | `with consistent leads, real conversions, not just traffic.` | text | 100 chars | Typed sub-heading suffix text | required |
| `hero.typed_strings` | `["SaaS founders","Doctors","Roofers","Lawyers","Plumbers","Counsellors","Electricians","Home service","Software firms","Real estate owners"]` | JSON array | — | Rotating business categories in the typed animation | required |
| `hero.cta_label` | `Yep, I Want More Leads` | text | 40 chars | Primary CTA button (opens popup) | required |
| `hero.trust_stat_value` | `23,000+` | text | 15 chars | Hero trust banner stat number | required |
| `hero.trust_stat_label` | `Booked Calls & Leads Generated` | text | 60 chars | Hero trust banner stat label | required |
| `hero.trust_banner_image` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade6161a6_...Group-p-500.avif` | image URL | — | Avatar group image in trust banner | optional |
| `hero.trust_banner_image_alt` | `BrandBooster clients group` | text | 100 chars | Avatar group image alt text | optional |
| `hero.media_logos_heading` | `Featured In Top Media Outlets` | text | 60 chars | Heading above the media logos marquee | optional |
| `hero.media_logo_1_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade61624b_Frame%2010.avif` | image URL | — | Media logo 1 | optional |
| `hero.media_logo_1_alt` | `Media outlet logo` | text | 60 chars | Media logo 1 alt text | optional |

---

## AWARDS CAROUSEL

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `awards.badge_1_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade61634c_Frame%206.avif` | image URL | — | Titan Awards badge image | required |
| `awards.badge_1_alt` | `Titan Awards logo featuring a stylized Moai statue head and the text 'TITAN AWARDS'.` | text | 150 chars | Badge 1 alt text | required |
| `awards.badge_2_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616347_awards-1.avif` | image URL | — | Capterra Best Ease of Use 2024 badge | required |
| `awards.badge_2_alt` | `Capterra Best Ease of Use 2024 award badge in blue shield design.` | text | 150 chars | Badge 2 alt text | required |
| `awards.badge_3_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616346_awards.avif` | image URL | — | Stevie Winner bronze badge | required |
| `awards.badge_3_alt` | `Bronze 2025 Stevie Winner laurel with a figure holding a blue triangular trophy, International Business Awards.` | text | 150 chars | Badge 3 alt text | required |
| `awards.badge_4_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616345_awards-3.avif` | image URL | — | Software Advice Most Recommended 2024 | required |
| `awards.badge_4_alt` | `Software Advice badge with text Most Recommended 2024 in white and orange on a purple hexagonal background.` | text | 150 chars | Badge 4 alt text | required |
| `awards.badge_5_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616344_awards-6.avif` | image URL | — | Software Suggest Reviewed On badge | required |
| `awards.badge_5_alt` | `Blue shield badge with light blue ribbon reading Software Suggest, with text Reviewed On above and five yellow stars below.` | text | 150 chars | Badge 5 alt text | required |
| `awards.badge_6_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616343_awards-5.avif` | image URL | — | GetApp Best Functionality & Features 2024 | required |
| `awards.badge_6_alt` | `GetApp award badge for Best Functionality & Features 2024 in a diamond shape.` | text | 150 chars | Badge 6 alt text | required |
| `awards.badge_7_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616355_awards2.avif` | image URL | — | Capterra Best Ease of Use 2024 (2nd instance) | required |
| `awards.badge_7_alt` | `Capterra Best Ease of Use 2024 award badge in blue shield shape.` | text | 150 chars | Badge 7 alt text | required |
| `awards.badge_8_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade61634a_awards.avif` | image URL | — | NVIDIA Inception Program badge | required |
| `awards.badge_8_alt` | `NVIDIA logo with green eye symbol and text 'NVIDIA Inception Program' on black background.` | text | 150 chars | Badge 8 alt text | required |

---

## STATS SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `stats.heading` | `Real Leads. Real Clients. Real Numbers.` | text | 80 chars | Section H2 | required |
| `stats.stat_1_value` | `45.7` | number | — | Stat 1 count-up target value | required |
| `stats.stat_1_suffix` | `%` | text | 5 chars | Stat 1 suffix (gradient colored) | required |
| `stats.stat_1_label` | `Reductions in CAC` | text | 40 chars | Stat 1 description label | required |
| `stats.stat_1_icon` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade6161ca_Sparkles%20Icon.webp` | image URL | — | Stat 1 icon | optional |
| `stats.stat_2_value` | `55` | number | — | Stat 2 count-up target value | required |
| `stats.stat_2_suffix` | `%` | text | 5 chars | Stat 2 suffix | required |
| `stats.stat_2_label` | `Increase in ROAS` | text | 40 chars | Stat 2 description label | required |
| `stats.stat_2_icon` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616047_Feature%20Icon%2001.webp` | image URL | — | Stat 2 icon | optional |
| `stats.stat_3_value` | `20` | number | — | Stat 3 count-up target value | required |
| `stats.stat_3_suffix` | `K+` | text | 5 chars | Stat 3 suffix | required |
| `stats.stat_3_label` | `Campaigns Managed` | text | 40 chars | Stat 3 description label | required |
| `stats.stat_3_icon` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616046_Feature%20Icon%2002.webp` | image URL | — | Stat 3 icon | optional |
| `stats.stat_4_value` | `5600` | number | — | Stat 4 count-up target value | required |
| `stats.stat_4_suffix` | `+` | text | 5 chars | Stat 4 suffix | required |
| `stats.stat_4_label` | `ADs Generated` | text | 40 chars | Stat 4 description label | required |
| `stats.stat_4_icon` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade6161a8_Brief%20Icon.webp` | image URL | — | Stat 4 icon | optional |

---

## INDUSTRIES SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `industries.overline` | `Industries We Serve` | text | 40 chars | Section overline badge | optional |
| `industries.heading` | `Real Clients. Real Results. Real ROI.` | text | 80 chars | Section H2 | required |
| `industries.subheading` | `Our lead generation services are designed for service-based professionals who need predictable growth` | text | 200 chars | Section body | optional |
| `industries.tag_1` | `Lawyers` | text | 30 chars | Industry tag 1 | required |
| `industries.tag_2` | `Plumbers` | text | 30 chars | Industry tag 2 | required |
| `industries.tag_3` | `Roofers` | text | 30 chars | Industry tag 3 | required |
| `industries.tag_4` | `Contractors` | text | 30 chars | Industry tag 4 | required |
| `industries.tag_5` | `Dentists` | text | 30 chars | Industry tag 5 | required |
| `industries.tag_6` | `Electricians` | text | 30 chars | Industry tag 6 | required |
| `industries.tag_7` | `Real Estate` | text | 30 chars | Industry tag 7 | optional |
| `industries.tag_8` | `Franchisors` | text | 30 chars | Industry tag 8 | optional |

---

## CLIENT RESULTS SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `results.client_1_name` | `Patrik Findaro` | text | 50 chars | Featured client name | required |
| `results.client_1_title` | `Founder, Visa Franchise` | text | 60 chars | Featured client title/company | required |
| `results.client_1_quote` | `BrandBooster provided us with the guidance we needed to select the optimal budget, strategy, and marketing channels, helping us improve our ROAS in under 90 days` | text | 300 chars | Featured client testimonial quote | required |
| `results.client_1_image` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade61631e_patrick-findaro-visa-franchise-square.avif` | image URL | — | Featured client avatar | required |
| `results.client_1_video` | `https://ik.imagekit.io/97e7lsj9i/01_Patrick%20FInal-2.mp4` | video URL | — | Client testimonial video | optional |
| `results.metric_1_value` | `+122%` | text | 10 chars | Result metric 1 big number | required |
| `results.metric_1_label` | `leads in 3 weeks` | text | 40 chars | Result metric 1 description | required |
| `results.metric_2_value` | `2x` | text | 10 chars | Result metric 2 big number | required |
| `results.metric_2_label` | `Lower Cost Per Lead` | text | 40 chars | Result metric 2 description | required |
| `results.metric_3_value` | `45%` | text | 10 chars | Result metric 3 big number | required |
| `results.metric_3_label` | `ROI Improvement in Business` | text | 40 chars | Result metric 3 description | required |
| `results.metric_4_value` | `89%` | text | 10 chars | Result metric 4 big number | required |
| `results.metric_4_label` | `Client Satisfaction` | text | 40 chars | Result metric 4 description | required |

---

## PROCESS SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `process.overline` | `Our Process` | text | 20 chars | Section overline badge | optional |
| `process.heading` | `Our 3-Step Lead Gen Process` | text | 60 chars | Section H2 | required |
| `process.subheading` | `We keep it simple - no long audits or endless strategy decks. Just three focused steps to take you from zero to a predictable lead pipeline.` | text | 200 chars | Section body paragraph | optional |
| `process.cta_label` | `Book A Free Call` | text | 25 chars | Process section CTA (opens popup) | optional |
| `process.step_1_title` | `1. Free Lead Audit (2 Weeks)` | text | 60 chars | Step 1 heading | required |
| `process.step_1_body` | `We review your current marketing, uncover wasted ad spend, and find hidden opportunities for better lead generation.` | text | 200 chars | Step 1 description | required |
| `process.step_2_title` | `2. Content That Sells, Not Just Shows` | text | 60 chars | Step 2 heading | required |
| `process.step_2_body` | `We create ads, visuals, and messaging designed to get booked calls for lawyers, plumbers, contractors, and other local businesses.` | text | 200 chars | Step 2 description | required |
| `process.step_3_title` | `3. Launch + Optimization` | text | 60 chars | Step 3 heading | required |
| `process.step_3_body` | `We track every click, call, and form submission - then optimize weekly to scale what works. No waiting 6 months. Just fast, measurable lead generation service results.` | text | 250 chars | Step 3 description | required |

---

## PRICING SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `pricing.overline` | `Affordable Pricing` | text | 30 chars | Section overline badge | optional |
| `pricing.heading` | `Open to Value Based Partnership` | text | 60 chars | Section H2 | required |
| `pricing.heading_accent` | `Open to Value Based  Partnership` | text | 60 chars | Section H2 gradient accent span | required |
| `pricing.subheading` | `Empowering your growth with smarter, data-backed strategies. BrandBooster provides the roadmap to dominate your market` | text | 200 chars | Section body paragraph | optional |
| `pricing.silver_name` | `Silver Plan` | text | 30 chars | Plan 1 name | required |
| `pricing.silver_subtitle` | `For mid size & SMBs ready to turn on predictable Google Ads leads.` | text | 100 chars | Plan 1 subtitle | required |
| `pricing.silver_price` | `$700` | text | 10 chars | Plan 1 price display | required |
| `pricing.silver_price_period` | `/mo` | text | 10 chars | Plan 1 price period | required |
| `pricing.silver_cta_label` | `Get Started` | text | 25 chars | Plan 1 CTA button | required |
| `pricing.silver_bonus_offer` | `$500 Google Ads Credit (if eligible)` | text | 80 chars | Plan 1 bonus offer banner text | optional |
| `pricing.silver_feature_group_1_title` | `Platforms & Setup` | text | 40 chars | Plan 1 group 1 title | required |
| `pricing.silver_feature_1_1` | `Google Search + Display Network` | text | 60 chars | Plan 1 group 1 item 1 | required |
| `pricing.silver_feature_1_2` | `Bing PPC Networks ($150/mo)` | text | 60 chars | Plan 1 group 1 item 2 | required |
| `pricing.silver_feature_1_3` | `YouTube Ads` | text | 60 chars | Plan 1 group 1 item 3 | required |
| `pricing.silver_feature_group_2_title` | `Management` | text | 40 chars | Plan 1 group 2 title | required |
| `pricing.silver_feature_2_1` | `Google Ads Campaign Strategy & Launch` | text | 60 chars | Plan 1 group 2 item 1 | required |
| `pricing.silver_feature_2_2` | `Google Ads Keyword Research & Optimization` | text | 60 chars | Plan 1 group 2 item 2 | required |
| `pricing.silver_feature_2_3` | `Dynamic Keyword Insertion` | text | 60 chars | Plan 1 group 2 item 3 | required |
| `pricing.silver_feature_2_4` | `Google Ads Geo-Targeting & Exclusions` | text | 60 chars | Plan 1 group 2 item 4 | required |
| `pricing.silver_feature_2_5` | `Google Ads Rule-Based Bid Automation` | text | 60 chars | Plan 1 group 2 item 5 | required |
| `pricing.silver_feature_group_3_title` | `Data & Support` | text | 40 chars | Plan 1 group 3 title | required |
| `pricing.silver_feature_3_1` | `Google Ads Search Retargeting` | text | 60 chars | Plan 1 group 3 item 1 | required |
| `pricing.silver_feature_3_2` | `Google Ads Conversion Tracking` | text | 60 chars | Plan 1 group 3 item 2 | required |
| `pricing.silver_feature_3_3` | `Google Ads Performance Reporting` | text | 60 chars | Plan 1 group 3 item 3 | required |
| `pricing.silver_feature_3_4` | `Dedicated Account Manager` | text | 60 chars | Plan 1 group 3 item 4 | required |
| `pricing.silver_feature_3_5` | `2 Strategy Hours / Month` | text | 60 chars | Plan 1 group 3 item 5 | required |
| `pricing.silver_addon_1_name` | `Social Media Posts` | text | 40 chars | Plan 1 add-on 1 name | optional |
| `pricing.silver_addon_1_price` | `$200` | text | 10 chars | Plan 1 add-on 1 price | optional |
| `pricing.silver_addon_2_name` | `AI Voice Receptionist/Sales` | text | 40 chars | Plan 1 add-on 2 name | optional |
| `pricing.silver_addon_2_price` | `$300` | text | 10 chars | Plan 1 add-on 2 price | optional |
| `pricing.silver_addon_3_name` | `SEO Optimization` | text | 40 chars | Plan 1 add-on 3 name | optional |
| `pricing.silver_addon_3_price` | `$500` | text | 10 chars | Plan 1 add-on 3 price | optional |
| `pricing.gold_name` | `Gold Plan` | text | 30 chars | Plan 2 name | required |
| `pricing.gold_subtitle` | `For growing businesses scaling Google Ads with precision.` | text | 100 chars | Plan 2 subtitle | required |
| `pricing.gold_price` | `$1,200` | text | 10 chars | Plan 2 price display | required |
| `pricing.gold_price_period` | `/mo` | text | 10 chars | Plan 2 price period | required |
| `pricing.gold_cta_label` | `Get Started` | text | 25 chars | Plan 2 CTA button | required |
| `pricing.gold_feature_group_1_title` | `Platforms Supported & Setup` | text | 40 chars | Plan 2 group 1 title | required |
| `pricing.gold_feature_1_1` | `Everything from the Silver Package` | text | 60 chars | Plan 2 group 1 item 1 | required |
| `pricing.gold_feature_1_2` | `Facebook Ads` | text | 60 chars | Plan 2 group 1 item 2 (platform icon) | required |
| `pricing.gold_feature_1_3` | `Instagram Ads` | text | 60 chars | Plan 2 group 1 item 3 (platform icon) | required |
| `pricing.gold_feature_group_2_title` | `Creatives & Ad Production` | text | 40 chars | Plan 2 group 2 title | required |
| `pricing.gold_feature_2_1` | `Advanced Google Ads Buyer-Intent Targeting` | text | 60 chars | Plan 2 group 2 item 1 | required |
| `pricing.gold_feature_2_2` | `AI-Optimized Google Ads Bid Management` | text | 60 chars | Plan 2 group 2 item 2 | required |
| `pricing.gold_feature_2_3` | `High-Velocity Google Ads Creative Testing` | text | 60 chars | Plan 2 group 2 item 3 | required |
| `pricing.gold_feature_2_4` | `Weekly Optimization Cycles` | text | 60 chars | Plan 2 group 2 item 4 | required |
| `pricing.gold_feature_group_3_title` | `Reporting & Support` | text | 40 chars | Plan 2 group 3 title | required |
| `pricing.gold_feature_3_1` | `Google Ads Retargeting` | text | 60 chars | Plan 2 group 3 item 1 | required |
| `pricing.gold_feature_3_2` | `YouTube Funnel Alignment` | text | 60 chars | Plan 2 group 3 item 2 | required |
| `pricing.gold_feature_3_3` | `Google Ads Attribution Models` | text | 60 chars | Plan 2 group 3 item 3 | required |

---

## CONTACT SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `contact.overline` | `Contact Us` | text | 20 chars | Section overline badge | optional |
| `contact.heading` | `Lets create impact` | text | 60 chars | Section H2 | required |
| `contact.subheading` | `Schedule a call by filling out the form — we'll get in touch shortly` | text | 150 chars | Section body | optional |
| `contact.field_name_label` | `Full Name` | text | 30 chars | Form field 1 label | required |
| `contact.field_name_placeholder` | `John Smith` | text | 40 chars | Form field 1 placeholder | required |
| `contact.field_email_label` | `Email Address` | text | 30 chars | Form field 2 label | required |
| `contact.field_email_placeholder` | `johndoe@email.com` | text | 40 chars | Form field 2 placeholder | required |
| `contact.field_website_label` | `Company Website (If Any)` | text | 40 chars | Form field 3 label | optional |
| `contact.field_website_placeholder` | `www.company.com` | text | 50 chars | Form field 3 placeholder | optional |
| `contact.field_budget_label` | `Monthly Marketing Budget` | text | 50 chars | Budget slider label | optional |
| `contact.field_business_type_label` | `Business Type` | text | 30 chars | Business type dropdown label | optional |
| `contact.field_channels_label` | `Current Marketing Channels` | text | 50 chars | Channels checkbox group label | optional |
| `contact.submit_label` | `Schedule a call` | text | 30 chars | Form submit button | required |
| `contact.success_message` | `Thank you! Your submission has been received!` | text | 100 chars | Form success state message | required |
| `contact.error_message` | `Ooops! Something went wrong.` | text | 80 chars | Form error state message | required |

---

## FAQ SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `faq.heading` | `Frequently Asked Questions` | text | 60 chars | Section H2 | required |
| `faq.q1` | `Why should I hire a lead generation agency?` | text | 150 chars | FAQ 1 question | required |
| `faq.a1` | `A lead generation agency brings expertise, tools, and strategy to consistently get you leads so you don't waste time or money figuring it out yourself. They help you scale faster and get more predictable results.` | text | 400 chars | FAQ 1 answer | required |
| `faq.q2` | `What types of businesses benefit from local lead generation?` | text | 150 chars | FAQ 2 question | required |
| `faq.a2` | `Local lead generation works best for service-based businesses like lawyers, plumbers, roofers, realtors, dentists, and contractors. If your customers are searching in your city or region, lead gen can help you dominate your local market.` | text | 400 chars | FAQ 2 answer | required |
| `faq.q3` | `What channels do lead generation services use?` | text | 150 chars | FAQ 3 question | required |
| `faq.a3` | `Top agencies use a mix of paid ads (Google, Meta, YouTube), SEO, landing pages, retargeting, and marketing automation. The goal isn't just leads - it's consistent, high-intent leads that convert.` | text | 400 chars | FAQ 3 answer | required |
| `faq.q4` | `Is lead generation expensive for small businesses?` | text | 150 chars | FAQ 4 question | required |
| `faq.a4` | `Not necessarily. With the right strategy, lead generation can be cost-effective and deliver strong ROI. A good agency builds campaigns tailored to your budget and growth goals.` | text | 400 chars | FAQ 4 answer | required |
| `faq.q5` | `What are lead generation services?` | text | 150 chars | FAQ 5 question | required |
| `faq.a5` | `Lead generation services help businesses attract and convert potential customers (leads) into real sales opportunities. These services often use targeted ads, landing pages, and proven funnels to bring qualified leads directly to your business.` | text | 400 chars | FAQ 5 answer | required |
| `faq.q6` | `How is a lead generation company different from running ads myself?` | text | 150 chars | FAQ 6 question | required |
| `faq.a6` | `Lead generation companies focus on full-funnel strategy - not just clicks. While running ads gets you traffic, a professional agency builds systems that turn traffic into booked calls, clients, and revenue.` | text | 400 chars | FAQ 6 answer | required |
| `faq.q7` | `How quickly can I expect results from a lead gen agency?` | text | 150 chars | FAQ 7 question | required |
| `faq.a7` | `Most clients see initial lead flow within the first 2–4 weeks after campaign launch. Significant ROI improvements typically appear within 60–90 days as campaigns are optimized.` | text | 400 chars | FAQ 7 answer | required |
| `faq.q8` | `Do you work with businesses outside the US?` | text | 150 chars | FAQ 8 question | optional |
| `faq.a8` | `We primarily serve US-based local service businesses, but we do work with select international clients on a case-by-case basis.` | text | 400 chars | FAQ 8 answer | optional |

---

## FOOTER

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `footer.logo_src` | `https://cdn.prod.website-files.com/690efe96164399fade616019/690efe96164399fade616096_Group%20112.svg` | image URL | — | Footer logo | required |
| `footer.logo_alt` | `BrandBooster Logo` | text | 80 chars | Footer logo alt text | required |
| `footer.address` | `Boston – Massachusetts  01420` | text | 80 chars | Company address in footer | optional |
| `footer.phone` | `(415) 000-000` | text | 20 chars | Contact phone number | optional |
| `footer.phone_href` | `tel:(415)931-1616` | text | — | Phone link | optional |
| `footer.email` | `support@brandbooster.ai` | text | 60 chars | Contact email address | required |
| `footer.email_href` | `mailto:support@brandbooster.ai` | text | — | Email link | required |
| `footer.instagram_href` | `https://www.instagram.com/brandbooster.ai` | text | — | Instagram social link | optional |
| `footer.linkedin_href` | `https://www.linkedin.com/company/brandbooster-ai/` | text | — | LinkedIn social link | optional |
| `footer.service_col_heading` | `Services` | text | 30 chars | Services footer column heading | optional |
| `footer.service_1` | `PPC Management Services` | text | 50 chars | Footer services link 1 | optional |
| `footer.service_1_href` | `https://brandbooster.ai/ppc-managment` | text | — | Services link 1 href | optional |
| `footer.service_2` | `Google Ads Agency` | text | 50 chars | Footer services link 2 | optional |
| `footer.service_3` | `Social Media Marketing` | text | 50 chars | Footer services link 3 | optional |
| `footer.use_cases_col_heading` | `Use Cases` | text | 30 chars | Use Cases footer column heading | optional |
| `footer.use_case_1` | `Franchisors & Franchise` | text | 50 chars | Use case link 1 | optional |
| `footer.use_case_2` | `Jewelers` | text | 50 chars | Use case link 2 | optional |
| `footer.use_case_3` | `Roofers` | text | 50 chars | Use case link 3 | optional |
| `footer.solutions_col_heading` | `Solutions` | text | 30 chars | Solutions footer column heading | optional |
| `footer.solution_1` | `AI Copywrite` | text | 40 chars | Solutions link 1 | optional |
| `footer.solution_2` | `Automated Blogs` | text | 40 chars | Solutions link 2 (with "New" badge) | optional |
| `footer.solution_3` | `Generative UI` | text | 40 chars | Solutions link 3 | optional |
| `footer.solution_4` | `Integrations` | text | 40 chars | Solutions link 4 | optional |
| `footer.newsletter_heading` | `Join our newsletter` | text | 40 chars | Newsletter sign-up section heading | optional |
| `footer.newsletter_placeholder` | `john@brandboost.com` | text | 40 chars | Newsletter email input placeholder | optional |
| `footer.newsletter_submit_label` | `Get Started` | text | 25 chars | Newsletter submit button | optional |
| `footer.legal_text` | `© 2026 All Rights Reserved by 88 Ventures US, LLC Headquartered at 903 Edgemeer Ln, Southlake, TX 760922, USA` | text | 200 chars | Footer legal/copyright line | required |
