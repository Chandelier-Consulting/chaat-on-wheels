# Dual Homepage Redesign Design

## Goal

Build two client-reviewable homepage versions for Chaat On Wheels:

- `/premium`: premium editorial restaurant-style homepage.
- `/journey`: professional Indian street-food truck journey homepage.
- `/`: simple variant selector so the client can compare both.

## Customer Impact

The client gets two polished directions instead of one compromised page. Both versions make the main actions obvious: order, view menu, get directions, call, and request catering.

## Shared Rules

- Keep the existing Next.js, Tailwind, and Framer Motion stack.
- Use generated or existing high-quality food/truck imagery.
- Keep CTAs visible and simple.
- Use Indian street-food colors with restraint: saffron, chili red, leaf green, charcoal, warm paper.
- Use sideways section text and left progress inspired by the reference site without copying content or brand.
- Preserve mobile usability with bottom order/call actions.

## Version A: Premium Editorial

Premium Editorial should feel like a serious restaurant brand. It uses full-bleed food imagery, charcoal and white sections, oversized serif headlines, generous spacing, and a subtle vertical progress rail.

Section order:

1. Hero with full-bleed food/truck image, primary order CTA, secondary menu CTA.
2. Three action paths: order pickup, find the truck, cater an event.
3. Large featured dish section.
4. Catering section.
5. Locations section.

## Version C: Truck Journey

Truck Journey should feel ownable and memorable while staying professional. It uses route motion, a branded truck visual, strong Indian color, sideways labels, and a scroll progress feel.

Section order:

1. Hero with route/truck visual, primary find/order CTA, secondary catering CTA.
2. Scroll journey with stops for lunch, chai, family pickup, catering.
3. Top dishes.
4. Locations.
5. Catering close.

## Implementation Notes

- Create shared content constants for links, locations, CTAs, dishes, and route stops.
- Create focused reusable components for header, CTAs, image frames, side progress rail, and mobile action bar.
- Keep the current menu page working.
- Do not add new dependencies.

## Verification

- Run lint and build.
- Run local dev server.
- Check `/`, `/premium`, `/journey`, and `/menu`.
- Verify desktop and mobile screenshots.
- Confirm order/menu/directions/call links are visible and clickable.
