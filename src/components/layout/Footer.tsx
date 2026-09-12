import { couple, footer } from "@/data/wedding";

export function Footer() {
  return (
    <footer className="bg-paper-100 px-6 py-20 text-center">
      <p className="text-3xl text-bronze-600 sm:text-4xl">
        <span className="tracking-wider-caps">{couple.bride}</span>
        <span className="amp mx-3 text-4xl sm:text-5xl">&amp;</span>
        <span className="tracking-wider-caps">{couple.groom}</span>
      </p>
      <p className="mt-5 text-sm uppercase tracking-wider-caps text-bronze-400">
        {footer.detail}
      </p>
    </footer>
  );
}
