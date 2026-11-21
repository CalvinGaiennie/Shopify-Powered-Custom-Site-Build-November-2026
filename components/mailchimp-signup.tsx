"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Props = {
  initiallyConfigured: boolean;
};

export function MailchimpSignup({ initiallyConfigured }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        code?: string;
      };

      if (data.ok) {
        setStatus("success");
        setMessage(data.message ?? "Thanks for signing up.");
        setEmail("");
        return;
      }

      setStatus("error");
      setMessage(data.message ?? "Unable to subscribe right now.");
    } catch {
      setStatus("error");
      setMessage("Unable to subscribe right now. Please try again later.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      {!initiallyConfigured ? (
        <p className="text-center text-xs tracking-wide text-white/50">
          Newsletter preview — Mailchimp credentials connect on the server when added.
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="min-w-0 flex-1 border border-white/30 bg-msb-brown px-3 py-2.5 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-white px-5 py-2.5 font-display text-xs tracking-[0.2em] text-white transition hover:bg-white hover:text-msb-brown disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "SENDING…" : "JOIN LIST"}
        </button>
      </form>

      {message ? (
        <p
          role="status"
          className={`text-center text-sm ${
            status === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}