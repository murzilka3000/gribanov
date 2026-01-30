import React from "react";
import s from "./Home.module.scss";
import clsx from "clsx";
import { Hero } from "@/types";
import Link from "next/link";

const Page = () => {
  const hero: Hero[] = [
    {
      img: "/icons/hero-arr-1.svg",
      span: "Консалтинговая компания,",
    },
    {
      img: "/icons/hero-arr-2.svg",
      span: "Деловое медиа,",
    },
    {
      img: "/icons/hero-arr-3.svg",
      span: "Киношкола и продакшн студия,",
    },
    {
      img: "/icons/hero-arr-4.svg",
      span: "Спортивная корпоративная лига",
    },
  ];

  const home_nav = [
    {
      href: "/#1",
      text: "Frank RG",
      img: "/icons/home_nav-arr-1.svg",
    },
    {
      href: "/#2",
      text: "Frank Media",
      img: "/icons/home_nav-arr-1.svg",
    },
    {
      href: "/#3",
      text: "Киношкола ЦЕХ",
      img: "/icons/home_nav-arr-2.svg",
    },
    {
      href: "/#4",
      text: "Springle",
      img: "/icons/home_nav-arr-3.svg",
    },
  ];

  return (
    <main>
      <section className={clsx(s.hero, "section_padding")}>
        <div className="wrapper">
          <div className={s.hero__container}>
            <div className={s.hero__header}>
              <div className={s.hero__title_wrapper}>
                <div className={s.hero__decoration}></div>
                <h1 className={s.hero__title}>
                  Юрий
                  <br /> Грибанов
                </h1>
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
                {hero.map((t) => {
                  return (
                    <li key={t.span} className={s.hero__item}>
                      <img className={s.hero__icon} src={t.img} alt="" />
                      <span className={s.hero__text}>{t.span}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={clsx(s.home_gallery, "section_padding")}>
        <div className="wrapper">
          <div className={s.home_gallery_cont}>
            <div className={s.home_gallery_left}>
              <div>
                <img src="/images/home_gallery-1.png" alt="" />
                <img src="/images/home_gallery-2.png" alt="" />
              </div>
              <img src="/images/home_gallery-3.png" alt="" />
            </div>
            <div className={s.home_gallery_right}>
              <img src="/images/home_gallery-4.png" alt="" />
              <img src="/images/home_gallery-5.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={clsx(s.home_all_projects, "section_padding")}>
        <div className="wrapper">
          <div className={s.home_all_projects_cont}>
            <div className={s.home_all_projects_left}>
              <img src="/icons/home_all_projects-icon.svg" alt="" />
              <div>
                <p>
                  В современном мире ценности создаются на стыке компетенций, на
                  границе разных индустрий.
                </p>
                <p>
                  Главное искусство — найти баланс, чтобы многогранность не
                  превратилась в расфокусированность.
                </p>
              </div>
            </div>
            <div className={s.home_all_projects_right}>
              <p>Все проекты и направления:</p>
              <nav>
                {home_nav.map((t) => {
                  return (
                    <Link key={t.href} href={t.href}>
                      <p>{t.text}</p>
                      <img src={t.img} alt="" />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
