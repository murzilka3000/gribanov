import React from "react";
import s from "./Home.module.scss";
import clsx from "clsx";
import { Hero } from "@/types";
import Link from "next/link";
import HomeBigCard from "@/components/sections/HomeBigCard";

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
      <div className={s.home_top_cont}>
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
                    ТОП-2 самых цитируемых <br /> финансовых СМИ по версии{" "}
                    <br /> Медиалогии
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
                    В современном мире ценности создаются на стыке компетенций,
                    на границе разных индустрий.
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
        <div className={s.homeCard_cont}>
          <HomeBigCard
            label="Основатель, СЕО и руководитель Frank RG"
            image="/images/img-1.png"
            description="Frank RG появилась как идея объединить опыт,  накопленный в консалтинге и в банковской индустрии.  В 2006 году я пришел в банк Хоум Кредит, где мне,  как бывшему консультанту, поручили построить отдел внешней аналитики. Именно этот опыт лег в основу того, чем сегодня занимается команда Frank RG."
            href="https://frankrg.com/"
            intro="Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. "
          />
          <HomeBigCard
            label="Издатель Frank Media"
            image="/images/img-2.png"
            description="В 2017 году на рынке деловых медиа разгорался кризис. «Двойные сплошные» символично разделили историю деловой журналистики на «до» и «после». До — эпоха великих издательских домов «Коммерсанта» и «Ведомостей». После — эпоха захвата информационного пространства блогерами, рождения множества «бутиковых» медиа и снижения престижа журналистской профессии. И мы увидели в этом возможность для создания делового издания, сфокусированного на рынке банков и финансов. Так появилось Frank Media, которое сегодня занимает 2-е место по цитируемости среди всех финансовых изданий России."
            href="https://frankmedia.ru/"
            intro="Frank Media — деловое издание о финансах  и экономике. Последние новости  из мира банков и финансовых рынков
в России и мире."
          />
          <HomeBigCard
            label="Сооснователь Springle"
            image="/images/img-3.png"
            description="Во Frank RG алтимат фрисби стал корпоративным спортом в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться,  а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!"
            href="https://springle.ru"
            intro="Алтимат фрисби — командная игра  с летающим диском."
          />
          <HomeBigCard
            label="Сооснователь и продюсер студии и киношколы ЦЕХ"
            image="/images/img-4.png"
            description="Родившись как идея для бизнеса на съемочной площадке фильма ЭТАЖИзнь, ЦЕХ стал творческим крылом экосистемы Frank. Студия ЦЕХ помогает упаковывать идеи и сообщения Frank RG, Frank Media и Springle в увлекательный видео-продукт. А киношкола ЦЕХ взращивает молодое поколение кинематографистов."
            href="https://tseh.company"
            intro="ЦЕХ — это экосистема!
Мы сами снимаем кино и учим этому других."
          />
        </div>

        <section className="section_padding">
          <div className="wrapper">
            <div className={s.home_text_cont}>
              <h2>
                Член попечительских <br /> советов <br /> благотворительных{" "}
                <br /> фондов
              </h2>
              <div className={s.home_links_cont}>
                <div className={s.home_links}>
                  <a href="">
                    <p>Большая Перемена</p>
                    <img src="/icons/home_nav-arr-2.svg" alt="" />
                  </a>
                  <a href="">
                    <p>Правмир</p>
                    <img src="/icons/home_nav-arr-2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
