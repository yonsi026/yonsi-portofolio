# YONSI — Swiss Engineering Portfolio

A single-page editorial portfolio built in strict Swiss International Style: 12-column grid, oversized grotesk typography, black/white/off-white with a single engineering-red accent, thin rules, generous whitespace, minimal motion.

## Sections (one page, `/`)

1. Sticky nav — YONSI left; 01 ABOUT / 02 EXPERTISE / 03 EXPERIENCE / 04 PROJECTS / 05 SKILLS / 06 CONTACT; red dot + AVAILABLE FOR PROJECTS. Mobile: minimal full-screen menu.
2. Hero — asymmetric split. Left: label strip, display headline "I BUILD / WITH / PRECISION.", supporting line, metadata (BASED IN INDONESIA), CTAs "VIEW SELECTED WORK →" and "CONTACT ME". Right: hand-built CSS/SVG technical composition (grid lines, section marks, dimension arrows, piping/isometric linework) — no stock photos.
3. 01 / ABOUT — "A MULTIDISCIPLINARY ENGINEERING PRACTITIONER." Biography strictly from CV, plus education: Senior High School — SMA Negeri Cilegon, 1994–1995. No invented credentials.
4. 02 / EXPERTISE — numbered typographic list 01–06 (civil, structural drafting, piping, quantity surveying, site supervision, digital development), rules between rows, no cards.
5. 03 / EXPERIENCE — vertical editorial timeline, all 10 CV entries as COMPANY — ROLE — PERIOD with tight bullet scope.
6. 04 / SELECTED WORK — 6 projects (industrial warehouse, monorail hoist crane, wastewater & irrigation, cut & fill, aviation fuel piping, road & drainage) with PROJECT NUMBER / TYPE / ROLE / YEAR / SCOPE / TOOLS. Visuals are abstract SVG technical drawings labelled as illustrative, not real project documentation.
7. Engineering + Digital — split screen "FROM DRAWING BOARD TO DIGITAL INTERFACE.", ENGINEERING vs DIGITAL columns joined by a thin red line, closing line "PRECISION IS THE COMMON LANGUAGE."
8. 05 / SKILLS — grouped typographic lists (CAD/BIM, Project/Office, Engineering, Digital). No bars, no percentages.
9. Philosophy — "DRAW IT. CALCULATE IT. BUILD IT. IMPROVE IT." with short supporting text.
10. 06 / CONTACT — "LET'S BUILD SOMETHING PRECISE.", mailto jabirelsabah@gmail.com, +62 858-8344-4796, Banten Indonesia, CTA "START A CONVERSATION →".
11. Footer — YONSI / discipline strip / © 2026 YONSI / "PRECISION IN EVERY DETAIL."

## Design system

- Tokens in `src/styles.css`: paper off-white, ink black, charcoal, neutral gray, engineering red (accent used only for nav active state, section numbers, indicator, hover, small marks).
- Type: IBM Plex Sans (grotesk) + IBM Plex Mono for metadata/numbering, loaded via `<link>` in the root route.
- Radius near zero; hairline borders; consistent 12/8/4-column responsive grid with fixed margins and gutters; subtle visible grid overlay in selected sections.

## Technical notes

- Stack is TanStack Start + React + TypeScript + Tailwind v4 (this project's fixed stack, not Next.js) — same architecture goals: reusable components, semantic HTML, accessible keyboard nav.
- Page content lives in `src/routes/index.tsx` (replacing the placeholder), composed from section components under `src/components/`; content data in typed arrays under `src/data/`.
- Motion: CSS-only fade/rise on scroll via IntersectionObserver, hover underlines, line expansion. No parallax or heavy effects.
- SEO in the route `head()`: title "Yonsi — Engineering, Drafter & Full-Stack Developer", supplied meta description, og/twitter tags, canonical `/`, Person JSON-LD.
- Accessibility: skip link, focus states, contrast-safe pairings, no horizontal overflow at 320px.
