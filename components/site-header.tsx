import Image from "next/image";
import Link from "next/link";
import { assets, navLinks } from "@/data/site";
import { CartLink } from "@/components/cart-link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 md:gap-5 md:py-5">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="hidden flex-1 md:block" aria-hidden />

          <Link href="#home" className="shrink-0">
            <Image
              src={assets.logo}
              alt="Michael Scott Boudreaux"
              width={140}
              height={140}
              className="h-14 w-auto md:h-[70px]"
              priority
            />
          </Link>

          <div className="flex flex-1 justify-end">
            <CartLink />
          </div>
        </div>

        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-xs tracking-[0.22em] text-white transition hover:text-white/70 md:text-sm"
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