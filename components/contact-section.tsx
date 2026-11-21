import { getMailchimpPreviewStatus } from "@/lib/mailchimp";
import { MailchimpSignup } from "@/components/mailchimp-signup";

export function ContactSection() {
  const mailchimpConfigured = getMailchimpPreviewStatus();

  return (
    <section
      id="contact"
      className="border-t border-black/25 bg-msb-brown-elevated px-4 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="font-display text-2xl tracking-[0.18em] md:text-3xl">CONTACT</h2>
        <p className="text-base text-white/85 md:text-lg">
          Sign up for tour dates, new music, and MSB news.
        </p>
        <MailchimpSignup initiallyConfigured={mailchimpConfigured} />
      </div>
    </section>
  );
}