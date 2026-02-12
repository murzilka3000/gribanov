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
          <div className={s.comparison}>
            <div className={s.comparison__header}>
              <div className={s.comparison__header_item}>
                <p className={s.comparison__header_title}>Бизнес</p>
                <img
                  className={s.comparison__header_icon}
                  src="./images/r.svg"
                  alt=""
                />
              </div>
              <div className={s.comparison__header_item}>
                <img
                  className={s.comparison__header_icon}
                  src="./images/l.svg"
                  alt=""
                />
                <p className={s.comparison__header_title}>Фрисби</p>
              </div>
            </div>
            <div className={s.comparison__body}>
              <div className={s.comparison__row}>
                <p className={s.comparison__cell}>
                  Равенство, равные <br /> возможности
                </p>
                <p className={s.comparison__cell}>
                  Гендерно- <br /> смешанные команды
                </p>
              </div>
              <div className={s.comparison__row}>
                <p className={s.comparison__cell}>
                  Здоровая конкуренция, <br /> лидерство
                </p>
                <p className={s.comparison__cell}>
                  Уважение <br /> к соперникам
                </p>
              </div>
              <div className={s.comparison__row}>
                <p className={s.comparison__cell}>
                  Развитие, <br /> ответственность, <br /> вовлечение
                </p>
                <p className={s.comparison__cell}>
                  Самоорганизация <br /> команд
                </p>
              </div>
              
              <div className={s.comparison__row}>
                <p className={s.comparison__cell}>
                  Демократичность, <br /> инициатива, <br /> меритократия
                </p>
                <p className={s.comparison__cell}>Отсутствие судей</p>
              </div>
              <div className={s.comparison__row}>
                <p className={s.comparison__cell}>Открытость, доверие</p>
                <p className={s.comparison__cell}>Честная игра</p>
              </div>
              <div className={s.comparison__row}>
                <p className={s.comparison__cell}>
                  Позитивные отношения <br /> в команде
                </p>
                <p className={s.comparison__cell}>Неконтактный спорт</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
