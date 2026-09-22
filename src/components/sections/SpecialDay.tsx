import Image from "next/image";
import { couple, specialDay } from "@/data/wedding";
import { Ampersand } from "@/components/ui/Ampersand";

/** Framed portrait on the left, the welcome letter ranged right. */
export function SpecialDay() {
  return (
    <section className="bg-paper-50 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-24">
        <div className="relative mx-auto aspect-[5/7] w-full max-w-[430px] overflow-hidden">
          <Image
            src="/photos/ring.jpg"
            alt="Melissa showing her engagement ring, held close by Ashton"
            fill
            sizes="(max-width: 1024px) 90vw, 430px"
            className="object-cover"
          />
        </div>

        <div className="text-center lg:text-right">
          <h2 className="uppercase text-[clamp(1.9rem,4.6vw,3.1rem)] text-bronze-600">
            {specialDay.title}
          </h2>

          <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed text-bronze-600 sm:text-[1.15rem]">
            {specialDay.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="mt-10 text-[1.05rem] text-bronze-600">{specialDay.signOff}</p>
          <p className="font-script mt-2 flex items-baseline justify-center gap-3 text-[clamp(2rem,5vw,3rem)] leading-tight text-olive-200 lg:justify-end">
            <span>{couple.bride}</span>
            <Ampersand className="h-[0.65em] w-auto translate-y-[10%]" />
            <span>{couple.groom}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
