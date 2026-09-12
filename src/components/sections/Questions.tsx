import { questions } from "@/data/wedding";

/** **bold** spans in the copy become emphasis without needing markdown. */
function RichLine({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-olive-800">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/**
 * Two columns on desktop reading left-to-right in pairs, exactly as the
 * board lays them out; a single column on narrow screens.
 */
export function Questions() {
  return (
    <section id="questions" className="bg-paper-100 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="text-center uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-bronze-600">
          {questions.title}
        </h2>

        <dl className="mt-16 grid gap-x-20 gap-y-14 md:grid-cols-2">
          {questions.items.map((item) => (
            <div key={item.q} className="text-center">
              <dt className="text-[1.05rem] font-semibold tracking-[0.05em] text-olive-800 underline decoration-olive-800/50 decoration-1 underline-offset-[6px]">
                {item.q}
              </dt>
              <dd className="mt-5 space-y-2.5 text-[1.02rem] leading-relaxed text-olive-600">
                {item.a.map((line) => (
                  <p key={line}>
                    <RichLine text={line} />
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
