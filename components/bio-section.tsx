import { bioParagraphs } from "@/data/site";

export function BioSection() {
  return (
    <section id="bio" className="bg-black px-4 py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="text-center font-display text-2xl tracking-[0.12em] md:text-3xl">
          MICHAEL SCOTT BOUDREAUX
        </h2>
        <div className="space-y-5 text-base leading-relaxed text-white/90 md:text-lg">
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}