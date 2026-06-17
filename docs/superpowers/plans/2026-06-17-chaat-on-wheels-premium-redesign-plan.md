# Chaat On Wheels Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved Cousins-inspired premium redesign while preserving the current animated truck route functionality.

**Architecture:** Keep the existing Next App Router structure. Upgrade global tokens/fonts, generate project-bound bespoke assets, preserve `HomeTruckJourney` as the homepage, and polish `/menu` with the same visual schema. Keep changes scoped to existing app files plus generated assets.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4 CSS tokens, Framer Motion, next/image, next/font, Playwright for browser QA.

---

## File Structure

- Modify `app/layout.tsx`: add `next/font` for Inter, Playfair Display, Space Mono, and update metadata.
- Modify `app/globals.css`: define professional design tokens, font utilities, `.photo-grade`, route utilities, and display type classes.
- Modify `next.config.ts`: allow `next/image` qualities `[75, 85, 92]`.
- Modify `app/components/HomeTruckJourney.tsx`: preserve route behavior, replace toy styling with premium components, use generated assets, improve copy and CTAs.
- Modify `app/menu/page.tsx`: align menu page to the same schema.
- Create assets in `public/`: `hero-chaat-3d.png`, `premium-truck-top.png`, optional `chutney-accents.png`.
- No changes to `next-env.d.ts`.
- Do not commit `.superpowers/`.

## Task 1: Generate Bespoke Assets

**Files:**
- Create: `public/hero-chaat-3d.png`
- Create: `public/premium-truck-top.png`
- Optional Create: `public/chutney-accents.png`

- [ ] **Step 1: Generate hero image**

Use built-in image generation.

Prompt:

```text
Use case: ads-marketing
Asset type: premium website hero image for Chaat On Wheels, Indian vegetarian street food truck
Primary request: Create a premium 3D/editorial food composition featuring Indian chaat: dahi puri, sev, yogurt, tamarind chutney, mint chutney, fresh herbs, and small brass/steel serving details. It should feel like a high-end food truck campaign image, inspired by professional franchise food sites, not a cartoon.
Scene/backdrop: deep near-black studio background with warm saffron highlights and subtle South Asian street-food material cues.
Subject: crisp chaat shells and chutneys, appetizing texture, elevated but authentic.
Composition: strong right-side hero composition with room for code-native headline on the left if used; dramatic but clean lighting; no text, no logo, no watermark.
Style: premium 3D product render blended with editorial food photography, realistic materials, tasteful shadows.
Avoid: cute cartoon style, game asset look, generic stock photo, messy plate, fake labels, unreadable text.
```

- [ ] **Step 2: Save hero image**

Move/copy the selected generated image into:

```bash
public/hero-chaat-3d.png
```

If exact image path is unknown, locate the latest generated image under `$CODEX_HOME/generated_images`.

- [ ] **Step 3: Generate premium top-down truck asset**

Use built-in image generation.

Prompt:

```text
Use case: product-mockup
Asset type: premium top-down food truck asset for website scroll route
Primary request: Create a premium top-down 3D render of a compact Indian street food truck for "Chaat On Wheels". The truck should feel like a polished brand asset for a professional food truck website.
Scene/backdrop: perfectly flat solid #00ff00 chroma-key background for background removal.
Subject: top-down food truck, saffron yellow body, deep green accents, warm off-white roof/service window, subtle tamarind red detail. Minimal readable branding is acceptable only if clean; otherwise keep surfaces clean for code-native branding overlay.
Composition: centered full truck, generous padding, orthographic top-down view, crisp edges, no cast shadow, no reflection.
Style: premium 3D product render, realistic but clean.
Avoid: toy car, cartoon, clip art, mascot, road, people, background texture, shadows, #00ff00 in the truck.
```

- [ ] **Step 4: Remove truck chroma-key background**

Run:

```bash
python "${CODEX_HOME:-$HOME/.codex}/skills/.system/imagegen/scripts/remove_chroma_key.py" \
  --input /path/to/generated-truck-source.png \
  --out public/premium-truck-top.png \
  --auto-key border \
  --soft-matte \
  --transparent-threshold 12 \
  --opaque-threshold 220 \
  --despill
```

Expected: `public/premium-truck-top.png` has alpha transparency and no green fringe.

- [ ] **Step 5: Inspect generated assets**

Run:

```bash
file public/hero-chaat-3d.png public/premium-truck-top.png
```

Expected: both files exist and are PNG images.

## Task 2: Token, Font, and Image Config Foundation

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `next.config.ts`

- [ ] **Step 1: Update `app/layout.tsx`**

Implement `next/font` variables:

```tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaat On Wheels | Premium Indian Street Food in Sunnyvale",
  description:
    "Vegetarian Indian street food, chaat, vada pav, pav bhaji, kulche chole, lassi, and chai from Chaat On Wheels in Sunnyvale and San Jose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Update `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 92],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Update `app/globals.css`**

Define tokens and utilities:

```css
@import "tailwindcss";

:root {
  --background: #fbf7ee;
  --foreground: #17120d;
  --ink: #17120d;
  --muted: #74685d;
  --paper: #fffaf0;
  --panel: #ffffff;
  --saffron: #f6b21a;
  --chutney: #0f6b45;
  --tamarind: #7c2518;
  --rose: #d94a36;
  --mint: #dcedd2;
  --border: #e5dac8;
  --night: #11100e;
  --cream: #fbf7ee;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-ink: var(--ink);
  --color-muted: var(--muted);
  --color-paper: var(--paper);
  --color-panel: var(--panel);
  --color-saffron: var(--saffron);
  --color-chutney: var(--chutney);
  --color-tamarind: var(--tamarind);
  --color-rose: var(--rose);
  --color-mint: var(--mint);
  --color-border: var(--border);
  --color-night: var(--night);
  --color-cream: var(--cream);
  --font-sans: var(--font-body);
  --font-display: var(--font-display);
  --font-mono: var(--font-mono);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.section-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.text-balance {
  text-wrap: balance;
}

.font-display {
  font-family: var(--font-display), Georgia, serif;
}

.font-mono {
  font-family: var(--font-mono), ui-monospace, monospace;
}

.photo-grade {
  filter: saturate(1.06) contrast(1.05);
  transform: translateZ(0);
}

.hero-grid {
  background-image:
    linear-gradient(rgba(255, 250, 240, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 250, 240, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
}

.route-grid {
  background-image:
    linear-gradient(rgba(255, 250, 240, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 250, 240, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
}

.display-hero {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(4rem, 11vw, 9rem);
  line-height: 0.88;
  letter-spacing: 0;
}

.display-section {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2.75rem, 7vw, 5.25rem);
  line-height: 0.96;
  letter-spacing: 0;
}

.label {
  font-family: var(--font-mono), ui-monospace, monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.truck-window {
  contain: paint;
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Run lint**

Run:

```bash
npm run lint
```

Expected: exits `0`.

## Task 3: Premium Homepage Route Rebuild

**Files:**
- Modify: `app/components/HomeTruckJourney.tsx`

- [ ] **Step 1: Replace the homepage component**

Rewrite `HomeTruckJourney.tsx` to preserve:

- `useScroll` route progress.
- Truck follows SVG path.
- Sticky route scene.
- Stop cards.
- Order/menu/directions/location/catering links.

Implement:

- `useReducedMotion`.
- `EASE_OUT_EXPO`, `EASE_SPRING`.
- `BrandMark`, `ArrowIcon`, `ActionLinks`, `PremiumTruck`, `StoryCard`, `StopCard`.
- Hero uses `public/hero-chaat-3d.png` if present, fallback to `/hero-chaat.jpg`.
- Route truck uses `public/premium-truck-top.png` if present, fallback to refined SVG.
- No `animate-bounce`.
- No `window.addEventListener('scroll')`.

- [ ] **Step 2: Copy link constants and data**

Use exact link constants from current file:

```ts
const sunnyvaleMaps =
  "https://www.google.com/maps/search/?api=1&query=1101+Lawrence+Expressway+Sunnyvale+CA+94089";
const sanJoseMaps =
  "https://www.google.com/maps/search/?api=1&query=315+Crescent+Village+Cir+San+Jose+CA+95134";
const orderLink = "https://postmates.com/store/chaat-on-wheels/9A13qNV2W5-yHyir6Yy4jw";
const yelpLink = "https://www.yelp.com/biz/chaat-on-wheels-sunnyvale";
```

- [ ] **Step 3: Implement hero copy**

Hero visible copy:

```text
Chaat On Wheels
South Bay Indian street food, built fresh from the truck window.
Order pickup
Get directions
Full menu
Sunnyvale daily window
San Jose service area
Group orders by phone
```

- [ ] **Step 4: Implement route stop copy**

Use the four approved stops:

```ts
const dailyStops = [
  {
    time: "11:30 AM",
    title: "First chaat orders",
    body: "Dahi puri, papdi chaat, sev, yogurt, and chutneys layered for crisp, cold, tangy contrast.",
    image: "/dahi-puri.jpg",
  },
  {
    time: "12:45 PM",
    title: "Lunch pav window",
    body: "Vada pav, pav bhaji, dabeli, sandwiches, and quick pickup orders for the midday rush.",
    image: "/vada-pav.jpg",
  },
  {
    time: "3:30 PM",
    title: "Chai and chaat reset",
    body: "Samosa chaat, aloo tikki, masala chai, mango lassi, and rose milk for the second craving.",
    image: "/samosa-chaat.jpg",
  },
  {
    time: "6:30 PM",
    title: "Family order lane",
    body: "Kulche chole, bigger plates, extra chutneys, and food packed for sharing.",
    image: "/catering-chaat.jpg",
  },
];
```

- [ ] **Step 5: Ensure route geometry still works**

Keep a path ref and update truck position with `requestAnimationFrame` using `getTotalLength()` and `getPointAtLength()`.

If reduced motion is enabled:

- Leave truck centered on the route.
- Keep content visible.
- Do not animate route draw.

- [ ] **Step 6: Run lint**

Run:

```bash
npm run lint
```

Expected: exits `0`.

## Task 4: Premium Menu Page

**Files:**
- Modify: `app/menu/page.tsx`

- [ ] **Step 1: Tokenize menu page**

Replace arbitrary hex classes with token classes from `globals.css`.

Required structure:

- Dark header matching homepage.
- Hero with `font-display` headline and `photo-grade` image.
- Category nav sidebar remains.
- Menu category cards retain all existing items/prices/descriptions.
- CTA band at bottom remains.

- [ ] **Step 2: Improve menu hero copy**

Use:

```text
Full menu
Chaat, pav, lassi, chai.
Browse the core Chaat On Wheels menu before you order pickup, call ahead, or head to the truck.
```

- [ ] **Step 3: Use image qualities**

Hero:

```tsx
quality={92}
```

Category images:

```tsx
quality={85}
```

- [ ] **Step 4: Run lint**

Run:

```bash
npm run lint
```

Expected: exits `0`.

## Task 5: Verification and Visual QA

**Files:**
- No source files unless fixes are found.

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: exits `0`.

- [ ] **Step 2: Run build**

Run:

```bash
npm run build
```

Expected: exits `0`; if network is needed for `next/font`, run with approved escalation.

- [ ] **Step 3: Start dev server**

Run:

```bash
npm run dev
```

Expected: Next dev server starts and reports a localhost URL.

- [ ] **Step 4: Browser check with Playwright**

Check:

- `/` at desktop 1440x1000.
- `/` at mobile 390x844.
- `/menu` at desktop 1440x1000.
- Click `Full menu` or `View menu` from mobile/home.

Expected:

- No Next overlay.
- Body text length > 500.
- Console has no relevant errors.
- No image quality warnings.
- Screenshots saved under `/tmp/`.

- [ ] **Step 5: Visual QA checklist**

Confirm:

- First viewport feels Cousins-level professional.
- Order, directions, and full menu are visible above fold.
- Truck journey still works.
- Truck does not look cute/cartoonish.
- Stop cards are readable.
- Mobile sticky order/call bar does not cover important content.
- Menu page matches homepage.

- [ ] **Step 6: Final status**

Report changed files, generated assets, verification commands, browser URL, and any remaining risks.
