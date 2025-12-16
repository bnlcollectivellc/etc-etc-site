# etc.etc — Product Requirements Document

> **Workflow Note for Claude Code:** This project follows a **spec-driven workflow**. This PRD is the **source of truth and development bible**. All code must align with this document. Update this document to reflect completed work, decisions made, and scope changes. **Before changing the PRD, get user approval.** This allows the project to be picked up across multiple sessions with full context. Always read this document at the start of a session and update it before ending.

---

## Project Overview

**etc.etc** is a minimal, editorial portfolio website showcasing a collection of apps and tools built under the etc.etc brand. The site serves as a gallery displaying mobile apps and web tools across various categories.

**Live Reference:** [sill-writing.vercel.app](https://sill-writing.vercel.app) — first project in the portfolio

**Design Reference:** [keo-fluid-demo.squarespace.com](https://keo-fluid-demo.squarespace.com) — clean, minimal, editorial aesthetic

---

## Brand Identity

### Tagline
> **Human-focused apps and websites: software that helps you get back to living your life.**

Use across: website, social bios, app descriptions, all brand touchpoints.

### Design DNA
- **Typeface:** Replica (font file: `ReplicaLL-Regular.otf`)
- **Grid System:** 4-column layout (derived from invoice/contract document design)
- **Color Palette:** Black `#000` / White `#FFF` (monochrome, no accent colors for now)
- **Tone:** Minimal, editorial, utilitarian
- **Aesthetic:** Functional typography, generous whitespace, clear hierarchy

### Design Principles
- Clean like the Keo Squarespace template
- Structured like the B&L Collective invoice/contract documents
- Typography-forward, no decoration
- Content speaks for itself

---

## Site Structure

### Single Page Architecture

The site is a **single page** with the following sections:

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                     │
│  etc.etc                              [TikTok] [Instagram]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PROJECT GALLERY                                            │
│  4-column grid of project cards                             │
│                                                             │
│  ┌─────────┬─────────┬─────────┬─────────┐                  │
│  │ proj 1  │ proj 2  │ proj 3  │ proj 4  │                  │
│  ├─────────┼─────────┼─────────┼─────────┤                  │
│  │ proj 5  │ proj 6  │ proj 7  │ proj 8  │                  │
│  └─────────┴─────────┴─────────┴─────────┘                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                     │
│  etc.etc                              [TikTok] [Instagram]  │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### Header
- **Left:** `etc.etc` wordmark (Replica typeface)
- **Tagline:** `Human-focused apps and websites: software that helps you get back to living your life.`
  - Positioned below the wordmark
  - Smaller type size, same typeface
- **Right:** Social icons (small, minimal)
  - TikTok icon
  - Instagram icon
- **Style:** Fixed or static, thin rule below (optional)
- **No navigation links** (single page, no Work/About buttons)

### Project Gallery

#### Grid Layout
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column
- **Gap:** Consistent spacing between cards

#### Project Card Types

**Type A: Mobile App**
- Screenshot displayed inside an iPhone shell/frame
- Hover overlay reveals:
  - App name
  - One-line description
  - Category tag
- Entire card is hyperlinked to App Store page (or external link)

**Type B: Website**
- Screenshot with rounded rectangle mask (simulating browser window)
- Hover overlay reveals:
  - Site name
  - One-line description
  - Category tag
- Entire card is hyperlinked to live site URL

#### Hover Overlay Behavior
- **Trigger:** Mouse enter on card
- **Animation:** Fade in (opacity 0 → 1, ~200-300ms ease)
- **Overlay Style:** Frosted glass effect — semi-transparent white with backdrop blur (`backdrop-filter: blur()`) and black text
- **Content Layout:**
  ```
  ┌─────────────────────────┐
  │                         │
  │      Project Name       │
  │   One-line description  │
  │        category         │
  │                         │
  └─────────────────────────┘
  ```
- **Typography:** Replica, centered or left-aligned
- **Category Tag:** Plain text, smaller font size than description for visual hierarchy contrast

### Footer
- **Left:** `etc.etc` wordmark
- **Right:** Social links (TikTok, Instagram) — text or icons, hyperlinked
- **Style:** Minimal, mirrors header structure

---

## Category System

Use Apple App Store categories. Display as tags on hover overlay.

### Primary Categories (use as needed)
- Books
- Business
- Developer Tools
- Education
- Entertainment
- Finance
- Food & Drink
- Games
- Graphics & Design
- Health & Fitness
- Lifestyle
- Medical
- Music
- Navigation
- News
- Photo & Video
- Productivity
- Reference
- Shopping
- Social Networking
- Sports
- Travel
- Utilities
- Weather

### Display Format
- Lowercase or Title Case (decide during implementation)
- Examples: `health & fitness`, `utility`, `productivity`

---

## Project Data Structure

Each project should follow this schema:

```typescript
interface Project {
  id: string;
  name: string;
  description: string; // One-line description
  category: string; // Apple App Store category
  type: 'mobile' | 'web';
  image: string; // Path to screenshot
  link: string; // External URL (App Store, website, etc.)
  status?: 'live' | 'coming-soon';
}
```

### Initial Projects

```typescript
const projects: Project[] = [
  {
    id: 'sillwriting',
    name: 'sillwriting',
    description: 'A minimalist writing tool.',
    category: 'Productivity',
    type: 'web',
    image: '/images/sillwriting.png',
    link: 'https://sill-writing.vercel.app',
    status: 'live'
  },
  // Placeholder projects with status: 'coming-soon' to fill out the grid
];
```

### Placeholder Projects
- Display "Coming Soon" cards with `status: 'coming-soon'`
- Use placeholder images or a neutral graphic
- Cards are not clickable (no link) or link to `#`
- Show project name + "Coming Soon" text on hover (no category)

---

## Technical Specifications

### Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (chosen for development speed)
- **Deployment:** Vercel (preview URL initially, custom domain TBD)
- **Font Loading:** Local font file (`ReplicaLL-Regular.otf`) via `@font-face`

### File Structure
```
etc-etc/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── fonts/
│       └── ReplicaLL-Regular.otf
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectGallery.tsx
│   ├── ProjectCard.tsx
│   ├── MobileFrame.tsx      // iPhone shell component
│   └── WebFrame.tsx         // Rounded rectangle mask component
├── data/
│   └── projects.ts          // Project data
├── public/
│   └── images/
│       └── projects/        // Project screenshots
├── package.json
├── tsconfig.json
└── PRD.md                   // This document (keep in repo root)
```

### Responsive Breakpoints
- **Desktop:** ≥1024px — 4 columns
- **Tablet:** 768px–1023px — 2 columns
- **Mobile:** <768px — 1 column

### Font Implementation
```css
@font-face {
  font-family: 'Replica';
  src: url('./fonts/ReplicaLL-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## Asset Requirements

### iPhone Frame
- Create minimal SVG outlines (not sourced)
- **Two versions to compare:**
  - Option A: Modern notch-style iPhone silhouette
  - Option B: Timeless rounded rectangle (no notch, cleaner)
- Should be clean, not distracting from the screenshot
- Black outline style
- Decision: Deploy both, compare on live site, pick winner

### Screenshots
- **Mobile apps:** Portrait orientation, standard iPhone aspect ratio
- **Websites:** Landscape or square crop, showing key UI

### Social Icons
- Simple line icons (Lucide/Feather style) for TikTok and Instagram
- Small size, not prominent
- Black stroke, no fill

---

## Implementation Phases

### Phase 1: Foundation
- [x] Set up Next.js project with TypeScript
- [x] Configure Replica font
- [x] Implement 4-column grid system
- [x] Create Header component
- [x] Create Footer component
- [x] Create basic ProjectCard component
- [x] Add placeholder project data

### Phase 2: Polish
- [x] Implement hover overlay with fade animation (frosted glass)
- [x] Create MobileFrame component (iPhone shell — both notch and timeless variants)
- [x] Create WebFrame component (rounded rectangle)
- [x] Style category tags (plain text, smaller than description)
- [x] Responsive layout (tablet, mobile)

### Phase 3: Content (In Progress)
- [ ] Add sillwriting screenshot (replace placeholder)
- [ ] Add future project screenshots
- [x] Create iPhone frame assets (both variants built)
- [ ] Finalize all copy/descriptions

### Phase 4: Launch
- [x] Deploy to Vercel — **Live URL:** https://etcetc.vercel.app
- [ ] Connect custom domain (if applicable)
- [ ] Test all links
- [ ] Performance optimization

---

## Future Considerations (Out of Scope for V1)
- GIF previews instead of static screenshots
- Project detail pages (if needed)
- Category filtering
- Dark mode toggle
- Animation on scroll
- About section/page

---

## Session Log

> **Instructions:** Update this section at the end of each Claude Code session to track progress.

| Date | Session Summary | Status |
|------|-----------------|--------|
| YYYY-MM-DD | Initial PRD created | Not started |
| 2024-12-15 | Clarified design decisions. Built all phases: Next.js + Tailwind setup, Replica font, Header/Footer, ProjectGallery (4-col responsive grid), ProjectCard with frosted glass overlay, MobileFrame (notch + timeless), WebFrame. Deployed to Vercel. | Complete |

---

## Open Questions

- [x] ~~Exact hover overlay background treatment~~ → **Resolved:** Frosted glass (semi-transparent white + backdrop blur) with black text
- [x] ~~Category tag styling~~ → **Resolved:** Plain text, smaller than description
- [x] ~~Social icon style~~ → **Resolved:** Simple line icons (Lucide/Feather style)
- [x] ~~Domain name~~ → **Resolved:** Vercel preview URL for now, custom domain TBD
- [ ] iPhone frame style (notch vs timeless) — will compare both on live site

---

## References

- **Design Reference:** [Keo Squarespace Template](https://keo-fluid-demo.squarespace.com)
- **Brand Reference:** B&L Collective invoice/contract documents (4-column grid, Replica typeface, black/white)
- **First Project:** [sillwriting](https://sill-writing.vercel.app)
- **Apple Categories:** [developer.apple.com/app-store/categories](https://developer.apple.com/app-store/categories/)

---

*This document is the source of truth for the etc.etc project. Keep it updated.*
