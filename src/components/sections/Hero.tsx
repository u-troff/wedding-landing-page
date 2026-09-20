import Image from "next/image";
import { couple } from "@/data/wedding";

/**
 * Cinematic opening: one full-bleed photograph, the names, the date.
 * Nothing else competes for the first screen.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[140svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/photos/hero.jpg"
          alt="Melissa and Ashton standing in the mountains at golden hour"
          fill
          priority
          sizes="100vw"
          className="origin-[50%_71%] scale-[1.3] object-cover object-center lg:scale-100 lg:object-[50%_47%]"
        />
      </div>
      {/* Keeps the white type readable against the bright sky. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/25"
      />

      <div className="flex min-h-[100svh] flex-col items-center px-6 pb-6 pt-24 text-center text-white sm:pt-28 lg:pb-16">
        <h1 className="flex w-full max-w-[1150px] items-baseline justify-center gap-3 leading-[0.95] sm:gap-6">
          <span className="text-[clamp(1.7rem,6.6vw,5.6rem)] font-light tracking-[0.04em]">
            {couple.bride.toUpperCase()}
          </span>
          <span className="amp text-[clamp(2.4rem,9vw,7.5rem)] font-normal">&amp;</span>
          <span className="text-[clamp(1.7rem,6.6vw,5.6rem)] font-light tracking-[0.04em]">
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

        <p
          className="mt-auto pt-24 text-[0.65rem] tracking-wider-caps sm:text-[0.75rem]"
          style={{ color: "#C8C3B4" }}
        >
          {couple.scrollCue}
        </p>
      </div>
    </section>
  );
}
