import React from "react";
import s from "./Home.module.scss";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { ProjectNavSection } from "@/components/sections/home/ProjectNavSection";
import { ProjectsBigList } from "@/components/sections/home/ProjectsBigList";
import { CharitySection } from "@/components/sections/home/CharitySection";
import { PublicationsSection } from "@/components/sections/home/PublicationsSection";
import { BooksSection } from "@/components/sections/home/BooksSection";
import { TelegramSection } from "@/components/sections/home/TelegramSection";

const Page = () => {
  return (
    <main>
      <div className={s.home_top_cont}>
        <HeroSection />
        <GallerySection />
        <ProjectNavSection />
        <ProjectsBigList />
        <CharitySection />
      </div>

      <PublicationsSection />
      <BooksSection />
      <TelegramSection />
    </main>
  );
};

export default Page;
