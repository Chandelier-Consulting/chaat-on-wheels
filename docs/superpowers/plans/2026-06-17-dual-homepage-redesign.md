# Dual Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build two polished homepage variants for client review: `/premium` and `/journey`, with `/` acting as a comparison selector.

**Architecture:** Keep the existing Next.js App Router app. Put shared homepage content and components under `app/components/home/`, then create small route pages that compose the variants.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Next Image.

---

### Task 1: Shared Home Data And Components

**Files:**
- Create: `app/components/home/content.ts`
- Create: `app/components/home/HomeShell.tsx`

- [ ] **Step 1: Create shared content**

Add links, locations, dishes, and journey stops in `app/components/home/content.ts`.

- [ ] **Step 2: Create shared UI primitives**

Add `BrandHeader`, `ActionLinks`, `SideRail`, `MobileActionBar`, and `ImageFrame` in `app/components/home/HomeShell.tsx`.

- [ ] **Step 3: Run lint**

Run: `npm run lint`

Expected: no new lint errors.

### Task 2: Premium Editorial Route

**Files:**
- Create: `app/premium/page.tsx`

- [ ] **Step 1: Build `/premium` page**

Compose the premium hero, three action paths, featured dishes, catering, and locations sections using shared content/components.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: no new lint errors.

### Task 3: Truck Journey Route

**Files:**
- Create: `app/journey/page.tsx`

- [ ] **Step 1: Build `/journey` page**

Compose the truck route hero, animated route/stops section, top dishes, locations, and catering close.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: no new lint errors.

### Task 4: Root Variant Selector

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace root page**

Make `/` a polished comparison page linking to `/premium` and `/journey`.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: no new lint errors.

### Task 5: CSS And Verification

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add shared responsive CSS**

Add layout helpers for the dual homepage pages.

- [ ] **Step 2: Build**

Run: `npm run build`

Expected: build succeeds.

- [ ] **Step 3: Browser verify**

Run the dev server and check `/`, `/premium`, `/journey`, and `/menu` on desktop and mobile.

Expected: pages render with no error overlay, no obvious overflow, visible CTAs, and working navigation.
