"use client";

import { useEffect, useState } from "react";
import { countdown, couple } from "@/data/wedding";

const TARGET = new Date(couple.dateISO).getTime();

function remaining() {
  const ms = Math.max(0, TARGET - Date.now());
  const total = Math.floor(ms / 1000);
  return [
    Math.floor(total / 86400),
    Math.floor((total % 86400) / 3600),
    Math.floor((total % 3600) / 60),
    total % 60,
  ];
}

/**
 * Ticks once a second. Starts from null rather than a computed value so
 * the server and the first client render agree — otherwise the numbers
 * would differ between the two and React would flag a mismatch.
 */
export function Countdown() {
  const [parts, setParts] = useState<number[] | null>(null);

  useEffect(() => {
    setParts(remaining());
    const id = setInterval(() => setParts(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-olive-800 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-center uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-paper-100">
          {countdown.title}
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-y-12 sm:grid-cols-4">
          {countdown.units.map((unit, i) => (
            <div key={unit} className="text-center">
              <span
                className="block font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,4.2rem)] font-light leading-none text-paper-100 tabular-nums"
                suppressHydrationWarning
              >
                {parts ? String(parts[i]) : "—"}
              </span>
              <span className="mt-3 block text-xs uppercase tracking-wider-caps text-paper-200/80 sm:text-sm">
                {unit}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm uppercase tracking-wider-caps text-paper-200/85">
          {countdown.caption}
        </p>
      </div>
    </section>
  );
}
