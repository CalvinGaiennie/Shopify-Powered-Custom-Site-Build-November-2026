import { spotifyEmbeds } from "@/data/site";

export function MusicSection() {
  return (
    <section
      id="music"
      className="border-t border-black/25 bg-msb-brown px-4 py-20 text-white md:py-28"
    >
      <div className="mx-auto flex max-w-[760px] flex-col gap-12">
        {spotifyEmbeds.map((item) => (
          <figure key={item.embedPath} className="flex flex-col items-center gap-3">
            <figcaption className="text-center text-sm text-white/90 md:text-base">
              {item.caption}
            </figcaption>
            <iframe
              title={`Spotify — ${item.title}`}
              className="w-full max-w-xl border-0"
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