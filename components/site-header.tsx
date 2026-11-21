import Image from "next/image";
import Link from "next/link";
import { assets, navLinks } from "@/data/site";
import { CartLink } from "@/components/cart-link";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-msb-brown/85 via-msb-brown/50 to-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 pb-4 pt-4 md:gap-5 md:pb-5 md:pt-5">
        <div className="flex w-full items-center gap-3">
          <div className="flex w-10 shrink-0 md:w-0 md:overflow-hidden">
            <MobileNav links={navLinks} />
          </div>

          <div className="flex flex-1 justify-center md:justify-center">
            <Link href="#home" className="shrink-0">
              <Image
                src={assets.logo}
                alt="Michael Scott Boudreaux"
                width={150}
                height={150}
                className="h-12 w-auto md:h-[82px]"
                priority
              />
            </Link>
          </div>

          <div className="flex w-10 shrink-0 justify-end md:w-auto md:flex-1">
            <CartLink className="text-[10px] md:text-xs" />
          </div>
        </div>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-xs tracking-[0.28em] text-white transition hover:text-white/70 md:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}