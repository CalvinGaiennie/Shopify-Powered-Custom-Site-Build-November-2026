import Link from "next/link";
import { getShopifyCartUrl } from "@/lib/shopify";

type Props = {
  className?: string;
};

export function CartLink({ className = "" }: Props) {
  const cartUrl = getShopifyCartUrl();

  const shared =
    "border border-white/80 px-2.5 py-1 font-display tracking-[0.18em] text-white transition hover:bg-white hover:text-black md:px-3 md:py-1.5";

  if (cartUrl) {
    return (
      <Link href={cartUrl} className={`${shared} text-xs ${className}`}>
        CART
      </Link>
    );
  }

  return (
    <Link
      href="#merch"
      className={`${shared} border-white/50 text-white/80 hover:border-white hover:text-white text-xs ${className}`}
      title="Shopify cart will open once store credentials are configured"
    >
      CART
    </Link>
  );
}