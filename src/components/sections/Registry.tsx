import { registry } from "@/data/wedding";

/** Olive band: the note on the left, the banking card on the right. */
export function Registry() {
  return (
    <section id="registry" className="bg-olive-800 px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
        <div>
          <h2 className="uppercase text-center text-[clamp(1.9rem,5vw,3.4rem)] text-paper-100 lg:text-left">
            {registry.title}
          </h2>

          <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-paper-200/90">
            {registry.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="font-script mt-12 text-[clamp(1.15rem,2.2vw,1.5rem)] text-paper-200/75">
            {registry.thanks}
          </p>
        </div>

        <dl className="rounded-[10px] bg-olive-200/95 px-8 py-10 text-center sm:px-12">
          {registry.bank.map((row) => (
            <div key={row.label} className="py-2">
              <dt className="sr-only">{row.label}</dt>
              <dd className="text-[1.05rem] leading-relaxed tracking-[0.03em] text-paper-50">
                <span >{row.label}: </span>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
