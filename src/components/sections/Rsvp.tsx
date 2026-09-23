"use client";

import { useState } from "react";
import Image from "next/image";
import { rsvp } from "@/data/wedding";
import { Monogram } from "@/components/ui/Monogram";

const f = rsvp.fields;

/** Sage ground, cream card, underlined fields. Submissions email the couple via Resend. */
export function Rsvp() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          attending,
          dietary: form.get("dietary"),
          song: form.get("song"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="rsvp" className="relative isolate overflow-hidden px-6 py-24 lg:py-28">
      <Image
        src="/photos/newspaper.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-olive-800/40" />

      <div className="mx-auto max-w-[840px]">
        <h2 className="text-center uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-olive-800">
          {rsvp.title}
        </h2>

        <div className="mt-10 bg-paper-200/90 px-7 py-14 sm:px-16 sm:py-16">
          <p className="text-center text-[0.95rem] text-bronze-600">
            {rsvp.deadlineLead}{" "}
            <strong className="font-semibold">{rsvp.deadline}</strong>.
          </p>

          <div className="mt-7 space-y-1 text-center text-[0.95rem] text-bronze-600">
            {rsvp.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          {sent ? (
            <p
              role="status"
              className="mt-14 text-center text-xl leading-relaxed text-bronze-600"
            >
              Thank you — your RSVP has been noted.
              <span className="mt-2 block text-base text-olive-600">
                We can&apos;t wait to celebrate with you.
              </span>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-9">
              <Field
                id="fullName"
                label={f.fullName.label}
                placeholder={f.fullName.placeholder}
                required
              />

              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-wider-caps text-bronze-600">
                  {f.attending.label}
                </legend>
                <div className="mt-4 space-y-3">
                  {(
                    [
                      ["yes", f.attending.yes],
                      ["no", f.attending.no],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-3 text-xs uppercase tracking-wider-caps text-bronze-600"
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={value}
                        checked={attending === value}
                        onChange={() => setAttending(value)}
                        className="h-4 w-4 accent-bronze-600"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field
                id="dietary"
                label={f.dietary.label}
                placeholder={f.dietary.placeholder}
              />
              <Field id="song" label={f.song.label} placeholder={f.song.placeholder} />

              <div className="pt-4 text-center">
                {error && (
                  <p role="alert" className="mb-4 text-sm text-red-700">
                    Something went wrong sending your RSVP. Please try again.
                  </p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-bronze-600 px-12 py-4 text-[1.15rem] uppercase tracking-[0.08em] text-paper-50 transition-colors hover:bg-bronze-700 disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : rsvp.submit}
                  </button>
                </div>
                <Monogram className="mx-auto mt-7 h-7 text-bronze-600" />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  required,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-wider-caps text-bronze-600"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-olive-600/35 bg-transparent pb-2 text-[0.95rem] text-olive-800 placeholder:italic placeholder:text-olive-600/55 focus:border-bronze-600 focus:outline-none"
      />
    </div>
  );
}
