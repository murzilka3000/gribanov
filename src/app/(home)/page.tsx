import React from "react";
import s from "./Home.module.scss";
import clsx from "clsx";

const Page = () => {
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
                  ТОП-100 крупнейших <br /> консалтинговых компаний <br /> по версии RAEX
                </p>
                <p className={s.hero__achievement_text}>
                  ТОП-2 самых цитируемых <br /> финансовых СМИ по версии <br /> Медиалогии
                </p>
              </div>
            </div>
            <div className={s.hero__body}>
              <p className={s.hero__subtitle}>Предприниматель,</p>
              <ul className={s.hero__list}>
                <li className={s.hero__item}>
                  <img
                    className={s.hero__icon}
                    src="/icons/hero-arr-1.svg"
                    alt=""
                  />
                  <span className={s.hero__text}>Консалтинговая компания,</span>
                </li>
                <li className={s.hero__item}>
                  <img
                    className={s.hero__icon}
                    src="/icons/hero-arr-2.svg"
                    alt=""
                  />
                  <span className={s.hero__text}>Деловое медиа,</span>
                </li>
                <li className={s.hero__item}>
                  <img
                    className={s.hero__icon}
                    src="/icons/hero-arr-3.svg"
                    alt=""
                  />
                  <span className={s.hero__text}>
                    Киношкола и продакшн студия,
                  </span>
                </li>
                <li className={s.hero__item}>
                  <img
                    className={s.hero__icon}
                    src="/icons/hero-arr-4.svg"
                    alt=""
                  />
                  <span className={s.hero__text}>
                    Спортивная корпоративная лига
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
