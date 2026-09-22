import Image from "next/image";
import { photoStrip } from "@/data/wedding";

/**
 * The horizontal scroll bar from the uploaded concept: one continuous
 * edge-to-edge strip of alternating portrait and landscape crops, all
 * sharing a single height so the top and bottom edges stay flush.
 *
 * It scrolls by hand rather than on a timer — guests drag, swipe or
 * use the visible scrollbar to move through every photo from the
 * shoot at their own pace, with gentle snapping so a photo never sits
 * half off-screen.
 */
export function PhotoStrip() {
  return (
    <section className="bg-paper-100 py-20 lg:py-24">
      <h2 className="px-6 text-center uppercase text-[clamp(1.6rem,4vw,2.6rem)] text-bronze-600">
        {photoStrip.title}
      </h2>

      <p className="mt-3 px-6 text-center text-sm uppercase tracking-wider-caps text-olive-600/70">
        Scroll or swipe through the gallery
      </p>

      <div className="photo-strip-scroll mt-12 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6">
        {photoStrip.photos.map((photo, i) => (
          <figure
            key={photo.src}
            className="relative h-[220px] shrink-0 snap-center overflow-hidden sm:h-[280px] lg:h-[330px]"
            style={{
              aspectRatio: photo.orientation === "landscape" ? "3 / 2" : "3 / 4",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 40vw, 500px"
              className="object-cover"
              priority={i < 2}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
