# Nishmitha N — Developer Portfolio (React)

Ultra-premium, black-and-white luxury portfolio built with:

- **React 18 + Vite**
- **Framer Motion** — entrance animations, magnetic buttons, mobile menu, modal transitions, scroll progress
- **GSAP + ScrollTrigger** — scroll-driven reveals, skill bar fills, timeline progress line, animated counters
- **Lenis** — smooth/inertial scrolling, synced to GSAP's ticker
- **React Icons** — all interface icons (`react-icons/fi`)
- Plain CSS3 (no Tailwind/Bootstrap/UI kits)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Adding your photo

Open `src/components/Hero.jsx` and find:

```jsx
<img
  src=""
  alt="Nishmitha N"
  ...
/>
```

Put your photo in `public/` (e.g. `public/photo.jpg`) and set `src="/photo.jpg"`.
Until a valid image is set, the hero shows a styled placeholder frame automatically.

## Project structure

```
src/
  components/     All UI sections and shared widgets (Magnetic, Reveal, CustomCursor...)
  data/content.js Single source of truth for skills, projects, timeline, achievements copy
  hooks/          useLenis, useMagnetic, CursorContext, LenisContext
  index.css       Full design system: tokens, layout, components, responsive rules
  App.jsx         Composition root: providers, preloader gate, section order
```

## Customizing content

All copy (skills, project descriptions, timeline entries, achievements, contact links) lives in
`src/data/content.js` — edit values there rather than inside components.

Project `github` / `demo` links are currently placeholders (`'#'`) inside `content.js` — update them
with your real repo and deployment URLs.

## Notes

- Reduced motion: entrance/scroll animations respect `prefers-reduced-motion` at the CSS level for the
  fade/translate utility classes; GSAP-driven effects (skill bars, timeline, counters) are lightweight
  enough to leave active, but you can gate them behind the same media query in `Reveal.jsx` if you'd like
  full compliance.
- The custom cursor is disabled below 860px viewport width (mobile/touch), matching native touch
  scrolling and tap behavior.
