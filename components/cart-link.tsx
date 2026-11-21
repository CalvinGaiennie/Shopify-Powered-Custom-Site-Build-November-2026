import Link from "next/link";
import { getShopifyCartUrl } from "@/lib/shopify";

export function CartLink() {
  const cartUrl = getShopifyCartUrl();

  if (cartUrl) {
    return (
      <Link
        href={cartUrl}
        className="border border-white px-3 py-1.5 font-display text-xs tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
      >
        CART
      </Link>
    );
  }

  return (
    <Link
      href="#merch"
      className="border border-white/40 px-3 py-1.5 font-display text-xs tracking-[0.18em] text-white/70 transition hover:border-white hover:text-white"
      title="Shopify cart will open once store credentials are configured"
    >
      CART
    </Link>
  );
}