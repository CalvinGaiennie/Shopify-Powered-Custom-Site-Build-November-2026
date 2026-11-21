import Link from "next/link";

const youtubeUrl = "https://www.youtube.com/channel/UCA8yRIDebIpu9p6Icp_35Rw";

export function MediaSection() {
  return (
    <section id="media" className="border-t border-white/10 bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="font-display text-2xl tracking-[0.18em] md:text-3xl">MEDIA</h2>
        <p className="text-base leading-relaxed text-white/85 md:text-lg">
          Music videos, live clips, and behind-the-scenes updates live on YouTube and social
          channels. Full media gallery layout can mirror the current site in a later iteration.
        </p>
        <Link
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-white px-6 py-2.5 font-display text-xs tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          WATCH ON YOUTUBE
        </Link>
      </div>
    </section>
  );
}