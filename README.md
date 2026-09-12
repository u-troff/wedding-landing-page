# Melissa & Ashton — 27 March 2027

Wedding site for Melissa & Ashton, built from the four design boards and the
uploaded photo-scroll-bar concept.

Next.js 16 (App Router, React Compiler) · React 19 · Tailwind CSS v4 · TypeScript.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What | Where |
| --- | --- |
| All copy, times, bank details, photo list | `src/data/wedding.ts` |
| Design tokens (palette, fonts) | `src/app/globals.css` |
| Page order | `src/app/page.tsx` |
| Sections | `src/components/sections/` |
| Nav, footer | `src/components/layout/` |
| MA monogram, schedule icons | `src/components/ui/` |
| Photographs | `public/photos/`, `public/stay/` |

Every word on the page comes from `src/data/wedding.ts` — copy changes never
need a component edit.

## Palette

Sampled directly from the design boards:

| Token | Value | Used for |
| --- | --- | --- |
| `olive-800` | `#404014` | Schedule, registry and countdown bands |
| `bronze-600` | `#664417` | Headings, nav pill, hero subtitle |
| `olive-600` | `#53532b` | Body copy on light grounds |
| `olive-400` | `#a0a08e` | RSVP sage ground |
| `olive-200` | `#c8c3b4` | Registry banking card |
| `paper-200` | `#e9e9e5` | RSVP card |
| `paper-300` | `#e0ddd2` | Accommodation veil |

Type: Cormorant (display) · Cormorant Garamond (body, small-caps) ·
Pinyon Script (signature and the swash ampersand).

## Things to know before this goes to guests

- **The RSVP form does not submit anywhere.** It validates and shows a
  confirmation, but nothing is sent or stored. Wire `handleSubmit` in
  `src/components/sections/Rsvp.tsx` to a form service or an API route
  before sharing the link.
- **`ring.jpg` is low resolution.** The other photographs came from the
  original files; this one had to be lifted out of design board `1.png`
  at roughly 414×576. Drop the full-size original into
  `public/photos/ring.jpg` to replace it — no code change needed.
- **"Accomodation" is spelled as it appears on the design boards** (one `m`),
  in the nav and the section heading. Same for "Dietry Requirements" and
  "We cant wait" on the RSVP card. Change them in `src/data/wedding.ts`
  if they were typos rather than choices.
- **The page is set to `noindex`** in `src/app/layout.tsx`, so search engines
  will not list it. Remove that if the couple want it findable.
- Banking details are live in `src/data/wedding.ts` and rendered in plain
  text on the page — worth a deliberate decision before publishing.
# wedding-landing-page
