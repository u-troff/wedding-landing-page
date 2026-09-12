import { schedule } from "@/data/wedding";
import { ScheduleIconGlyph } from "@/components/ui/ScheduleIcons";

/** The olive band: one icon, one time, one label — six across. */
export function Schedule() {
  return (
    <section id="schedule" className="bg-olive-800 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-center uppercase text-[clamp(1.9rem,5vw,3.4rem)] text-paper-100">
          Our Schedule
        </h2>

        <ol className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-x-4">
          {schedule.map((item) => (
            <li key={item.label} className="flex flex-col items-center text-center">
              <span className="text-paper-200">
                <ScheduleIconGlyph name={item.icon} />
              </span>
              <span className="mt-6 text-base font-medium uppercase tracking-[0.1em] text-paper-100">
                {item.time}
              </span>
              <span className="mt-1.5 text-sm uppercase tracking-wider-caps text-paper-200/85">
                {item.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
