import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { couple, venue } from "@/data/wedding";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Fetches a Google Font as a buffer satori can embed — the standard next/og pattern. */
async function loadGoogleFont(family: string, weight: number) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
    )
  ).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${family}`);
}

export default async function Image() {
  const photo = readFileSync(join(process.cwd(), "public/photos/embrace.jpg")).toString("base64");

  const [cormorant, cormorantMedium, pinyon] = await Promise.all([
    loadGoogleFont("Cormorant", 400),
    loadGoogleFont("Cormorant", 500),
    loadGoogleFont("Pinyon Script", 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${photo}`}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background:
              "linear-gradient(to top, rgba(20,16,6,0.75) 0%, rgba(20,16,6,0.35) 42%, rgba(20,16,6,0.05) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 66,
          }}
        >
          <div style={{ display: "flex", fontFamily: "Pinyon Script", fontSize: 58, color: "#ffffff" }}>
            Wedding Invitation
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontFamily: "Cormorant Medium",
              fontSize: 62,
              letterSpacing: 6,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            {couple.bride} &amp; {couple.groom}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontFamily: "Cormorant",
              fontSize: 28,
              letterSpacing: 5,
              color: "#f2ede1",
              textTransform: "uppercase",
            }}
          >
            {couple.dateLabel}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontFamily: "Cormorant",
              fontSize: 22,
              letterSpacing: 4,
              color: "#d9d2c0",
              textTransform: "uppercase",
            }}
          >
            {venue.name} · {venue.address}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: cormorant, weight: 400, style: "normal" },
        { name: "Cormorant Medium", data: cormorantMedium, weight: 500, style: "normal" },
        { name: "Pinyon Script", data: pinyon, weight: 400, style: "normal" },
      ],
    },
  );
}
