import Image from "next/image";
import { assets } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[108vh] w-full overflow-hidden sm:min-h-[112vh]">
      <Image
        src={assets.heroPhoto}
        alt="Michael Scott Boudreaux performing outdoors in Louisiana"
        fill
        priority
        className="object-cover object-[center_68%] brightness-[1.05] saturate-[1.14] sepia-[0.09]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-msb-brown/45 via-transparent to-msb-brown/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-600/16 via-orange-500/6 to-transparent mix-blend-soft-light"
        aria-hidden
      />

      {/*
        Live Squarespace hero stacks spacer blocks (~50% + 8% + 12% of width) above the
        ornate name image so the title sits in the lower third, not vertically centered.
      */}
      <div className="relative flex min-h-[108vh] flex-col items-center px-4 pb-12 pt-28 sm:min-h-[112vh] sm:pb-14 md:pt-32">
        <div className="min-h-[54vh] w-full shrink-0 sm:min-h-[60vh] md:min-h-[66vh] lg:min-h-[70vh]" aria-hidden />
        <Image
          src={assets.heroName}
          alt="Michael Scott Boudreaux"
          width={920}
          height={330}
          className="h-auto w-full max-w-[min(92vw,860px)] shrink-0"
          priority
        />
      </div>
    </section>
  );
}