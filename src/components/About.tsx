"use client";

import { useState, useEffect } from "react";
import s from "@/app/about/About.module.scss";
import Footer from "@/components/layout/Footer";
import clsx from "clsx";
import Slider from "@/components/sections/about/Slider";
import SliderMob from "@/components/sections/about/SliderMob";
import { BooksSection } from "@/components/sections/home/BooksSection";
import { TelegramSection } from "@/components/sections/home/TelegramSection";
import { CharitySection } from "@/components/sections/about/CharitySection";
import Founder from "@/components/sections/about/Founder";
import Values from "@/components/sections/about/Values";
import Benefits from "@/components/sections/about/Benefits";
import Section_11 from "@/components/sections/about/Section_11";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main>
        <section className={clsx(s.about, "section_padding")}></section>
        <div className={s.bg}>
          <Founder />

          {isMounted && (isMobile ? <SliderMob /> : <Slider />)}

          <Values />
          <Benefits />
          <BooksSection />
          <div className={s.m153}></div>
          <CharitySection />
          <Section_11 />
          <div className={s.m120}></div>
          <TelegramSection />
        </div>
      </main>
      <Footer background="#173969" />
    </>
  );
};

export default Page;
