# CONTENT.md — Template L: B2B SaaS Cloud
# Machine-readable content slot map for the Platform UI

---

## NAVBAR

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `navbar.logo_src` | `https://cdn.prod.website-files.com/696af2fc0ed703e7710c72fd/697195d684abf77438e7c2c4_Frame%202147258922.png` | image URL | — | Navbar logo | required |
| `navbar.logo_alt` | `MaxMyCloud Logo` | text | 80 chars | Logo alt text | required |
| `navbar.cta_label` | `Start free trial` | text | 20 chars | Navbar CTA button | required |
| `navbar.cta_href` | `#contact` | text | — | Navbar CTA link | required |
| `navbar.link_1` | `Home` | text | 20 chars | Nav link 1 | optional |
| `navbar.link_2` | `Features` | text | 20 chars | Nav link 2 | optional |
| `navbar.link_3` | `Product` | text | 20 chars | Nav link 3 | optional |
| `navbar.link_4` | `Pricing` | text | 20 chars | Nav link 4 | optional |
| `navbar.link_5` | `Calculator` | text | 20 chars | Nav link 5 | optional |
| `navbar.link_6` | `Integration` | text | 20 chars | Nav link 6 | optional |
| `navbar.link_7` | `Contact Us` | text | 20 chars | Nav link 7 | optional |

---

## HERO

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `hero.badge` | `Snowflake Cost Reduction` | text | 40 chars | Hero badge | optional |
| `hero.heading` | `Snowflake Cost Control for Modern Data Teams` | text | 80 chars | Hero H1 | required |
| `hero.subheading` | `We specialize in Snowflake cost optimization, helping teams reduce cloud data warehouse spend without sacrificing performance.` | text | 160 chars | Hero sub | required |
| `hero.cta_primary_label` | `Start free trial` | text | 25 chars | Primary CTA | required |
| `hero.cta_primary_href` | `#contact` | text | — | Primary CTA link | required |
| `hero.cta_secondary_label` | `Book a Demo` | text | 25 chars | Secondary CTA | optional |
| `hero.cta_secondary_href` | `#contact` | text | — | Secondary CTA link | optional |
| `hero.dashboard_image` | `https://cdn.prod.website-files.com/696af2fc0ed703e7710c72fd/696c4bf4a51433bf2ddf9e24_Dashboard%20Image.png` | image URL | — | Hero dashboard screenshot | required |
| `hero.dashboard_alt` | `MaxMyCloud Snowflake optimization dashboard` | text | 100 chars | Dashboard alt | required |

---

## HOW IT WORKS

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `howitworks.overline` | `Built for Security, Scale, and Control` | text | 50 chars | Section overline | optional |
| `howitworks.heading` | `How MaxMyCloud works for you` | text | 60 chars | Section H2 | required |
| `howitworks.subheading` | `We help you gain control over Snowflake costs through a simple, secure workflow.` | text | 150 chars | Section sub | optional |
| `howitworks.step_1_number` | `1` | text | 2 chars | Step 1 number badge | required |
| `howitworks.step_1_title` | `Connect` | text | 30 chars | Step 1 title | required |
| `howitworks.step_1_body` | `Securely connect your Snowflake account in minutes with read-only access — no data movement and zero performance impact.` | text | 200 chars | Step 1 body | required |
| `howitworks.step_2_title` | `Analyze` | text | 30 chars | Step 2 title | required |
| `howitworks.step_2_body` | `We analyze your Snowflake usage and workloads to uncover inefficiencies, idle compute, and hidden cost drivers.` | text | 200 chars | Step 2 body | required |
| `howitworks.step_3_title` | `Optimize` | text | 30 chars | Step 3 title | required |
| `howitworks.step_3_body` | `Apply clear recommendations and automation to reduce waste, improve efficiency, and lower Snowflake costs.` | text | 200 chars | Step 3 body | required |

---

## FEATURES

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `features.overline` | `Platform Capabilities` | text | 40 chars | Section overline | optional |
| `features.heading` | `Snowflake Clarity That Scales` | text | 60 chars | Section H2 | required |
| `features.subheading` | `We help teams reduce Snowflake costs by identifying inefficiencies and optimizing usage.` | text | 150 chars | Section sub | optional |
| `features.f1_title` | `Cost Analysis & Audit` | text | 50 chars | Feature 1 | required |
| `features.f1_body` | `Deep dive into your Snowflake usage patterns to identify cost optimization opportunities.` | text | 180 chars | Feature 1 body | required |
| `features.f2_title` | `Query Optimization` | text | 50 chars | Feature 2 | required |
| `features.f2_body` | `Optimize your SQL queries and data models to reduce compute costs while improving performance.` | text | 180 chars | Feature 2 body | required |
| `features.f3_title` | `Storage Optimization` | text | 50 chars | Feature 3 | required |
| `features.f3_body` | `Optimize data storage strategies, implement data lifecycle policies, and reduce unnecessary retention.` | text | 180 chars | Feature 3 body | required |
| `features.f4_title` | `Auto-Scaling Policies` | text | 50 chars | Feature 4 | required |
| `features.f4_body` | `Implement intelligent auto-scaling policies to automatically adjust resources based on demand.` | text | 180 chars | Feature 4 body | required |
| `features.f5_title` | `Ongoing Monitoring` | text | 50 chars | Feature 5 | required |
| `features.f5_body` | `Continuous monitoring and alerting to prevent cost overruns and maintain optimal performance.` | text | 180 chars | Feature 5 body | required |
| `features.f6_title` | `Security by Design` | text | 50 chars | Feature 6 | required |
| `features.f6_body` | `Read-only access with enterprise-grade security. Your data never leaves Snowflake at any point.` | text | 180 chars | Feature 6 body | required |

---

## SECURITY SECTION

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `security.overline` | `Security First` | text | 30 chars | Section overline | optional |
| `security.heading` | `Enterprise-Grade Security by Design` | text | 60 chars | Section H2 | required |
| `security.subheading` | `MaxMyCloud utilizes a read-only connection to access metadata like query history and warehouse metrics. We never touch your business data.` | text | 200 chars | Section sub | required |
| `security.image` | `https://cdn.prod.website-files.com/696af2fc0ed703e7710c72fd/696af2fe0ed703e7710c74b8_access-image.jpg` | image URL | — | Section image | required |
| `security.p1_title` | `Read-Only Access` | text | 40 chars | Point 1 title | required |
| `security.p1_body` | `We never touch your business data or proprietary tables.` | text | 150 chars | Point 1 body | required |
| `security.p2_title` | `Your Data Stays in Snowflake` | text | 40 chars | Point 2 title | required |
| `security.p2_body` | `No data is copied, moved, or stored outside your account.` | text | 150 chars | Point 2 body | required |
| `security.p3_title` | `Instant Access Revocation` | text | 40 chars | Point 3 title | required |
| `security.p3_body` | `Disconnect at any time with a single click.` | text | 150 chars | Point 3 body | required |

---

## WHY US

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `whyus.overline` | `Why MaxMyCloud` | text | 30 chars | Section overline | optional |
| `whyus.heading` | `The platform built around real savings` | text | 60 chars | Section H2 | required |
| `whyus.subheading` | `Every feature delivers measurable cost reductions without compromise on performance, security, or control.` | text | 150 chars | Section sub | optional |
| `whyus.item_1_title` | `Automated Optimization` | text | 40 chars | Item 1 title | required |
| `whyus.item_1_body` | `Continuously monitors Snowflake usage and applies cost-saving optimizations automatically.` | text | 180 chars | Item 1 body | required |
| `whyus.item_2_title` | `Guaranteed Savings` | text | 40 chars | Item 2 title | required |
| `whyus.item_2_body` | `Cut your Snowflake cloud spend by at least 20% or you don't pay.` | text | 180 chars | Item 2 body | required |
| `whyus.item_3_title` | `No Performance Impact` | text | 40 chars | Item 3 title | required |
| `whyus.item_3_body` | `All optimizations maintain or improve query performance — zero disruption.` | text | 180 chars | Item 3 body | required |
| `whyus.item_4_title` | `Expert Support` | text | 40 chars | Item 4 title | required |
| `whyus.item_4_body` | `Get access to Snowflake and FinOps experts whenever you need help.` | text | 180 chars | Item 4 body | required |

---

## INTEGRATIONS

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `integrations.overline` | `Integrations` | text | 30 chars | Section overline | optional |
| `integrations.heading` | `Connect your data ecosystem` | text | 60 chars | Section H2 | required |
| `integrations.subheading` | `Connect MaxMyCloud with your existing data and analytics stack.` | text | 150 chars | Section sub | optional |
| `integrations.logo_1_src` | `(Snowflake webp URL)` | image URL | — | Logo 1 image | required |
| `integrations.logo_1_name` | `Snowflake` | text | 20 chars | Logo 1 label | required |
| `integrations.logo_2_name` | `BigQuery` | text | 20 chars | Logo 2 label | required |
| `integrations.logo_3_name` | `AWS` | text | 20 chars | Logo 3 label | required |
| `integrations.logo_4_name` | `Databricks` | text | 20 chars | Logo 4 label | required |
| `integrations.logo_5_name` | `Airbyte` | text | 20 chars | Logo 5 label | required |
| `integrations.logo_6_name` | `dbt` | text | 20 chars | Logo 6 label | required |
| `integrations.logo_7_name` | `Matillion` | text | 20 chars | Logo 7 label | required |

---

## STATS

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `stats.stat_1_value` | `20%` | text | 10 chars | Stat 1 large number | required |
| `stats.stat_1_desc` | `Minimum guaranteed reduction in Snowflake costs — or you don't pay.` | text | 100 chars | Stat 1 description | required |
| `stats.stat_2_value` | `< 60min` | text | 10 chars | Stat 2 large number | required |
| `stats.stat_2_desc` | `Average integration time with existing Snowflake environments.` | text | 100 chars | Stat 2 description | required |

---

## MANIFESTO

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `manifesto.overline` | `Our Philosophy` | text | 30 chars | Section overline | optional |
| `manifesto.heading` | `How MaxMyCloud thinks about this` | text | 60 chars | Section H2 | required |
| `manifesto.body` | `We think cloud cost optimization is one of the highest-leverage things a data team can do — but it only works if the process is honest.` | text | 250 chars | Section body | required |
| `manifesto.p1_title` | `Proven Performance` | text | 40 chars | Point 1 title | required |
| `manifesto.p1_body` | `Consistently reduce Snowflake costs while maintaining or improving query performance.` | text | 150 chars | Point 1 body | required |
| `manifesto.p2_title` | `Smart Automation` | text | 40 chars | Point 2 title | required |
| `manifesto.p2_body` | `Automatically detect inefficiencies and apply optimizations with minimal manual effort.` | text | 150 chars | Point 2 body | required |
| `manifesto.p3_title` | `Cost-Effective Plans` | text | 40 chars | Point 3 title | required |
| `manifesto.p3_body` | `Flat, predictable pricing designed to scale without per-user or usage penalties.` | text | 150 chars | Point 3 body | required |

---

## PRICING

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `pricing.overline` | `Pricing` | text | 20 chars | Section overline | optional |
| `pricing.heading` | `Flexible pricing that grows with you` | text | 60 chars | Section H2 | required |
| `pricing.subheading` | `Simple, predictable pricing designed to scale as your Snowflake usage grows.` | text | 150 chars | Section sub | optional |
| `pricing.plan_1_name` | `Starter` | text | 20 chars | Plan 1 name | required |
| `pricing.plan_1_monthly` | `99` | number | — | Plan 1 monthly price | required |
| `pricing.plan_1_yearly` | `89` | number | — | Plan 1 yearly price | required |
| `pricing.plan_1_desc` | `Core Snowflake cost visibility and optimization for a single account.` | text | 120 chars | Plan 1 description | required |
| `pricing.plan_2_name` | `Professional` | text | 20 chars | Plan 2 name | required |
| `pricing.plan_2_monthly` | `399` | number | — | Plan 2 monthly price | required |
| `pricing.plan_2_yearly` | `350` | number | — | Plan 2 yearly price | required |
| `pricing.plan_2_desc` | `Advanced cost monitoring and optimization across Snowflake accounts.` | text | 120 chars | Plan 2 description | required |
| `pricing.plan_3_name` | `Enterprise` | text | 20 chars | Plan 3 name | required |
| `pricing.plan_3_monthly` | `Custom` | text | — | Plan 3 price | required |
| `pricing.plan_3_desc` | `Custom Snowflake optimization for large-scale, multi-team environments.` | text | 120 chars | Plan 3 description | required |

---

## TESTIMONIALS

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `testimonials.overline` | `Customer Stories` | text | 30 chars | Section overline | optional |
| `testimonials.heading` | `Voice of our customers` | text | 60 chars | Section H2 | required |
| `testimonials.t1_name` | `John D.` | text | 40 chars | Testimonial 1 name | required |
| `testimonials.t1_role` | `Head of Data Engineering` | text | 60 chars | Testimonial 1 role | required |
| `testimonials.t1_quote` | `MaxMyCloud helped us uncover cost inefficiencies we didn't even know existed...` | text | 300 chars | Testimonial 1 quote | required |
| `testimonials.t2_name` | `Sarah K.` | text | 40 chars | Testimonial 2 name | required |
| `testimonials.t2_role` | `Director of Analytics` | text | 60 chars | Testimonial 2 role | required |
| `testimonials.t3_name` | `Michael T.` | text | 40 chars | Testimonial 3 name | required |
| `testimonials.t3_role` | `Platform Engineering Lead` | text | 60 chars | Testimonial 3 role | required |
| `testimonials.t4_name` | `Priya N.` | text | 40 chars | Testimonial 4 name | required |
| `testimonials.t4_role` | `Head of Infrastructure` | text | 60 chars | Testimonial 4 role | required |
| `testimonials.t5_name` | `David R.` | text | 40 chars | Testimonial 5 name | required |
| `testimonials.t5_role` | `VP of Engineering` | text | 60 chars | Testimonial 5 role | required |
| `testimonials.t6_name` | `Emma L.` | text | 40 chars | Testimonial 6 name | required |
| `testimonials.t6_role` | `Data Platform Manager` | text | 60 chars | Testimonial 6 role | required |

---

## BLOG

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `blog.overline` | `Insights` | text | 20 chars | Section overline | optional |
| `blog.heading` | `Snowflake Optimization Blog` | text | 60 chars | Section H2 | required |
| `blog.post_1_title` | `The future of cloud storage` | text | 80 chars | Post 1 title | required |
| `blog.post_1_excerpt` | `How modern cloud storage enhances scalability, security, and accessibility.` | text | 150 chars | Post 1 excerpt | required |
| `blog.post_2_title` | `Cloud collaboration: Boosting team productivity` | text | 80 chars | Post 2 title | required |
| `blog.post_3_title` | `Why auto backup & recovery matters` | text | 80 chars | Post 3 title | required |

---

## FAQ

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `faq.overline` | `FAQ` | text | 10 chars | Section overline | optional |
| `faq.heading` | `We answer your questions` | text | 60 chars | Section H2 | required |
| `faq.q1` | `How does MaxMyCloud connect to Snowflake?` | text | 100 chars | FAQ item 1 question | required |
| `faq.a1` | `MaxMyCloud connects using secure, read-only access...` | text | 300 chars | FAQ item 1 answer | required |
| `faq.q2` | `Will this impact Snowflake performance?` | text | 100 chars | FAQ item 2 question | required |
| `faq.q3` | `How quickly can we see cost savings?` | text | 100 chars | FAQ item 3 question | required |
| `faq.q4` | `What kind of cost reduction can we expect?` | text | 100 chars | FAQ item 4 question | required |
| `faq.q5` | `Do you charge per user or per query?` | text | 100 chars | FAQ item 5 question | required |
| `faq.q6` | `Is MaxMyCloud secure?` | text | 100 chars | FAQ item 6 question | required |
| `faq.q7` | `Does this replace our FinOps or data team?` | text | 100 chars | FAQ item 7 question | required |
| `faq.q8` | `What Snowflake environments are supported?` | text | 100 chars | FAQ item 8 question | required |
| `faq.q9` | `How long does setup take?` | text | 100 chars | FAQ item 9 question | required |
| `faq.q10` | `What happens if we don't see savings?` | text | 100 chars | FAQ item 10 question | required |

---

## CTA BANNER

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `cta.heading` | `Start Optimizing Your Snowflake Costs Today` | text | 70 chars | Banner H2 | required |
| `cta.subheading` | `Uncover hidden inefficiencies and start reducing Snowflake spend in minutes — no disruption, no risk.` | text | 180 chars | Banner sub | required |
| `cta.primary_label` | `Calculate Your Savings` | text | 30 chars | Primary CTA | required |
| `cta.secondary_label` | `Schedule a Free Consultation` | text | 30 chars | Secondary CTA | optional |
| `cta.note` | `No credit card required` | text | 40 chars | Note below CTAs | optional |

---

## FOOTER

| Slot ID | Current Value | Type | Limit | Location | Required |
|---|---|---|---|---|---|
| `footer.logo_src` | `(MaxMyCloud logo URL)` | image URL | — | Footer logo | required |
| `footer.tagline` | `Specializing in Snowflake cost optimization. We help reduce your cloud data warehouse spend by over 30–50%.` | text | 180 chars | Footer tagline | required |
| `footer.email_label` | `Get free optimization techniques` | text | 50 chars | Email subscribe heading | optional |
| `footer.credit` | `Designed by BlitzStudio powered by MaxMyCloud` | text | 80 chars | Footer bottom | optional |
