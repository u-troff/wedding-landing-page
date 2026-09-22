import Image from "next/image";
import { accomodation } from "@/data/wedding";

/**
 * Five places: a row of three, then two centred beneath, matching the
 * board. The hero photograph returns as a pale veiled ground.
 */
export function Accomodation() {
  const [first, second, ...rest] = accomodation.places;
  const topRow = [first, second];

  return (
    <section id="accomodation" className="relative isolate overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <Image
        src="/photos/mountain-range.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_35%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/80" />

      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-bronze-600">
          {accomodation.title}
        </h2>

        <div className="mx-auto mt-8 max-w-[780px] space-y-4 text-center text-[1.05rem] leading-relaxed text-olive-600">
          {accomodation.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-2">
          {topRow.map((place) => (
            <StayCard key={place.name} {...place} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-12 lg:mx-auto lg:mt-14 lg:max-w-[760px]">
          {rest.map((place) => (
            <StayCard key={place.name} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StayCard({ name, image }: { name: string; image: string }) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-paper-200 shadow-[0_20px_45px_-25px_rgba(64,64,20,0.4)]">
        <Image
          src={image}
          alt={`${name} accommodation near the venue`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 340px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-5 text-center text-base uppercase tracking-wider-caps text-bronze-600">
        {name}
      </figcaption>
    </figure>
  );
}
