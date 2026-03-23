# CLAUDE.md — Template A: Dark Premium

## What This Template Is

A dark, sophisticated, editorial landing page for premium service firms. Built on
the Nomad Partners Figma Make export. Uses absolute-positioned Figma components
for pixel-perfect fidelity at exactly 1440px (desktop) and 380px (mobile).
Ideal for law firms, consulting practices, VC funds, advocacy organizations,
and any brand that needs to project authority and credibility.

## Design Law

The background is always #0b0b0b. The navbar is always #16322c. Nothing is light.

## Architecture

Route: /template-a
Entry: templates/template-a/index.tsx
Components:
- Desktop1440.tsx — full page layout for ≥1024px (absolute positioned, 1440px canvas)
- Mobile380.tsx — full page layout for <1024px (absolute positioned, 380px canvas)
- svg-navbar.ts — SVG path data for navbar logo
- svg-footer.ts — SVG path data for footer logo

## Critical Notes

This template uses Figma Make export components with absolute positioning and
explicit pixel heights. Do NOT restructure these components.
The wrapper must set explicit height: `h-[7400px]` desktop, `h-[11500px]` mobile.
Images use figma:asset/ URLs resolved by the figma-asset-transform Vite plugin.
This plugin must be present in vite.config.ts for images to load.

## Content Swap Protocol

Because this is a Figma export, content swap requires editing the component files
directly — finding hardcoded text strings and replacing them. Do NOT refactor
the component structure. Use find/replace carefully.

## What You Must Never Do

- Never change position:absolute layout of Figma import components
- Never remove the explicit height from the wrapper div
- Never use a different font (Geist only)
- Never change the #0b0b0b background
- Never change the #16322c navbar color
