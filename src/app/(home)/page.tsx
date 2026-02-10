import s from "./Home.module.scss";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { ProjectNavSection } from "@/components/sections/home/ProjectNavSection";
import { ProjectsBigList } from "@/components/sections/home/ProjectsBigList";
import { CharitySection } from "@/components/sections/home/CharitySection";
import { PublicationsSection } from "@/components/sections/home/PublicationsSection";
import { BooksSection } from "@/components/sections/home/BooksSection";
import { TelegramSection } from "@/components/sections/home/TelegramSection";
import clsx from "clsx";
import Footer from "@/components/layout/Footer";

const Page = () => {
  return (
    <>
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

        <section className={clsx(s.mob_446, "section_padding")}>
          <div className="wrapper">
            <div className={s.home_text_cont}>
              <h2>
                Член попечительских <br /> советов <br /> благотворительных{" "}
                <br /> фондов
              </h2>
              <div className={s.home_links_cont}>
                <div className={s.home_links}>
                  <a
                    href="https://www.bigchange.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Большая Перемена</p>
                    <img src="/icons/home_nav-arr-2.svg" alt="" />
                  </a>
                  <a
                    href="https://fondpravmir.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Правмир</p>
                    <img src="/icons/home_nav-arr-2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TelegramSection />
      </main>
      <Footer background="rgba(23, 57, 105, 1)" />
    </>
  );
};

export default Page;
