"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavLink } from "@/data/site";

type Props = {
  links: readonly NavLink[];
};

export function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span
          className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      <MobileNavPanel open={open} links={links} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileNavPanel({
  open,
  links,
  onClose,
}: {
  open: boolean;
  links: readonly NavLink[];
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      id="mobile-nav-panel"
      className="fixed inset-0 z-[110] bg-msb-brown/98 backdrop-blur-md md:hidden"
      onClick={onClose}
    >
      <nav
        aria-label="Mobile"
        className="flex min-h-full flex-col items-center justify-center gap-8 px-6"
        onClick={(event) => event.stopPropagation()}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-display text-sm tracking-[0.28em] text-white transition hover:text-white/70"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}