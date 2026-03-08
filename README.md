# Rantoul Historical Society — Website

A modern, fast, accessible static site for the Rantoul Historical Society & Museum. Built with **Astro** (static-first, component-driven) to emphasize local history and encourage visits and support without feeling pushy.

---

## Purpose & Funnel Goals

The site is designed to move visitors through:

1. **Get interested** — Story and museum appeal
2. **Get them to visit** — Location, hours, what to expect
3. **Encourage support (one-time)** — Subtle but visible
4. **Allude to recurring support** — Membership/donations as future/optional, not aggressive

Primary focus: steps 1–2. Soft CTAs for 3, light framing for 4.

---

## Sitemap & Navigation

| Route     | Purpose |
|----------|---------|
| `/`      | Home — hero, why we matter, what you’ll see, plan a visit, soft support CTA |
| `/about` | About / Mission — who we are, mission, vision, what we do, our museum |
| `/visit` | Visit — hours, location, admission |
| `/exhibits` | Exhibits overview (placeholder-friendly; future expansion) |
| `/events` | Events list (placeholder; future CMS) |
| `/support` | Support — membership, volunteering, donations (incl. in-person + planned online) |
| `/contact` | Contact — form or contact details |

**Navigation:** Simple, persistent header nav plus footer with address, contact, and Facebook link.

---

## Brand & Visual Guidelines

*Inferred from the current site (rantoulhistoricalsociety.org); refine with stakeholders as needed.*

- **Vibe:** Simple, classic, archival — calm and trustworthy, not flashy.
- **Palette (approximate):**
  - **Background:** Warm neutrals (paper/cream).
  - **Text:** Dark ink.
  - **Accent:** One accent color from current site feel, used sparingly for links and buttons.
- **Typography:**
  - **Headings:** Readable serif or semi-serif (museum/history feel).
  - **Body:** Clean sans-serif.
- **Imagery:** Prominent photography; use the centralized image registry (`image-assets.json`) for alt text and captions. Do not invent historical context.

---

## Content Sources & Editing Workflow

- **Source of truth for copy:** `content-reference.md` at the project root.
  - Do **not** invent historical facts.
  - Missing info (hours, board names, exhibit names, etc.) → use clear `TODO:` placeholders in copy or code.
- **Images:** `image-assets.json` at the project root is the authoritative registry.
  - Fields: `file_name`, `dimensions`, `file_size`, `category`, `alt_text`, `description`.
  - Components must use this file for `alt_text` and optional captions; do not hardcode.
  - **Home banner:** Use only assets that exist in the registry and in `src/images`. The home hero/banner is defined by `HOME_BANNER_FILE_NAME` in `src/data/image-assets.ts` (currently the Facilities building exterior). Do not reference non-existent ids (e.g. `home-banner-slide`); use the registry’s `file_name` values.
- **Structured data:** Exhibits and events live in `src/data/` (placeholder lists). Contact info is a single source in `src/data/` for reuse across layout and contact page.

---

## Project Structure (High Level)

```
src/
  components/     # Astro components (Layout, Header, Footer, Hero, Section, Card, Callout, Button, MetaHead)
  data/           # contact.ts, exhibits.ts, events.ts; image registry loaded from root image-assets.json
  images/         # Museum photography (reference image-assets.json for metadata)
  layouts/        # BaseLayout.astro
  pages/          # One file per route (index, about, visit, exhibits, events, support, contact)
  styles/         # Global CSS and design tokens
content-reference.md   # Copy source of truth
image-assets.json     # Image registry (alt, description, category)
```

---

## Development

- **Package manager:** pnpm (preferred).
- **Commands:**
  - `pnpm install` — install dependencies
  - `pnpm dev` — start dev server
  - `pnpm build` — production build
  - `pnpm preview` — preview production build

---

## Images

Images in `src/images/` are used with the registry in `image-assets.json` for alt text and captions. Served from `public/images/` at `/images/{file_name}` so URLs are stable.

**Reconciliation (image-assets.json ↔ src/images):**

| In image-assets.json | In src/images | Used for |
|---------------------|---------------|----------|
| rantoul-historical-society-museum-building-exterior.jpg | ✓ | **Home banner** (hero + “What you’ll see”) |
| rantoul-historical-society-one-room-schoolhouse-exhibit.jpg | ✓ | Available |
| chanute-air-force-base-commemorative-mug-rantoul.jpg | ✓ | Available |
| illinois-central-railroad-museum-display-rantoul.jpg | ✓ | Available |
| rantoul-agricultural-history-plows-exhibit.jpg | ✓ | Available |
| sandy-mechanical-horse-ride-rantoul-museum.jpg | ✓ | Available |
| vintage-magneto-wall-telephones-collection.jpg | ✓ | Available |
| — | vintage-print-shop-potbelly-stove-museum.jpg | **Not in registry** — add to `image-assets.json` if you want to use it on the site |

All site images must be listed in `image-assets.json` and exist in `src/images/`; copies are placed in `public/images/` at build. The project uses Astro’s passthrough image service (no Sharp dependency). To enable build-time image optimization (resize, WebP, etc.), install `sharp` and remove the `image.service: passthroughImageService()` option from `astro.config.mjs`.

---

## Deployment

Deployment target is not fixed yet. Options that fit the stack:

- **Cloudflare Pages** (static) — recommended for free tier and performance.
- **Netlify** — alternative static host.
- **Any static host** — export is standard static HTML/CSS/JS.

Configure the chosen platform to build from the repo with `pnpm build` and publish the `dist/` output.

---

## Future Enhancements

- **Online donations:** PayPal Donate, Stripe, Donorbox, or Square (see Support page and `content-reference.md`). Not implemented in initial launch; in-person donation guidance only.
- **CMS:** Events (and optionally exhibits) backed by a headless CMS.
- **Exhibit detail pages:** When exhibit list and copy are finalized.
- **Board/officer list:** When provided; use a single data file or CMS.

---

## Conventions

- Follow **org-controller MCP** guidance for workflow and framework usage.
- Respect `mcp/preferences.json` for MCP behavior and tooling.
- Accessibility: WCAG-minded (headings, contrast, focus, alt text).
- SEO: Unique title and meta description per page; clean URLs; basic Local Organization / Museum schema where applicable.
