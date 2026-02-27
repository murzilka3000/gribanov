import s from "./FrankMedia.module.scss";
import { HeroMediaSection } from "@/components/sections/frank-media/HeroMediaSection";
import { AboutSection } from "@/components/sections/frank-media/AboutSection";
import { QuoteSection } from "@/components/sections/frank-media/QuoteSection";
import { EditorsSection } from "@/components/sections/frank-media/EditorsSection";
import { StandardsSection } from "@/components/sections/frank-media/StandardsSection";
import { VideoMediaSection } from "@/components/sections/frank-media/VideoMediaSection";
import { SocialsSection } from "@/components/sections/frank-media/SocialsSection";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Юрий Грибанов — издатель СМИ Frank Media",
  description:
    "Frank Media — деловое издание о финансах и экономике. Последние  новости из мира банков и финансовых рынков в России и мире.",
  openGraph: {
    title: "Юрий Грибанов — издатель СМИ Frank Media",
    description:
    "Frank Media — деловое издание о финансах и экономике. Последние  новости из мира банков и финансовых рынков в России и мире.",
  },
};

const Page = () => {
  return (
    <>
      <main>
        <HeroMediaSection />

        <div className={s.bg}>
          <AboutSection />
          <QuoteSection />
          <EditorsSection />
          <StandardsSection />
          <VideoMediaSection />
          <SocialsSection />
        </div>
      </main>
      <Footer background="rgba(103, 92, 81, 1)" />
    </>
  );
};

export default Page;
