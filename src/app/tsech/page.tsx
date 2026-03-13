
import s from "./Tsech.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "@/components/sections/tsech/Hero";
import Projects from "@/components/sections/tsech/Projects";
import Studio from "@/components/sections/tsech/Studio";
import StudioKv from "@/components/sections/tsech/StudioKv";
import Location from "@/components/sections/tsech/Location";
import Team from "@/components/sections/tsech/Team";
import Logos from "@/components/sections/tsech/Logos";
import Achievements from "@/components/sections/tsech/Achievements";
import Socials from "@/components/sections/tsech/Socials";
import Footer from "@/components/layout/Footer";
import Kino from "@/components/sections/tsech/Kino";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://gribanov.com/"),
  title: "Юрий Грибанов — сооснователь киношколы и студии ЦЕХ",
  description:
    "ЦЕХ — это экосистема проектов в сфере медиа-контента: продакшн полного цикла, дополнительное образование в сфере кино, аренда съёмочных локаций.",
  openGraph: {
    title: "Юрий Грибанов — сооснователь киношколы и студии ЦЕХ",
    description:
      "ЦЕХ — это экосистема проектов в сфере медиа-контента: продакшн полного цикла, дополнительное образование в сфере кино, аренда съёмочных локаций.",
    siteName: "Юрий Грибанов — серийный предприниматель",
    images: [
      {
        url: "/soc.png",
        width: 1200,
        height: 630,
        alt: "Юрий Грибанов — сооснователь киношколы и студии ЦЕХ",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Юрий Грибанов — сооснователь киношколы и студии ЦЕХ",
    description:
      "ЦЕХ — это экосистема проектов в сфере медиа-контента: продакшн полного цикла, дополнительное образование в сфере кино, аренда съёмочных локаций.",
    images: ["/soc.png"],
  },
};

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <div className={s.bg}>
          <Projects />
          <Studio />

          <Kino />

          <StudioKv />
          <Location />
          <Team />
          <Logos />
          <Achievements />
          <Socials />
        </div>
      </main>
      <Footer background="#1e1e1e" />
    </>
  );
};

export default page;
