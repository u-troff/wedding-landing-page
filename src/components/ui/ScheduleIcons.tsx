import type { ScheduleIcon } from "@/data/wedding";

/**
 * Single-weight line icons drawn to match the schedule band on the
 * design board. One 48×40 canvas, content kept between y=5 and y=35,
 * and one stroke width throughout, so the six read as a single set.
 */
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.15,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Wedding car, heart on the roof, cans trailing behind. */
function Arrival() {
  return (
    <>
      <path d="M5 31h38" {...base} />
      <path d="M9 31v-7a3.5 3.5 0 0 1 3.5-3.5h23A3.5 3.5 0 0 1 39 24v7" {...base} />
      <path d="M13.5 20.5 17 13h14l3.5 7.5" {...base} />
      <path d="M24 13v7.5" {...base} />
      <circle cx="16" cy="32.5" r="3.2" {...base} />
      <circle cx="32" cy="32.5" r="3.2" {...base} />
      <path d="M24 10.4c-1.7-2.1-4.7-1.6-4.7 1 0 2 2.7 3.9 4.7 5.1 2-1.2 4.7-3.1 4.7-5.1 0-2.6-3-3.1-4.7-1z" {...base} />
    </>
  );
}

/** Two interlocking bands with a solitaire stone. */
function Ceremony() {
  return (
    <>
      <circle cx="19" cy="23" r="9.5" {...base} />
      <circle cx="30" cy="23" r="9.5" {...base} />
      <path d="M30 11.2 27.4 8l2.6-2.6L32.6 8z" {...base} />
    </>
  );
}

/** Three-tier cake with a heart topper. */
function Canapes() {
  return (
    <>
      <path d="M12 33h24" {...base} />
      <path d="M13.5 33v-7h21v7" {...base} />
      <path d="M16 26v-6.5h16V26" {...base} />
      <path d="M18.5 19.5V14h11v5.5" {...base} />
      <path d="M24 14v-3.2" {...base} />
      <path d="M24 10.8c-1.2-1.5-3.4-1.1-3.4.7 0 1.4 2 2.8 3.4 3.6 1.4-.8 3.4-2.2 3.4-3.6 0-1.8-2.2-2.2-3.4-.7z" {...base} />
      <path d="M17 29.6h14M19.5 22.6h9" {...base} />
    </>
  );
}

/** Two champagne flutes tilted into a toast. */
function Reception() {
  const flute = (
    <>
      <path d="M-5-14.5h10L1.3 1h-2.6z" {...base} />
      <path d="M0 1v11" {...base} />
      <path d="M-4.8 12h9.6" {...base} />
    </>
  );
  return (
    <>
      <g transform="translate(17.5 20) rotate(-13)">{flute}</g>
      <g transform="translate(30.5 20) rotate(13)">{flute}</g>
    </>
  );
}

/** Disco ball on a short drop. */
function Party() {
  return (
    <>
      <circle cx="24" cy="23.5" r="11.5" {...base} />
      <path d="M12.5 23.5h23" {...base} />
      <path d="M14.2 17.6h19.6M14.2 29.4h19.6" {...base} />
      <path d="M24 12v23" {...base} />
      <path d="M18.2 12.9c-2.3 2.6-3.7 6.3-3.7 10.6s1.4 8 3.7 10.6" {...base} />
      <path d="M29.8 12.9c2.3 2.6 3.7 6.3 3.7 10.6s-1.4 8-3.7 10.6" {...base} />
      <path d="M24 12V7" {...base} />
      <path d="M20.5 7h7" {...base} />
    </>
  );
}

/** Just-married car pulling away. */
function Closes() {
  return (
    <>
      <path d="M4 31h34" {...base} />
      <path d="M8 31v-6.5A3.5 3.5 0 0 1 11.5 21h21a3.5 3.5 0 0 1 3.5 3.5V31" {...base} />
      <path d="M12.5 21 16 14h13l3.5 7" {...base} />
      <circle cx="15" cy="32.5" r="3.2" {...base} />
      <circle cx="30" cy="32.5" r="3.2" {...base} />
      <rect x="16" y="7.5" width="14" height="5.2" rx="1.2" {...base} />
      <path d="M19 10.1h8" {...base} />
      <path d="M38.5 31.5l4 2.5M42 27.5l3.5 1.5M35 34l2.5 3" {...base} />
    </>
  );
}

const icons: Record<ScheduleIcon, () => React.ReactElement> = {
  arrival: Arrival,
  ceremony: Ceremony,
  canapes: Canapes,
  reception: Reception,
  party: Party,
  closes: Closes,
};

export function ScheduleIconGlyph({ name }: { name: ScheduleIcon }) {
  const Glyph = icons[name];
  return (
    <svg viewBox="0 0 48 40" aria-hidden="true" className="h-16 w-[4.8rem] overflow-visible">
      <Glyph />
    </svg>
  );
}
