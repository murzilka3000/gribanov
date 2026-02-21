"use client";
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
