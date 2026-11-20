import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <nav aria-label="Social">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-[0.18em] md:gap-6 md:text-sm">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-white/90 transition hover:text-white"
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center text-xs text-white/60 md:text-sm">{siteConfig.copyright}</p>
      </div>
    </footer>
  );
}