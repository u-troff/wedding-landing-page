"use client";

import { useState } from "react";
import Image from "next/image";
import { rsvp } from "@/data/wedding";
import { Monogram } from "@/components/ui/Monogram";

const f = rsvp.fields;

/**
 * Sage ground, cream card, underlined fields.
 *
 * No submission endpoint is wired up yet — the form validates and shows
 * a confirmation, but nothing is sent or stored anywhere. Point
 * `handleSubmit` at a form service or an API route before sharing this
 * with guests.
 */
export function Rsvp() {
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="rsvp" className="relative isolate overflow-hidden px-6 py-24 lg:py-28">
      <Image
        src="/photos/embrace.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-20 scale-105 object-cover object-center blur-sm"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-olive-400/94" />

      <div className="mx-auto max-w-[760px]">
        <h2 className="text-center uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-olive-800">
          {rsvp.title}
        </h2>

        <div className="mt-10 bg-paper-200 px-7 py-12 sm:px-14 sm:py-14">
          <p className="text-center text-[1.05rem] text-bronze-600">
            {rsvp.deadlineLead}{" "}
            <strong className="font-semibold">{rsvp.deadline}</strong>.
          </p>

          <div className="mt-7 space-y-1 text-center text-[1.05rem] text-bronze-600">
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
                <legend className="text-sm font-semibold uppercase tracking-wider-caps text-bronze-600">
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
                      className="flex cursor-pointer items-center gap-3 text-sm uppercase tracking-wider-caps text-bronze-600"
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
              <Field
                id="contact"
                label={f.contact.label}
                placeholder={f.contact.placeholder}
                required
              />

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="text-[1.6rem] uppercase tracking-[0.08em] text-bronze-600 transition-opacity hover:opacity-65"
                >
                  {rsvp.submit}
                </button>
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
}: {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold uppercase tracking-wider-caps text-bronze-600"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-olive-600/35 bg-transparent pb-2 text-[1.05rem] text-olive-800 placeholder:italic placeholder:text-olive-600/55 focus:border-bronze-600 focus:outline-none"
      />
    </div>
  );
}
