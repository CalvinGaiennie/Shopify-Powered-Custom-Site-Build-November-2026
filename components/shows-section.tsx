import Link from "next/link";
import { bandsintownUrl } from "@/data/site";

export function ShowsSection() {
  return (
    <section id="shows" className="bg-black px-4 py-20 text-center text-white md:py-28">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="font-display text-2xl tracking-[0.2em] md:text-[2rem]">MSB SHOWS</h2>
        <p className="text-base text-white/85 md:text-lg">There are no upcoming tour dates.</p>
        <Link
          href={bandsintownUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-white px-6 py-2.5 font-display text-xs tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          MORE UPCOMING SHOWS
        </Link>
      </div>
    </section>
  );
}