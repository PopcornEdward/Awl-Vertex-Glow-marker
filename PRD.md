# Awl Vertex Glow Marker — PRD

## Product Overview

A static B2B wholesale independent station for a Chinese beauty tools source factory. The site showcases 6 product lines (Nail Supplies, Eyelash Supplies, Permanent Makeup, Beauty Tools, Daily Chemical, Makeup Tools) and serves as a lead-generation funnel for international wholesale buyers.

**URL:** https://awlvertexglowmarker.com  
**Target Audience:** International beauty product importers, distributors, and brand owners  
**Factory Location:** Yiwu, Zhejiang, China  
**Export Reach:** 60+ countries

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5.16.11 (static site generation) |
| Routing | ClientRouter (`astro:transitions`) — SPA mode |
| Styling | TailwindCSS 4 + DaisyUI 5.5.14 |
| Icons | `astro-icon` (Lucide icon set) |
| Carousels | Swiper.js (CDN) |
| Background | Vanta.js NET (Three.js r134 + vanta.net CDN) |
| Hosting | Static HTML (any CDN/web server) |

---

## Site Architecture

### Pages

| Route | Page | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Homepage — hero swiper, partners, products, trust pillars, how to order, CTA |
| `/products` | `products.astro` | All products catalog with category filters |
| `/category/[slug]` | `[slug].astro` | Category-specific product listing |
| `/product/[slug]` | `[slug].astro` | Single product detail page |
| `/about` | `about.astro` | Company introduction, factory info |
| `/factory` | `factory.astro` | Factory tour with image gallery |
| `/how-to-order` | `how-to-order.astro` | Order process, payment, shipping info |
| `/contact` | `contact.astro` | Contact form, WhatsApp, factory address |
| `/blog` | `blog.astro` | Blog listing |
| `/blog/[slug]` | `[slug].astro` | Single blog post |

### Components

| Component | Path | Role |
|-----------|------|------|
| Layout | `src/layouts/Layout.astro` | Base HTML shell: Vanta BG, WhatsApp FAB, scroll-to-top, MusicPlayer, Navbar, Footer |
| NavBar | `src/components/navbar/NavBar.astro` | Sticky nav with search overlay, theme toggle, mobile menu, category dropdowns |
| Footer | `src/components/footer/Footer.astro` | Site footer with links and company info |
| MusicPlayer | `src/components/MusicPlayer.astro` | Floating music player with background audio |

### Data Layer

| File | Contents |
|------|----------|
| `src/data/site.ts` | SITE config, CATEGORIES, NAV_LINKS, TRUST_PILLARS, PROCESS_STEPS, FAQS |
| `src/data/products.ts` | Product catalog array, `getFeaturedProducts()` helper |
| `src/data/blogData.js` | Blog post content |

---

## Homepage Sections (in order)

1. **Hero Swiper** — Full-viewport carousel, 4 slides (General / Nail / Eyelash / PMU), flush with navbar (`pt-0`)
2. **Our Partners** — Mouse-tracking dopamine ripple effect, partner logo marquee
3. **Products & Categories** — Combined section: 6 category pills + featured product grid on `glass-dark` background
4. **Why Work With Us** — 6 trust pillars with floating gradient icons above 3-column card grid
5. **How to Order** — Vertical timeline with gradient connector, numbered step circles, content cards
6. **CTA** — "Ready to Start Your Order?" with neon glow effect, WhatsApp + Contact buttons

---

## Key Design Patterns

### SPA Script Pattern (CRITICAL)

All JavaScript must follow this pattern to work correctly with Astro ClientRouter:

1. **Scripts inside Layout**: All `<script>` and `<script is:inline>` tags go INSIDE `<Layout>...</Layout>`, never after `</Layout>`
2. **Click handlers**: Use `onclick` HTML attribute (not `addEventListener`) for handlers that must survive SPA navigation
3. **Stateful scripts**: Implement `destroy()` to clean up + `init()` to set up, register both on `astro:after-swap`
4. **rAF cleanup**: Always call `cancelAnimationFrame()` in destroy() for any `requestAnimationFrame` loops

### Glass Background Utilities

Defined in `global.css`:
- `glass-light`, `glass-muted` — light translucent backgrounds
- `glass-dark` — `rgba(17, 24, 39, 0.75)` in light mode, transparent in dark mode
- `glass-dark-heavy` — `rgba(17, 24, 39, 0.8)` in light mode, transparent in dark mode

**Rule:** Sections on `glass-dark`/`glass-dark-heavy` must use `text-white`/`text-gray-300` — never `text-gray-900`.

### Dark Mode

- Theme stored in `localStorage("theme")` as `"light"` or `"dark"`
- `<html data-theme="...">` drives all CSS
- Inline `<script is:inline>` in `<head>` sets theme before paint (prevents FOIT)
- Fallback chain: localStorage → OS preference → time-based (6am-6pm light)

### Responsive Breakpoints

- Tailwind defaults: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Mobile menu visible below `lg` (1024px)
- Container max-width: `max-w-7xl` (1280px)

---

## Build & Deploy

```bash
npm run dev      # Development server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

Output is pure static HTML/CSS/JS in `dist/` — deployable to any static host.

---

## Conventions

- Use Lucide icons via `<Icon name="lucide:icon-name" />`
- DaisyUI component classes: `btn`, `input`, `select`, `textarea`
- No tailwind.config.js — DaisyUI 5 uses CSS-based config
- `is:inline` for scripts that need plain `<script>` tags (not ES modules)
- `is:global` for styles that must apply globally
- All product/category images from Pexels CDN (placeholder)
- WhatsApp link format: `https://api.whatsapp.com/send?phone={SITE.whatsapp}&text=...`
