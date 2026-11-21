import Image from "next/image";
import { assets } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={assets.heroPhoto}
        alt="Michael Scott Boudreaux performing outdoors in Louisiana"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" aria-hidden />

      <div className="relative flex min-h-screen flex-col items-center justify-end px-4 pb-14 pt-36 md:justify-center md:pb-20 md:pt-44">
        <Image
          src={assets.heroName}
          alt="Michael Scott Boudreaux"
          width={920}
          height={330}
          className="h-auto w-full max-w-[min(92vw,860px)]"
          priority
        />
      </div>
    </section>
  );
}