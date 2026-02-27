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
import s from "./FrankRg.module.scss";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Юрий Грибанов — основатель и генеральный директор Frank RG",
  description:
    "Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. ",
  openGraph: {
    title: "Юрий Грибанов — издатель СМИ Frank Media",
    description:
      "Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. ",
  },
};

const Page = () => {
  return (
    <>
      <main>
        <HeroRgSection />
        <div className={s.bg_4342}>
          <MapSection />
          <AdvantagesSection />
          <ProductsSection />
        </div>
        <PremiumAwardSection />

        <section className={clsx(s.about_award, "section_padding")}>
          <div className={`wrapper ${s.about_award__container}`}>
            <div className={s.about_award__inner}>
              <div className={s.about_award__header}>
                <img
                  className={s.about_award__header_icon}
                  src="/images/zap-101.svg"
                  alt=""
                />
                <p className={s.about_award__header_title}>
                  Чем Frank Award <br /> примечательна и важна?{" "}
                </p>
              </div>
              <div className={s.about_award__content}>
                <p className={s.about_award__description}>
                  Frank Award — воплощение духа Frank RG: честности и
                  аналитического подхода. Победители — действительно лучшие
                  банки и лучшие продукты для клиентов. А премия — лучший знак
                  качества на рынке финансовых услуг, который может получить
                  российский банк или финансовая компания.
                </p>
                <div className={s.about_award__features}>
                  <div className={s.about_award__feature}>
                    <img
                      className={s.about_award__feature_icon}
                      src="/images/img-101.svg"
                      alt=""
                    />
                    <p className={s.about_award__feature_text}>
                      Мы не берем деньги за участие в номинациях и не продаем
                      места
                    </p>
                  </div>
                  <div className={s.about_award__feature}>
                    <img
                      className={s.about_award__feature_icon}
                      src="/images/img-102.svg"
                      alt=""
                    />
                    <p className={s.about_award__feature_text}>
                      У нас нет экспертных советов и прочих серых зон при
                      определении победителей
                    </p>
                  </div>
                  <div className={s.about_award__feature}>
                    <img
                      className={s.about_award__feature_icon}
                      src="/images/img-103.svg"
                      alt=""
                    />
                    <p className={s.about_award__feature_text}>
                      Статуэтка Frank RG — результат рейтингов по сотням
                      показателей
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
