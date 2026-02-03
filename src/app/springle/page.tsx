import s from "./Springle.module.scss";
import { HeroSpringleSection } from "@/components/sections/springle/HeroSpringleSection";
import { UltimateStorySection } from "@/components/sections/springle/UltimateStorySection";
import { SpringleProductsSection } from "@/components/sections/springle/SpringleProductsSection";
import { CorporateSportSection } from "@/components/sections/springle/CorporateSportSection";
import { MovementSection } from "@/components/sections/springle/MovementSection";
import { VideoSpringleSection } from "@/components/sections/springle/VideoSpringleSection";
import { GalleryStripSection } from "@/components/sections/springle/GalleryStripSection";
import { ContactSpringleSection } from "@/components/sections/springle/ContactSpringleSection";

const Page = () => {
  return (
    <main>
      <HeroSpringleSection />

      <div className={s.bg_orange}>
        <UltimateStorySection />
        <SpringleProductsSection />
        <CorporateSportSection />
        <MovementSection />
        <VideoSpringleSection />
        <GalleryStripSection />
        <ContactSpringleSection />
      </div>
    </main>
  );
};

export default Page;
