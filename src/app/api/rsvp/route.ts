import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Emails each RSVP to the couple via Resend. Requires RESEND_API_KEY and
 * RSVP_TO_EMAIL in the environment; RSVP_FROM_EMAIL falls back to Resend's
 * shared test sender, which only delivers to the Resend account's own
 * verified address until a sending domain is verified.
 */
export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RSVP_TO_EMAIL;

  if (!apiKey || !to) {
    console.error("RSVP email not sent: RESEND_API_KEY or RSVP_TO_EMAIL is not configured.");
    return NextResponse.json({ error: "RSVP is not configured" }, { status: 500 });
  }

  const body = await request.json();
  const fullName = String(body.fullName ?? "").trim();
  const attending = body.attending === "no" ? "no" : "yes";
  const dietary = String(body.dietary ?? "").trim();
  const song = String(body.song ?? "").trim();

  if (!fullName) {
    return NextResponse.json({ error: "Full name is required" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RSVP_FROM_EMAIL || "RSVP <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `RSVP from ${fullName} — ${attending === "yes" ? "Attending" : "Not attending"}`,
    text: [
      `Full name: ${fullName}`,
      `Attending: ${attending === "yes" ? "Yes, wouldn't miss it!" : "Sadly, can't make it."}`,
      `Dietary requirements: ${dietary || "—"}`,
      `Song request: ${song || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send RSVP" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
