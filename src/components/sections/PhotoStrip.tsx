import Image from "next/image";
import { photoStrip } from "@/data/wedding";

/**
 * The horizontal scroll bar from the uploaded concept: one continuous
 * edge-to-edge strip of alternating portrait and landscape crops, all
 * sharing a single height so the top and bottom edges stay flush.
 *
 * The row is repeated twice and translated -50%, which puts the loop
 * seam exactly at the start of the second copy — so the motion never
 * visibly jumps. Hovering pauses it, and it holds still entirely for
 * anyone who prefers reduced motion.
 */
export function PhotoStrip() {
  // Two passes per copy so the strip still fills very wide screens.
  const row = [...photoStrip.photos, ...photoStrip.photos];

  return (
    <section className="overflow-hidden bg-paper-100 py-20 lg:py-24">
      <h2 className="px-6 text-center uppercase text-[clamp(1.6rem,4vw,2.6rem)] text-bronze-600">
        {photoStrip.title}
      </h2>

      <div className="group mt-12 w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex w-max gap-4" aria-hidden={copy === 1}>
              {row.map((photo, i) => (
                <figure
                  key={`${copy}-${i}`}
                  className="relative h-[220px] shrink-0 overflow-hidden sm:h-[280px] lg:h-[330px]"
                  style={{
                    aspectRatio: photo.orientation === "landscape" ? "3 / 2" : "3 / 4",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={copy === 0 ? photo.alt : ""}
                    fill
                    sizes="(max-width: 640px) 40vw, 500px"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
