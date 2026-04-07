# Style Guide (Living)

## Core Principles
- Restraint: fewer elements, more breathing room; tight grid with generous whitespace.
- Calm palette: off-white base, charcoal ink, one accent (muted vermilion or deep sea green).
- Typography: single strong serif or neo-grotesk pairing; plenty of line-height; letterspacing slightly relaxed on headings.
- Motion: gentle ease (e.g., `cubic-bezier(0.33, 1, 0.68, 1)`), short durations (~200–320ms), fades/slide-ups only.
- Materials: consider paper texture or subtle grain; avoid heavy shadows, use soft ambient glows.
- Icons: simple strokes; align to text baseline; avoid gradients unless extremely subtle.

## Layout & Spacing
- Use a 4px base scale; common steps: 8, 12, 16, 24, 32, 48, 64.
- Max content width ~1100–1200px; center align with generous padding (`clamp(16px, 5vw, 64px)`).
- Sections breathe: `padding-block` around 80–120px for desktop, reduce to 48–72px mobile.
- Grid: two-column for hero/about on desktop; single column on mobile with stacked order.

## Color Tokens (proposed)
- `--ink`: `#0f172a` (charcoal navy).
- `--paper`: `#f7f5f0` (warm off-white).
- `--accent`: `#d4492f` (muted vermilion) or `#147a6c` (deep sea green); use sparingly for links/CTA.
- `--lines`: `#e5dfd4` (hairline dividers) for subtle structure.

## Typography (proposed)
- Headings: consider `\"Canela\", \"Cormorant Garamond\", \"Sora\"` (depending on available licenses). Fall back to `\"Playfair Display\"` or `\"DM Serif Display\"`.
- Body: `\"Soehne\", \"Inter\", \"Neue Haas Grotesk\"` fallback to `\"Source Sans 3\"` or system stack.
- Body size: `16–18px`; headings scaled via clamp, e.g., `h1: clamp(32px, 6vw, 56px)`, `h2: clamp(24px, 4vw, 40px)`.
- Tracking: slight positive letterspacing on headings (`0.5–1px`), normal on body.

## Interaction & Motion
- Hover: low-amplitude translateY (-2 to -4px) with subtle shadow glow; links shift to accent color with underline animation.
- Page load: staggered fade/slide-up for hero text and primary CTA.
- Scroll: consider anchor-based navigation with smooth scroll; avoid parallax.

## Components (early thoughts)
- Hero: left-aligned text, right minimal graphic/shape; CTA as ghost button with accent border.
- Project cards: simple frames with thumbnail, title, tags; on hover, slight lift and reveal of a muted accent line.
- About: portrait/illustration in a soft circle/square with thin stroke; concise narrative.
- Footer: slim bar with contact links and minimal icons; microcopy for availability.

## Accessibility
- Target contrast ratio AA+; ensure accent on paper meets contrast; provide focus outlines with offset stroke.
- Motion: respect `prefers-reduced-motion`; reduce transform distances and disable non-essential animations.
- Typography: avoid too-light weights; use 400–600 for body, 600–700 for headings.
