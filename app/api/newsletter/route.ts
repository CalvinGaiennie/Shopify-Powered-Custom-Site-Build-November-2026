import { NextResponse } from "next/server";
import { subscribeToMailchimp } from "@/lib/mailchimp";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body.", code: "invalid_body" },
      { status: 400 },
    );
  }

  const email = (body as { email?: string }).email;

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { ok: false, message: "Email is required.", code: "invalid_email" },
      { status: 400 },
    );
  }

  const result = await subscribeToMailchimp(email);

  if (!result.ok) {
    const status = result.code === "not_configured" ? 503 : 400;
    return NextResponse.json(
      { ok: false, message: result.error, code: result.code },
      { status },
    );
  }

  const message =
    result.status === "already_subscribed"
      ? "You are already on the list."
      : "Thanks for signing up.";

  return NextResponse.json({ ok: true, message, code: result.status });
}