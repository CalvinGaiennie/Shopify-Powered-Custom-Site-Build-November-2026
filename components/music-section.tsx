import { spotifyEmbeds } from "@/data/site";

export function MusicSection() {
  return (
    <section id="music" className="bg-msb-brown px-4 py-24 text-white md:py-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 md:gap-20">
        {spotifyEmbeds.map((item) => (
          <figure key={item.embedPath} className="flex w-full flex-col items-center gap-5 md:gap-6">
            <figcaption className="font-display text-center text-base tracking-[0.12em] text-white/95 md:text-lg">
              {item.caption}
            </figcaption>
            <iframe
              title={`Spotify — ${item.title}`}
              className="w-full max-w-4xl border-0"
              src={`https://open.spotify.com/embed/${item.embedPath}?utm_source=generator&theme=0`}
              width="100%"
              height={item.height}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}