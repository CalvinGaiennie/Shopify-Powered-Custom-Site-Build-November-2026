import { spotifyEmbeds } from "@/data/site";

export function MusicSection() {
  return (
    <section id="music" className="bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        {spotifyEmbeds.map((item) => (
          <figure key={item.embedPath} className="flex flex-col items-center gap-3">
            <figcaption className="text-center text-sm text-white/90 md:text-base">
              {item.caption}
            </figcaption>
            <iframe
              title={`Spotify — ${item.title}`}
              className="w-full max-w-xl rounded-xl"
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