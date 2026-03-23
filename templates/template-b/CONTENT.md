# CONTENT.md — Template B: Light Clean

All replaceable content slots. Format: SlotID | Current value | Type | Required

## Navbar
- nav.logo_src | SympleTax logo URL | image URL | required
- nav.logo_alt | "SympleTax" | text | required
- nav.phone | "+1 (949) 287-3015" | tel string | required
- nav.cta_text | "Free Consultation" | text ≤20 chars | required
- nav.links | ["Home","About Us","Solutions","Resources","Contact"] | string[] | required

## Hero
- hero.bg_image | handshake Unsplash URL | image URL | required
- hero.avatar_1 | Unsplash headshot URL | image URL | optional
- hero.avatar_2 | Unsplash headshot URL | image URL | optional
- hero.avatar_3 | Unsplash headshot URL | image URL | optional
- hero.social_proof_count | "2,400+" | text | required
- hero.social_proof_label | "Satisfied Clients" | text | required
- hero.headline_line1 | "Get the IRS" | text | required
- hero.headline_line2 | "Off Your Back —" | text | required
- hero.headline_accent | "For Good." | text (renders in accent color) | required
- hero.subtext | "Licensed tax professionals who negotiate directly with the IRS..." | text ≤120 chars | required
- hero.cta_primary | "Get Free Consultation" | text ≤25 chars | required
- hero.cta_ghost | "See How It Works" | text ≤20 chars | optional
- hero.badge_text | "IRS-Enrolled Agents · Nationwide" | text | required
- hero.stat_value | "98%" | text | required
- hero.stat_label | "Client Satisfaction" | text | required
- hero.review_quote | "Saved $74K on my IRS debt" | text ≤40 chars | required
- hero.review_author | "Maria S. · Los Angeles, CA" | text | required

## Trust Bar (4 items)
- trust.1.title | "Licensed CPAs & Enrolled Agents" | text | required
- trust.1.sub | "IRS-authorized professionals on every case" | text ≤50 chars | required
- trust.2.title | "Free Consultation" | text | required
- trust.2.sub | "No obligation. No pressure. Just answers." | text ≤50 chars | required
- trust.3.title | "Confidential & Secure" | text | required
- trust.3.sub | "Your information is never shared or sold" | text ≤50 chars | required
- trust.4.title | "4.8 Stars on Google & BBB" | text | required
- trust.4.sub | "2,201 verified client reviews" | text ≤50 chars | required

## Problems Grid (6 cards)
For each card n (1–6):
- problems.n.title | e.g. "Tax Liens" | text ≤25 chars | required
- problems.n.desc | e.g. "Blocking your credit..." | text ≤60 chars | required
- problems.n.img | Unsplash URL | image URL | required

## CTA Section
- cta.label | "FREE CONSULTATION" | text uppercase | required
- cta.headline_1 | "Stop Dealing" | text | required
- cta.headline_2 | "with the IRS" | text | required
- cta.headline_accent | "Alone." | text in accent color | required
- cta.subtext | "Over 2,400 clients have resolved..." | text ≤120 chars | required
- cta.trust_1 | "100% Confidential" | text | required
- cta.trust_2 | "24-Hour Response" | text | required
- cta.trust_3 | "No Upfront Fees" | text | required
- cta.phone | "(949) 287-3015" | tel | required
- cta.form_title | "Get Your Free Case Review" | text | required
- cta.form_subtitle | "See what your resolution options look like — for free." | text | required
- cta.form_dropdown_options | ["IRS Back Taxes / Balance Due", ...] | string[] | required
- cta.submit_text | "Get My Free Consultation" | text ≤30 chars | required
- cta.disclaimer | "No credit card. No commitment. Just answers." | text | required

## Footer
- footer.tagline | "SympleTax helps individuals and businesses resolve IRS debt..." | text ≤80 chars | required
- footer.location | "Irvine, California\nUnited States" | text | required
- footer.phone | "(949) 287-3015" | tel | required
- footer.email | "info@sympletax.com" | email | required
- footer.brand_watermark | "SympleTax" | text (large bg watermark) | required
- footer.copyright | "© 2026 SympleTax. All Rights Reserved." | text | required
