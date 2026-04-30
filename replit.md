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
