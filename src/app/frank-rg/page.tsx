import { HeroRgSection } from "@/components/sections/frank-rg/HeroRgSection";
import { MapSection } from "@/components/sections/frank-rg/MapSection";
import { AdvantagesSection } from "@/components/sections/frank-rg/AdvantagesSection";
import { ProductsSection } from "@/components/sections/frank-rg/ProductsSection";
import { PremiumAwardSection } from "@/components/sections/frank-rg/PremiumAwardSection";
import { CultureSection } from "@/components/sections/frank-rg/CultureSection";
import { ShopSection } from "@/components/sections/frank-rg/ShopSection";
import { TeamGameSection } from "@/components/sections/frank-rg/TeamGameSection";
import { CinemaSection } from "@/components/sections/frank-rg/CinemaSection";
import Footer from "@/components/layout/Footer";

const Page = () => {
  return (
    <>
      <main>
        <HeroRgSection />
        <MapSection />
        <AdvantagesSection />
        <ProductsSection />
        <PremiumAwardSection />
        <CultureSection />
        <ShopSection />
        <TeamGameSection />
        <CinemaSection />
      </main>
      <Footer background="#173969" />
    </>
  );
};

export default Page;
