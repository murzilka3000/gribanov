import React from "react";
import clsx from "clsx";
import s from "@/app/(home)/Home.module.scss";
import { heroItems } from "@/lib/data";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className={clsx(s.hero, "section_padding")}>
      <div className="wrapper">
        <div className={s.hero__container}>
          <div className={s.hero__header}>
            <div className={s.hero__title_wrapper}>
              <div className={s.hero__decoration}></div>
              <div className={s.flex_4343}>
                <h1 className={s.hero__title}>
                  Юрий
                  <br /> Грибанов
                </h1>
                <div>
                  <p className={s.hero__achievement_text}>
                    <span>ТОП-100</span> крупнейших <br /> консалтинговых компаний <br /> по
                    версии RAEX
                  </p>
                  <p className={s.hero__achievement_text}>
                    <span>ТОП-2</span> самых цитируемых <br /> финансовых СМИ по версии{" "}
                    <br /> Медиалогии
                  </p>
                </div>
              </div>
            </div>
            <div className={s.hero__achievements}>
              <p className={s.hero__achievement_text}>
                ТОП-100 крупнейших <br /> консалтинговых компаний <br /> по
                версии RAEX
              </p>
              <p className={s.hero__achievement_text}>
                ТОП-2 самых цитируемых <br /> финансовых СМИ по версии <br />{" "}
                Медиалогии
              </p>
            </div>
          </div>
          <div className={s.hero__body}>
            <p className={s.hero__subtitle}>Предприниматель,</p>
            <ul className={s.hero__list}>
              {heroItems.map((t, index) => (
                <Link href={t.link} key={index} className={s.hero__item}>
                  <img className={s.hero__icon} src={t.img} alt="" />
                  <span className={s.hero__text}>{t.span}</span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
