import Image from "next/image";
import { ourStory } from "@/data/wedding";

/**
 * The long-form story, ranged left, against two offset photo frames —
 * the layered crop motif from the design board.
 */
export function OurStory() {
  return (
    <section id="our-story" className="bg-paper-50 px-6 pb-28 lg:px-10 lg:pb-36">
      <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-20">
        <div className="text-center">
          <h2 className="text-center text-[clamp(1.9rem,4.6vw,3.1rem)] text-olive-800 [font-variant:small-caps]">
            {ourStory.title}
          </h2>

          <div className="mt-10 space-y-4 text-[1.02rem] leading-[1.75] text-olive-700 sm:text-[1.1rem]">
            {ourStory.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Layered crop frames: the back photograph is taller and set
            right, so it shows above, below and beside the front one. */}
        <div className="relative mx-auto w-full max-w-[430px] self-center">
          <div className="absolute -top-[7%] right-0 h-[114%] w-[58%] overflow-hidden rounded-[2px]">
            <Image
              src="/photos/ocean.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 1024px) 45vw, 250px"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[4/5] w-[84%] overflow-hidden rounded-[2px] shadow-[0_22px_55px_-24px_rgba(64,64,20,0.5)]">
            <Image
              src="/photos/embrace.jpg"
              alt="Melissa sitting in Ashton's arms in the fynbos at sunset"
              fill
              sizes="(max-width: 1024px) 70vw, 360px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
