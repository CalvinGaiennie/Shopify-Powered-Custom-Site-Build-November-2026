import { getMailchimpConfig } from "@/lib/env";
import { createHash } from "crypto";

export type SubscribeResult =
  | { ok: true; status: "subscribed" | "already_subscribed" }
  | { ok: false; error: string; code: "not_configured" | "invalid_email" | "api_error" };

function subscriberHash(email: string): string {
  return createHash("md5").update(email.toLowerCase()).digest("hex");
}

export async function subscribeToMailchimp(email: string): Promise<SubscribeResult> {
  const normalized = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalized)) {
    return { ok: false, error: "Please enter a valid email address.", code: "invalid_email" };
  }

  const { isConfigured, apiKey, audienceId, serverPrefix } = getMailchimpConfig();

  if (!isConfigured) {
    return {
      ok: false,
      error:
        "Newsletter signup is not configured yet. Add Mailchimp environment variables to enable subscriptions.",
      code: "not_configured",
    };
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: normalized,
      status: "subscribed",
    }),
  });

  if (response.ok) {
    return { ok: true, status: "subscribed" };
  }

  const payload = (await response.json().catch(() => null)) as
    | { title?: string; detail?: string; status?: number }
    | null;

  if (payload?.title === "Member Exists") {
    return { ok: true, status: "already_subscribed" };
  }

  return {
    ok: false,
    error: payload?.detail ?? payload?.title ?? "Unable to subscribe right now.",
    code: "api_error",
  };
}

export function getMailchimpPreviewStatus() {
  return getMailchimpConfig().isConfigured;
}

export { subscriberHash };