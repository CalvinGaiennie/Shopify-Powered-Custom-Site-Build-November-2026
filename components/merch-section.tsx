import Image from "next/image";
import Link from "next/link";
import { getMerchProducts, getShopifyCartUrl } from "@/lib/shopify";

export async function MerchSection() {
  const { products, source } = await getMerchProducts(3);
  const cartUrl = getShopifyCartUrl();

  return (
    <section id="merch" className="border-t border-white/10 bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="font-display text-2xl tracking-[0.18em] md:text-3xl">MERCH</h2>
          <p className="text-sm text-white/70 md:text-base">
            {source === "shopify"
              ? "Featured items from the Shopify store."
              : "Preview grid — connect Shopify Storefront credentials to load live products."}
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col border border-white/15 bg-white/[0.03] p-4"
            >
              <div className="relative mb-4 aspect-square w-full bg-white/5">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-display text-xs tracking-[0.2em] text-white/40">
                    MSB
                  </div>
                )}
              </div>
              <h3 className="font-display text-sm tracking-[0.12em]">{product.title}</h3>
              <p className="mt-1 text-sm text-white/75">{product.price}</p>
              <Link
                href={product.url}
                className="mt-4 border border-white/50 px-3 py-2 text-center font-display text-[10px] tracking-[0.18em] transition hover:border-white hover:bg-white hover:text-black"
              >
                VIEW
              </Link>
            </li>
          ))}
        </ul>

        {cartUrl ? (
          <div className="text-center">
            <Link
              href={cartUrl}
              className="inline-block border border-white px-6 py-2.5 font-display text-xs tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              OPEN SHOP CART
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}