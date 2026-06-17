# Chaat On Wheels Premium Redesign

## Goal

Revamp Chaat On Wheels into a premium, conversion-focused food truck website while preserving the current scroll-route functionality.

Primary customer outcome: visitors should immediately trust the brand, understand what is sold, and take one of three actions: order pickup, get directions, or view the menu.

## Approved Direction

Use Direction A: Premium Editorial Truck.

The site should feel closer to Cousins Maine Lobster than a local template site: big campaign-style hero, strong food/product imagery, clear find/order/cater actions, and confident section rhythm. The current animated truck journey stays, but it becomes a cinematic route experience instead of a playful novelty.

Reference interpretation:

- Cousins Maine Lobster: campaign hero, product-led sections, repeated location/order/catering CTAs.
- Kogi BBQ: truck utility, schedule/menu/catering remain central.
- Chaat On Wheels: precise, ultra professional, authentic South Bay Indian street-food truck.

## Design Schema

### Brand Character

- Premium but not sterile.
- Street-food energy without cartoon styling.
- Confident, direct, operationally useful.
- More editorial/product-campaign than decorative restaurant site.

### Color Tokens

Use the existing palette, tuned more professionally:

- `ink`: near-black for hero, nav, footer, route backdrop.
- `paper`: warm off-white for content surfaces.
- `saffron`: primary CTA and route highlight.
- `chutney`: secondary CTA, location/catering band.
- `tamarind`: small accents and menu prices.
- `muted`: body/supporting copy.
- `border`: quiet dividers.

Avoid broad one-note beige, overuse of yellow, or heavy gradients.

### Typography

- `font-display` Playfair Display for major headings only.
- `font-body` Inter for body, nav, buttons.
- `font-mono` Space Mono for labels, hours, stop times, metadata.
- Perfect Fourth scale.
- Headlines use `text-balance`.
- No viewport-scaled font hacks beyond controlled clamp utilities in CSS tokens.

### Motion

- Framer Motion only.
- Preserve the scroll-progress truck route.
- Motion must feel controlled and cinematic.
- Use reduced-motion checks for all Framer hooks.
- Use transform and opacity only.
- Remove `window.addEventListener('scroll')`; resize handling is acceptable only if needed for route geometry.
- No bouncing arrows or toy-like motion.

### Imagery

Use bespoke generated assets plus existing food photos:

- 3D hero chaat platter or premium food composition.
- Premium top-down Chaat On Wheels truck asset for the route.
- 3D chutney/ingredient accents where they support hierarchy.
- Existing photos remain as real-food proof and menu cards.
- All images use `next/image`.
- Heroes use `quality={92}`.
- Cards use `quality={85}`.
- All food photos use `.photo-grade`.

Generated assets must not look like game props, clip art, cartoons, or generic stock renders.

## Site Structure

### 1. Header

Persistent dark header.

Content:

- Brand mark and Chaat On Wheels name.
- Nav: Menu, Route, Catering, Locations.
- Primary CTA: Order now.

Behavior:

- Mobile keeps compact Order/Call access.
- Header should not crowd the hero.

### 2. Hero

Purpose: instant professionalism and conversion.

Content:

- H1: strong campaign-style statement around Chaat On Wheels and premium street food.
- Supporting copy: vegetarian Indian street food, South Bay truck, fresh chaat/pav/chai/lassi, pickup.
- CTAs: Order pickup, Get directions, Full menu.
- Operational proof: Sunnyvale daily window, San Jose service area, group orders by phone.
- Bespoke 3D/product hero image.

Rules:

- No eyebrow/pill unless it is an operational label.
- No generic filler claims.
- Route animation does not dominate the first viewport.

### 3. Premium Route Journey

Purpose: preserve current functionality and make it the signature brand experience.

Keep:

- Sticky scroll scene.
- Top-down route path.
- Truck follows route progress.
- Stop cards tied to day rhythm.
- Food imagery per stop.

Upgrade:

- Replace mini SVG truck with premium 3D/top-down truck asset or a more refined vector fallback.
- Route becomes restrained: dark editorial map/road language, saffron highlight, less squiggly toy feel.
- Cards become editorial stop modules, not floating novelty cards.
- Copy becomes specific and customer-useful.

Stops:

- 11:30 AM: first chaat orders, dahi puri/papdi/sev/yogurt/chutneys.
- 12:45 PM: lunch pav window, vada pav/pav bhaji/dabeli/sandwiches.
- 3:30 PM: chai and chaat reset, samosa chaat/aloo tikki/lassi/chai.
- 6:30 PM: family order lane, kulche chole/bigger plates/group pickup.

### 4. Menu Highlights

Purpose: make food quality visible before sending users to full menu.

Content:

- 3-4 signature items.
- Real photos or bespoke 3D food cutouts.
- Short specific descriptions.
- CTA to full menu.

### 5. Catering / Group Orders

Purpose: monetize larger orders.

Content:

- Office lunch, party trays, family orders.
- Direct phone CTA.
- Existing catering image or generated group-order composition.

### 6. Locations

Purpose: remove friction.

Content:

- Sunnyvale: address, hours, phone, directions.
- San Jose: address, phone, call for current hours, directions.

### 7. Menu Page

Purpose: preserve practical browsing and improve professionalism.

Upgrade:

- Same header/schema as homepage.
- Premium dark hero.
- Category sidebar/list remains.
- Menu cards use tokenized colors, display headings, real images, and cleaner spacing.
- Order/directions CTA at bottom.

## Component Plan

Keep code small and local:

- `HomeTruckJourney`: preserve as main homepage component, but split small helpers only where it improves clarity.
- Shared constants for links, stops, locations, and featured items.
- `ActionLinks`, `BrandMark`, `StoryCard`, `RouteTruck`, `StopCard`.
- Global CSS defines design tokens, font utilities, `.photo-grade`, display type utilities, and route background utilities.
- `layout.tsx` sets `next/font` variables.
- `next.config.ts` allows image qualities `[75, 85, 92]`.

No new app architecture.
No new dependency unless needed for asset rendering.

## Asset Plan

Generate after spec approval:

1. Premium 3D Chaat On Wheels top-down truck on transparent background.
2. Premium hero chaat platter / composition.
3. Optional 3D garnish/chutney accents.

Store generated assets in `public/` with clear names:

- `premium-truck-top.png`
- `hero-chaat-3d.png`
- `chutney-accents.png`

If generated text/logos are unreliable, keep the truck branding minimal and overlay code-native labels where appropriate.

## Error Handling / Accessibility

- Links use real `href`.
- External links use `target="_blank"` and `rel="noreferrer"`.
- Images have concrete alt text.
- Mobile sticky order/call bar remains.
- Reduced motion users get static or instant-complete route treatment.
- Text must not overlap images or controls on mobile.

## Testing

Run:

- `npm run lint`
- `npm run build`
- Browser/Playwright verification:
  - Home desktop.
  - Home mobile.
  - Menu desktop.
  - Order/menu navigation click.
  - No Next overlay.
  - No relevant console errors or image quality warnings.

Visual QA:

- First viewport feels premium and conversion-focused.
- Journey still works.
- Truck asset does not look cartoonish.
- Mobile text and buttons do not overlap.
- Menu page matches homepage brand.

## Non-Goals

- No booking system.
- No CMS.
- No live schedule backend.
- No online ordering rebuild.
- No full brand identity project beyond website-level mark/assets.

## Approval Criteria

The redesign is complete when:

- Current route functionality is preserved.
- First viewport clearly beats the current professionalism bar.
- Cousins-style conversion clarity is visible: order, menu, location/catering paths.
- Bespoke assets elevate the site without making it cute.
- Lint, build, and browser checks pass.
