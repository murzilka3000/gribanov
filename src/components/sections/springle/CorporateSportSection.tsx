import React from "react";
import clsx from "clsx";
import s from "@/app/springle/Springle.module.scss";
import { springleBusinessValues, springleFrisbeeValues } from "@/lib/data";

export const CorporateSportSection = () => {
  return (
    <section className={clsx(s.corporate_sport, "section_padding")}>
      <div className="wrapper">
        <div className={s.corporate_sport__container}>
          <div className={s.corporate_sport__header}>
            <h2 className={s.corporate_sport__title}>
              Алтимат фрисби — идеальный корпоративный спорт
            </h2>
            <p className={s.corporate_sport__subtitle}>
              Ценности алтимат фрисби идеально коррелируют с представлениями о
              том, каким должен быть успешный бизнес. Они созвучны ценностям
              любой компании.
            </p>
          </div>
          <div className={s.corporate_sport__content}>
            <div className={s.corporate_sport__column}>
              <h3>Бизнес</h3>
              {springleBusinessValues.map((t) => (
                <div key={t.text} className={s.corporate_sport__item}>
                  <p className={s.corporate_sport__text}>{t.text}</p>
                </div>
              ))}
            </div>
            <div className={s.corporate_sport__image_wrapper}>
              <img src="/icons/s-arr.svg" alt="" />
            </div>
            <div className={s.corporate_sport__column}>
              <h3>Фрисби</h3>
              {springleFrisbeeValues.map((t) => (
                <div key={t.text} className={s.corporate_sport__item}>
                  <p className={s.corporate_sport__text}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
