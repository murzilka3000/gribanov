import "swiper/css";
import "swiper/css/navigation";
import { HeroSpeakerSection } from "@/components/sections/speaker/HeroSpeakerSection";
import { TasksSpeakerSection } from "@/components/sections/speaker/TasksSpeakerSection";
import { TopicsSpeakerSection } from "@/components/sections/speaker/TopicsSpeakerSection";
import { RecentSpeakerSection } from "@/components/sections/speaker/RecentSpeakerSection";
import { ReviewsSpeakerSection } from "@/components/sections/speaker/ReviewsSpeakerSection";
import { ContactSpeakerSection } from "@/components/sections/speaker/ContactSpeakerSection";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gribanov.com/"),
  title: "Юрий Грибанов — предприниматель-практик и публичный спикер",
  description:
    "Выступления о финансовом рынке, управленческих решениях и создании устойчивых бизнес-систем.",
  openGraph: {
    title: "Юрий Грибанов — предприниматель-практик и публичный спикер",
    description:
      "Выступления о финансовом рынке, управленческих решениях и создании устойчивых бизнес-систем.",
    siteName: "Юрий Грибанов — серийный предприниматель",
    images: [
      {
        url: "/soc.png",
        width: 1200,
        height: 630,
        alt: "Юрий Грибанов — предприниматель-практик и публичный спикер",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Юрий Грибанов — предприниматель-практик и публичный спикер",
    description:
      "Выступления о финансовом рынке, управленческих решениях и создании устойчивых бизнес-систем.",
    images: ["/soc.png"],
  },
};

const Page = () => {
  return (
    <>
      <main>
        <HeroSpeakerSection />
        <TasksSpeakerSection />
        <TopicsSpeakerSection />
        <RecentSpeakerSection />
        <ReviewsSpeakerSection />
        <ContactSpeakerSection />
      </main>
      <Footer background="#173969" />
    </>
  );
};

export default Page;
