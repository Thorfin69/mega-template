# COMPONENTS.md — Template B: Light Clean

## STNavbar
**File:** components/STNavbar.tsx
**Props:** none (self-contained, uses hardcoded data)
**Content slots:** logo src, phone, CTA text, nav links array
**Notes:** Fixed position, z-[100]. Uses AnimatePresence for mobile menu. Hamburger uses X/Menu lucide icons.

## STHero
**File:** components/STHero.tsx
**Props:** none
**Content slots:** bg image, avatar photos (3), headline (3 lines), subtext, CTA texts, badge text, stat value/label, review quote/author
**Notes:** Uses `style={{ minHeight: "700px" }}`. Right column hidden on mobile. All elements mount-animated.

## STTrustBar
**File:** components/STTrustBar.tsx
**Props:** none
**Content slots:** 4 items each with Icon (Lucide), title, sub
**Notes:** Stagger animation. Border-r dividers between items on desktop.

## STProblems
**File:** components/STProblems.tsx
**Props:** none
**Content slots:** section label, H2, description, 6 cards (title, desc, img)
**Notes:** Grid with gap-[2px] creates seamless card grid. Hover: scale image, teal tint, content slide up, arrow turns teal. `height: 360px` per card.

## STServicesTabs
**File:** components/STServicesTabs.tsx
**Props:** none
**Content slots:** 5 cases each with label, client, location, challenge, solution, outcome, timeframe, points[], img, result, saved
**Notes:** AnimatePresence mode="wait" between tabs. Left panel is accent bg. Right panel is photo + white badge.

## STHowItWorks
**File:** components/STHowItWorks.tsx
**Props:** none
**Content slots:** 3 steps each with n, title, desc, time, detail
**Notes:** Steps rendered as border-t rows. Large muted ghost number on left. Time badge right-aligned.

## STTestimonials
**File:** components/STTestimonials.tsx
**Props:** none
**Content slots:** 5 testimonials each with quote, name, role, location, result
**Notes:** Left panel is fixed (accent bg). Right panel uses AnimatePresence x-slide. Prev/Next are 65px circle buttons.

## STFAQ
**File:** components/STFAQ.tsx
**Props:** none
**Content slots:** 10 FAQs (5 left col, 5 right col) each with question + answer
**Notes:** Two independent accordion instances. Plus icon rotates 45° on open.

## STCTA
**File:** components/STCTA.tsx
**Props:** none
**Content slots:** label, headline (3 lines), subtext, 3 trust items, phone, form fields
**Notes:** Controlled form state with useState. Right column is a rounded card `bg-[#f4f6f4]`.

## STFooter
**File:** components/STFooter.tsx
**Props:** none
**Content slots:** logo src, tagline, social links (4), nav cols (2×5 links), location, phone, email, watermark text, copyright
**Notes:** 3-col grid with 1px divider columns. Large watermark text uses `clamp(80px, 14vw, 200px)` font-size. bg-[#0C206D].
