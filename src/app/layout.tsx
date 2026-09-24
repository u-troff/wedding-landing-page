import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Melissa & Ashton · 27 March 2027",
  description:
    "Melissa and Ashton are getting married on 27 March 2027 at Tjirp Venue, Parys. Schedule, venue, accommodation, questions and RSVP.",
  openGraph: {
    title: "Melissa & Ashton · 27 March 2027",
    description:
      "Join us at Tjirp Venue, Parys on 27 March 2027. Find the schedule, places to stay and RSVP.",
    type: "website",
    images: ["/photos/hero.png"],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
