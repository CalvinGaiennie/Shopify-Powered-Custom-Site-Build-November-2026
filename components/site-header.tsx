import Image from "next/image";
import Link from "next/link";
import { assets, navLinks } from "@/data/site";
import { CartLink } from "@/components/cart-link";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] isolate border-b border-white/10 bg-msb-brown/95 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-md supports-[backdrop-filter]:bg-msb-brown/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 pb-3 pt-3 md:gap-4 md:pb-4 md:pt-4">
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

        <nav
          aria-label="Main"
          className="hidden w-full border-t border-white/10 pt-3 md:block md:pt-4"
        >
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