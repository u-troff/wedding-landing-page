import Image from "next/image";
import { couple } from "@/data/wedding";

/**
 * Cinematic opening: one full-bleed photograph, the names, the date.
 * Nothing else competes for the first screen.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <Image
        src="/photos/hero.jpg"
        alt="Melissa and Ashton standing in the mountains at golden hour"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_64%]"
      />
      {/* Keeps the white type readable against the bright sky. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/25"
      />

      <div className="flex min-h-[100svh] flex-col items-center px-6 pb-12 pt-24 text-center text-white sm:pt-28">
        <h1 className="flex w-full max-w-[1150px] items-baseline justify-center gap-3 leading-[0.95] sm:gap-6">
          <span className="text-[clamp(2.1rem,8.2vw,7rem)] tracking-[0.04em]">
            {couple.bride.toUpperCase()}
          </span>
          <span className="amp text-[clamp(2.4rem,9vw,7.5rem)] font-normal">&amp;</span>
          <span className="text-[clamp(2.1rem,8.2vw,7rem)] tracking-[0.04em]">
            {couple.groom.toUpperCase()}
          </span>
        </h1>

        <p
          className="mt-7 text-[clamp(1rem,2.6vw,1.75rem)] uppercase tracking-wider-caps text-bronze-600"
          style={{ textShadow: "0 1px 14px rgba(255,255,255,0.45)" }}
        >
          {couple.announcement}
        </p>

        <p className="mt-8 text-[clamp(1.05rem,2.4vw,1.6rem)] tracking-[0.12em]">
          {couple.dateLabel}
        </p>

        <p className="mt-auto pt-16 text-xs tracking-wider-caps text-white/85 sm:text-sm">
          {couple.scrollCue}
        </p>
      </div>
    </section>
  );
}
