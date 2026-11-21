import Image from "next/image";
import { assets } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <Image
        src={assets.heroPhoto}
        alt="Michael Scott Boudreaux performing outdoors in Louisiana"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pb-16 pt-40">
        <Image
          src={assets.heroName}
          alt="Michael Scott Boudreaux"
          width={900}
          height={320}
          className="h-auto w-full max-w-4xl"
          priority
        />
      </div>
    </section>
  );
}