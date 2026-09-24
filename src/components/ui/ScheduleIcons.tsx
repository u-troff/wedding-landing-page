import type { ScheduleIcon } from "@/data/wedding";

/**
 * The couple's own hand-drawn artwork (public/icons/icon 1–6.svg),
 * cropped to each drawing's ink bounds. Matched to the schedule by
 * subject: the just-married car for arrival, the ring hands for the
 * ceremony, the champagne tower for canapes, the clinking flutes for
 * the reception toast, the disco ball for the party, and the couple
 * driving off for when the venue closes.
 */
const files: Record<ScheduleIcon, string> = {
  arrival: "/icons/icon%201.svg",
  ceremony: "/icons/icon%202.svg",
  canapes: "/icons/icon%203.svg",
  reception: "/icons/icon%204.svg",
  party: "/icons/icon%205.svg",
  closes: "/icons/icon%206.svg",
};

export function ScheduleIconGlyph({ name }: { name: ScheduleIcon }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={files[name]} alt="" aria-hidden="true" className="h-24 w-auto" />
  );
}
