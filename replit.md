# Tenacious Gutter Systems - Static Website

## Overview
A static marketing website for Tenacious Gutter Systems (Houston, TX), built with Eleventy (11ty) static site generator, Nunjucks templates, and SASS for styling. Includes a Decap CMS integration for blog content management.

## Tech Stack
- **Static Site Generator:** Eleventy (11ty) v2.0.1
- **Template Engine:** Nunjucks (.njk)
- **Styling:** SASS compiled to CSS
- **CMS:** Decap CMS (for blog management)
- **Image Processing:** @codestitchofficial/eleventy-plugin-sharp-images
- **Package Manager:** npm

## Project Structure
- `src/` - Source files
  - `_includes/` - Nunjucks layouts and components
  - `_data/` - Global data (client.json with business info)
  - `assets/sass/` - SASS source files
  - `assets/css/` - Compiled CSS
  - `content/pages/` - Page templates
  - `content/blog/` - Blog posts (Markdown)
  - `admin/` - Decap CMS admin interface
  - `config/` - Eleventy configuration modules
- `public/` - Build output (generated)

## Development
- **Start dev server:** `npm run dev` (runs SASS watcher + Eleventy dev server on port 5000)
- **Build for production:** `npm run build`
- Server config: `src/config/server.js` (port 5000, showAllHosts: true)

## Deployment
- **Type:** Static site
- **Build command:** `npm run build`
- **Public directory:** `public/`
- Originally configured for Netlify; adapted for Replit deployment

## SEO Improvements (Task #1 — complete)
- Added LocalBusiness JSON-LD schema to `base.html` (site-wide)
- Added Service + FAQPage schema to each of 5 service pages via dedicated FAQ components (`faq_installation.html`, `faq_replacement.html`, `faq_cleaning.html`, `faq_repair.html`, `faq_guards.html`)
- Added AggregateRating schema to `reviews.html`
- Added `noindex`/`nofollow` + `eleventyExcludeFromCollections: true` to `admin/index.html`, `qr.html`, `reviewus.html` — all excluded from sitemap
- Fixed `client.json` state (MI→TX) and city fields
- All pages now have unique, keyword-targeted title tags and meta descriptions

## Conversion Rate Improvements (Task #2 — complete)
- **Desktop header phone:** `header.html` — phone number with phone icon appears next to CTA on desktop
- **Desktop CTA tel: links:** `cta_button.html`, `cta_button_hero.html` — desktop buttons now link to `tel:` + secondary "Request Online" button
- **Trust bar:** `components/trust_bar.html` — "Licensed & Insured · Free Estimates · Same-Day Service · 5-Star Rated" strip; included on home page (`index.html`) and all 5 service pages
- **Sticky mobile call button:** `base.html` — fixed green "Call Now" bar at bottom of mobile viewport
- **Hero social proof:** `hero.html` — "Trusted by Houston homeowners since 2024 · Fully licensed & insured" line
- **Contact page UX:** `contact.html` — heading changed to "Get Your Free Estimate", reduced-friction subtext, phone number in prominent green block, form success message with JS
