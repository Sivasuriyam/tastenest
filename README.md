# TasteNest — React Landing Page

A pixel-close React rebuild of the TasteNest restaurant landing page, with scroll reveals,
hover micro-interactions, a count-up stats section, and floating app mockups.

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

## Structure

```
src/
  components/
    Navbar.jsx        sticky nav, scroll shrink, mobile drawer
    Hero.jsx           full-bleed hero with slow ambient zoom
    About.jsx           3 alternating image/text story rows
    Features.jsx        "why choose us" icon cards
    WorkingHours.jsx    banner + hours card
    Testimonials.jsx    quote cards + interactive dots
    Stats.jsx           animated count-up numbers
    AppPromo.jsx         floating phone mockups
    Menu.jsx            food cards with hover zoom
    Newsletter.jsx      email signup with confirm state
    Footer.jsx           links, socials, newsletter
    BackToTop.jsx        floating scroll-to-top button
    Reveal.jsx          fade/rise-in-on-scroll wrapper
  hooks/
    useReveal.js         IntersectionObserver hook
  index.css             design tokens + all styling + animations
  App.jsx
  main.jsx
```

## Design notes

- Colors, spacing and type scale are set as CSS custom properties at the top of `index.css`
  (`--bg`, `--accent`, `--text`, etc.) — change them there to re-theme the whole site.
- Fonts: **Fraunces** (serif display) for headings, **Jost** (geometric sans) for body/UI,
  loaded from Google Fonts in `index.html`.
- Animations included: scroll-reveal fade/rise on every section, button fill-sweep on hover,
  image zoom on hover for story/menu cards, animated icon rotation on feature cards, floating
  phone mockups, count-up stats on scroll, sticky nav shrink + underline link hovers, and a
  back-to-top button that fades in.
- `prefers-reduced-motion` is respected — animations are disabled for users who request it.
- Photography is pulled from Unsplash/Pravatar placeholder URLs — swap the `src` values in each
  component for your own restaurant photography.
