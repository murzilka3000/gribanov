import React from "react";
import s from "./About.module.scss";
import Footer from "@/components/layout/Footer";
import clsx from "clsx";
import Slider from "@/components/sections/about/Slider";
import { BooksSection } from "@/components/sections/home/BooksSection";
import { TelegramSection } from "@/components/sections/home/TelegramSection";
import { CharitySection } from "@/components/sections/about/CharitySection";
import Founder from "@/components/sections/about/Founder";
import Values from "@/components/sections/about/Values";
import Benefits from "@/components/sections/about/Benefits";
import Section_11 from "@/components/sections/about/Section_11";

const page = () => {
  return (
    <>
      <main>
        <section className={clsx(s.about, "section_padding")}></section>
        <div className={s.bg}>
          <Founder />
          {/* <Slider /> */}
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

export default page;
