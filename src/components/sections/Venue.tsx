import Image from "next/image";
import { venue } from "@/data/wedding";

/** The line drawing, given room, with the address set quietly beneath. */
export function Venue() {
  return (
    <section id="venue" className="bg-paper-50 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1180px] text-center">
        <h2 className="uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-bronze-600">
          {venue.title}
        </h2>

        <div className="relative mx-auto mt-14 aspect-[3/2] w-full max-w-[1000px]">
          <Image
            src={venue.drawing}
            alt="Line drawing of the Tjirp Venue ceremony space, looking down the aisle"
            fill
            sizes="(max-width: 1024px) 92vw, 1000px"
            className="object-contain"
          />
        </div>

        <p className="mt-10 text-lg uppercase tracking-wider-caps text-bronze-600">{venue.name}</p>
        <p className="mt-1.5 text-base tracking-[0.1em] text-bronze-400">{venue.address}</p>
      </div>
    </section>
  );
}
