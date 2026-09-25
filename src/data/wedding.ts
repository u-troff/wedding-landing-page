/**
 * Every word and fact on the site lives here, so copy edits never
 * touch a component. Transcribed from the Mel & Ash design boards.
 */

export const couple = {
  bride: "Melissa",
  groom: "Ashton",
  monogram: "MA",
  announcement: "Are getting married!",
  dateLabel: "27 March 2027",
  /** Wedding day, 14:00 SAST (UTC+2) — drives the countdown. */
  dateISO: "2027-03-27T14:00:00+02:00",
  scrollCue: "Continue scrolling for more information",
} as const;

export const navLinks = [
  { label: "Our Story", href: "#our-story" },
  { label: "Timeline", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  // The couple's own spelling, kept as it appears on the design board.
  { label: "Accomodation", href: "#accomodation" },
  { label: "Questions", href: "#questions" },
  { label: "Registry", href: "#registry" },
] as const;

export const specialDay = {
  title: "Our Special Day",
  paragraphs: [
    "We are so excited to celebrate this special moment in our lives with our closest friends and family. Your love and support mean the world to us, and we can't wait to share this unforgettable day with you.",
    "As we count down to our big day, we have created this website to keep you updated on all the details.",
    "Thank you for being part of our journey, we can't wait to celebrate with you!",
  ],
  signOff: "With love,",
} as const;

export const ourStory = {
  title: "Our Story",
  paragraphs: [
    "A little over two years ago, Mel & Ash met at a coffee shop.",
    "Neither of them was actually sure they were going to go that day, and neither had any idea the other would be there. But somehow, they both showed up at exactly the right place at exactly the right time.",
    "And just like that, the story of Mel & Ash began.",
    "It started with a few coffee dates, followed by milkshake runs, breakfast runs, and probably a few too many “let's just get something to eat” moments.",
    "Before they knew it, Mel & Ash decided that doing life together sounded pretty great, so they took the next big step and moved in together.",
    "and together they started building a beautiful little life. one filled with laughter, adventures, cosy moments, and all the ordinary things that somehow became their favourite things.",
    "Just over a year later, Mel & Ash found themselves in Cape Town, driving along Clarence Drive, surrounded by mountains and the most beautiful sunset.",
    "And in a moment that felt like it belonged in a movie, Ash asked Mel to spend forever with him.",
    "She said yes.",
    "And now, just over two years after two people almost decided not to go for coffee, Mel & Ash get to celebrate the beginning of their most beautiful chapter yet, surrounded by the people who have loved, supported and cheered them on along the way.",
    "From one almost-skipped coffee date to forever…",
    "This is the story of Mel & Ash.",
  ],
} as const;

export type ScheduleIcon =
  | "arrival"
  | "ceremony"
  | "canapes"
  | "reception"
  | "party"
  | "closes";

export const schedule: ReadonlyArray<{
  time: string;
  label: string;
  icon: ScheduleIcon;
}> = [
    { time: "14:00", label: "Guest Arrival", icon: "arrival" },
    { time: "15:00", label: "Ceremony", icon: "ceremony" },
    { time: "16:00", label: "Canapes", icon: "canapes" },
    { time: "18:00", label: "Reception", icon: "reception" },
    { time: "20:30", label: "Party Time", icon: "party" },
    { time: "23:30", label: "Venue Closes", icon: "closes" },
  ];

export const venue = {
  title: "The Venue",
  name: "Tjirp Venue",
  address: "422 Ventersrand Parys",
  drawing: "/photos/venue-drawing.jpg",
} as const;

export const accomodation = {
  title: "Accomodation",
  intro: [
    "We know everyone is coming a long way to be part of our day, so we've put together a few places to stay nearby to make things a little easier.",
    "Take a look through the options below and find somewhere that feels right for you.",
  ],
  places: [
    { name: "Hakuna Matata", image: "/stay/hakuna-matata.jpg", bookingUrl: "https://hakunamatataadventures.co.za" },
    { name: "Eagle's Nest", image: "/stay/eagles-nest.jpg", bookingUrl: "https://www.booking.com/hotel/za/eagles-nest-parys.html" },
    { name: "Hadeda Creek", image: "/stay/hadeda-creek.jpg", bookingUrl: "https://hadedacreek.co.za" },
    { name: "Dimalachite", image: "/stay/dimalachite.jpg", bookingUrl: "https://www.dimalachite.co.za" },
    { name: "Devondale", image: "/stay/devondale.jpg", bookingUrl: "https://www.devondale.co.za" },
  ],
} as const;

/** Ordered to match the two-column reading order of the design board. */
export const questions = {
  title: "Questions",
  items: [
    {
      q: "What is the Dress Code?",
      a: [
        "**Formal**",
        "Our wedding colours are peachy, soft pinks, warm neutrals and greenery, so feel free to dress up and complement the colour palette if you'd like!",
        "**No jeans.**",
        "We just ask that you please avoid white and ivory, as those are reserved for the bride.",
      ],
    },
    {
      q: "When do I need to RSVP by?",
      a: [
        "We can't wait to celebrate with you. Please let us know by **05 January 2027** so we can make sure there's a seat (and a slice of cake) waiting for you.",
      ],
    },
    {
      q: "What time should I arrive?",
      a: [
        "Please arrive by 14:30 so that everyone is comfortably seated before the ceremony begins.",
      ],
    },
    {
      q: "Are children allowed?",
      a: [
        "We absolutely love your little ones, but due to our limited numbers, only children who have been specifically included on the invitation are invited.",
      ],
    },
    {
      q: "Can we bring our own refreshments?",
      a: [
        "No, please do not bring your own refreshments onto the property.",
      ],
    },
    {
      q: "Can I bring a plus one?",
      a: [
        "We'd love to celebrate with everyone who is invited.",
        "Due to limited space, we kindly ask that only guests named on the invitation attend.",
      ],
    },
  ],
} as const;

export const registry = {
  title: "Registry",
  paragraphs: [
    "Having you there to celebrate with us is more than enough, your presence is truly the only gift we could ask for.",
    "For those who would still like to give something, we have chosen to put together a honeymoon fund to help us create some beautiful memories as newlyweds.",
    "If you would like to contribute, here are our banking details.",
  ],
  thanks: "Thank you for being part of our special day.",
  bank: [
    { label: "Account Holder", value: "Melissa Jane Roberts" },
    { label: "Account Type", value: "Current Account" },
    { label: "Bank", value: "Discovery Bank" },
    { label: "Branch Code", value: "679000" },
    { label: "Account Number", value: "18133650183" },
  ],
} as const;

/**
 * The horizontal strip. Every couple photo from the shoot, in one
 * scrollable row guests can drag or swipe through at their own pace.
 */
export const photoStrip = {
  photos: [
    { src: "/photos/hero.png", orientation: "portrait", alt: "Melissa and Ashton standing in the mountains at golden hour" },
    { src: "/photos/IMG_1054.JPG", orientation: "landscape", alt: "Melissa and Ashton walking hand in hand above the ocean" },
    { src: "/photos/embrace.jpg", orientation: "portrait", alt: "Melissa and Ashton sitting together in the fynbos at sunset" },
    { src: "/photos/IMG_1067.JPG", orientation: "portrait", alt: "Melissa and Ashton standing together in the mountains" },
    { src: "/photos/hands.jpg", orientation: "landscape", alt: "Their hands meeting against the sunset, engagement ring in silhouette" },
    { src: "/photos/IMG_1074.JPG", orientation: "portrait", alt: "Ashton twirling Melissa above the ocean" },
    { src: "/photos/ocean.jpg", orientation: "portrait", alt: "Melissa and Ashton forehead to forehead above the ocean" },
    { src: "/photos/IMG_1057.JPG", orientation: "portrait", alt: "Melissa and Ashton holding hands, matching tattoos on show" },
    { src: "/photos/IMG_1086.JPG", orientation: "portrait", alt: "Melissa and Ashton nose to nose in black and white" },
    { src: "/photos/ring-reveal.jpg", orientation: "portrait", alt: "Melissa showing her engagement ring in the mountains" },
    { src: "/photos/IMG_1140.JPG", orientation: "portrait", alt: "Ashton kissing Melissa on the cheek by the ocean" },
    { src: "/photos/IMG_1113.JPG", orientation: "portrait", alt: "Melissa and Ashton embracing in the fynbos at sunset" },
  ],
} as const;

export const rsvp = {
  title: "RSVP",
  deadline: "05 January 2027",
  deadlineLead: "Kindly RSVP by",
  intro: [
    "We cant wait to celebrate with you!",
    "Please let us know if you will be joining us on our special day.",
  ],
  fields: {
    fullName: { label: "Full Name:", placeholder: "Names as they appear on your invitation" },
    attending: {
      label: "Will you be joining us?",
      yes: "Yes, we wouldn't miss it!",
      no: "Sadly, we can't make it.",
    },
    dietary: { label: "Dietry Requirements:", placeholder: "Allergies, vegetarian, halaal" },
    song: { label: "Song Request:", placeholder: "What will get you onto the dance floor?" },
  },
  submit: "Submit RSVP",
} as const;

export const countdown = {
  title: "Countdown",
  caption: "Until we say I do",
  units: ["Days", "Hours", "Minutes", "Seconds"],
} as const;

export const footer = {
  detail: "27 March 2027 · Tjirp Venue, Parys",
} as const;
