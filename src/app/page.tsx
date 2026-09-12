import { Hero } from "@/components/sections/Hero";
import { SpecialDay } from "@/components/sections/SpecialDay";
import { OurStory } from "@/components/sections/OurStory";
import { Schedule } from "@/components/sections/Schedule";
import { Venue } from "@/components/sections/Venue";
import { Accomodation } from "@/components/sections/Accomodation";
import { Questions } from "@/components/sections/Questions";
import { Registry } from "@/components/sections/Registry";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { Rsvp } from "@/components/sections/Rsvp";
import { Countdown } from "@/components/sections/Countdown";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialDay />
      <OurStory />
      <Schedule />
      <Venue />
      <Accomodation />
      <Questions />
      <Registry />
      <PhotoStrip />
      <Rsvp />
      <Countdown />
    </>
  );
}
