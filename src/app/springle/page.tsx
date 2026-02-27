import s from "./Springle.module.scss";
import { HeroSpringleSection } from "@/components/sections/springle/HeroSpringleSection";
import { UltimateStorySection } from "@/components/sections/springle/UltimateStorySection";
import { SpringleProductsSection } from "@/components/sections/springle/SpringleProductsSection";
import { CorporateSportSection } from "@/components/sections/springle/CorporateSportSection";
import { MovementSection } from "@/components/sections/springle/MovementSection";
import { VideoSpringleSection } from "@/components/sections/springle/VideoSpringleSection";
import { GalleryStripSection } from "@/components/sections/springle/GalleryStripSection";
import { ContactSpringleSection } from "@/components/sections/springle/ContactSpringleSection";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Юрий Грибанов — сооснователь корпоративной лиги Springle",
  description:
    "Springle — проект по организации корпоративных турниров по алтимат фрисби. Алтимат фрисби — идеальный корпоративный вид спорта.",
  openGraph: {
    title: "Юрий Грибанов — сооснователь корпоративной лиги Springle",
    description:
      "Springle — проект по организации корпоративных турниров по алтимат фрисби. Алтимат фрисби — идеальный корпоративный вид спорта.",
  },
};

const Page = () => {
  return (
    <>
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
      <Footer background="#fe5a00" />
    </>
  );
};

export default Page;
