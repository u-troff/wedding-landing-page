"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/wedding";
import { Monogram } from "@/components/ui/Monogram";
import { cn } from "@/lib/utils";

/**
 * Fixed chrome. Over the hero it sits on the photograph with no ground
 * of its own; once the page scrolls past the hero it picks up a paper
 * background so the links stay legible.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-paper-100/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className={cn(
            "flex items-center transition-colors",
            scrolled || open ? "text-bronze-600" : "text-white",
          )}
        >
          <Monogram className="h-6" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.95rem] uppercase tracking-wider-caps transition-opacity hover:opacity-60",
                scrolled ? "text-bronze-600" : "text-white",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            className="rounded-full bg-bronze-600 px-6 py-2 text-[0.95rem] uppercase tracking-wider-caps text-paper-100 transition-colors hover:bg-bronze-700"
          >
            RSVP
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden",
            scrolled || open ? "text-bronze-600" : "text-white",
          )}
        >
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-current transition-opacity duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-current transition-transform duration-300",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <nav
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-paper-100 transition-[grid-template-rows] duration-500 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col items-center gap-6 px-6 pb-10 pt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg uppercase tracking-wider-caps text-bronze-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#rsvp"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-bronze-600 px-8 py-2.5 text-lg uppercase tracking-wider-caps text-paper-100"
              >
                RSVP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
