import React from "react";
import clsx from "clsx";
import s from "@/app/springle/Springle.module.scss";

export const MovementSection = () => {
  return (
    <section className={clsx(s.springle_info, "section_padding")}>
      <div className="wrapper">
        <div className={s.springle_info__container}>
          <div className={s.springle_info__block}>
            <h3 className={s.springle_info__title}>
              Springle — часть мирового спортивного движения алтимат фрисби
            </h3>
            <div className={s.springle_info__text_group}>
              <p className={s.springle_info__text}>
                Мы получили эксклюзивные права на проведение игр по алтимату от
                Федерации флаинг диска России.
              </p>
              <p className={s.springle_info__text}>
                Благодаря сотрудничеству с Федерацией мы привлекаем лучших в
                России тренеров по алтимат фрисби — чемпионов мира, Европы и
                России разных лет.
              </p>
              <p className={s.springle_info__text}>
                10% всей выручки Springle перечисляет в Федерацию на развитие
                алтимата в России. А Федерация следит за соблюдением нами правил
                и стандартов игры.
              </p>
              <p className={s.springle_info__text}>
                Работая со Springle, вы поддерживаете развитие алтимат фрисби в
                России.
              </p>
            </div>
          </div>
          <div className={s.springle_info__block}>
            <h3 className={s.springle_info__title}>Springle Pro</h3>
            <div className={s.springle_info__text_group}>
              <p className={s.springle_info__text}>
                Мы сделали турнир, который стал первым турниром с призовым
                фондом для российского алтимата. На него приглашаются 8 лучших
                команд после Чемпионата России.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
