import React from "react";
import clsx from "clsx";
import Image from "next/image";
import s from "@/app/springle/Springle.module.scss";

export const UltimateStorySection = () => {
  return (
    <section className={clsx(s.ultimate, "section_padding")}>
      <div className="wrapper">
        <div className={s.ultimate__container}>
          <div className={s.ultimate__image_wrapper}>
            <Image
              src="/images/gr.png"
              alt="Юрий Грибанов"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={s.ultimate__content}>
            <h2 className={s.ultimate__title}>
              Алтимат фрисби — моя любимая игра
            </h2>
            <figure className={s.ultimate__quote_block}>
              <blockquote className={s.ultimate__quote}>
                <p className={s.ultimate__text}>
                  В 2008 году я основал аналитическую компанию Frank RG, которая
                  занимается исследованиями банковской розницы.
                </p>
                <p className={s.ultimate__text}>
                  За эти 14 лет мы попробовали различные виды коллективного
                  спорта, но именно алтимат фрисби стал основным на корпоративах
                  компании.
                </p>
                <p className={s.ultimate__text}>
                  Почему? Этот спорт идеально подходит под наши ценности:
                  командная работа, безупречная репутация сотрудников как внутри
                  команды, так и в отношениях с клиентами, инициатива и
                  ответственность — у нас часто именно команда определяет, что и
                  как мы делаем дальше. Настоящий алтимат.
                </p>
              </blockquote>
              <figcaption className={s.ultimate__author}>
                Юрий Грибанов
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
