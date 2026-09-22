import { couple, footer } from "@/data/wedding";
import { Ampersand } from "@/components/ui/Ampersand";

export function Footer() {
  return (
    <footer className="bg-paper-100 px-6 py-20 text-center">
      <p className="flex items-baseline justify-center gap-3 text-3xl text-bronze-600 sm:text-4xl">
        <span className="tracking-wider-caps">{couple.bride}</span>
        <Ampersand className="h-8 translate-y-[6%] sm:h-10" />
        <span className="tracking-wider-caps">{couple.groom}</span>
      </p>
      <p className="mt-5 text-sm uppercase tracking-wider-caps text-bronze-400">
        {footer.detail}
      </p>
    </footer>
  );
}
