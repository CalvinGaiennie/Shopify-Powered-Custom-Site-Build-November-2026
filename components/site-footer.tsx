import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";
import { SocialIcon } from "@/components/social-icon";

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-12 text-white md:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <Link
          href="#home"
          className="font-display text-[10px] tracking-[0.32em] text-white/80 transition hover:text-white"
        >
          BACK TO TOP
        </Link>

        <nav aria-label="Social">
          <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white/10"
                  aria-label={item.label}
                >
                  <SocialIcon name={item.label} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center text-[11px] tracking-wide text-white/55 md:text-xs">
          {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}