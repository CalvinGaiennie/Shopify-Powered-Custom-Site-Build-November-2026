import { BioSection } from "@/components/bio-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { MediaSection } from "@/components/media-section";
import { MerchSection } from "@/components/merch-section";
import { MusicSection } from "@/components/music-section";
import { ShowsSection } from "@/components/shows-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <HeroSection />
        <ShowsSection />
        <BioSection />
        <MusicSection />
        <MediaSection />
        <MerchSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}