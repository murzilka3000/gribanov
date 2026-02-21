import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const Kino = () => {
  return (
    <section className={clsx(s.kino, "section_padding")}>
      <div className="wrapper">
        <div className={s.kino__inner}>
          <h2 className={s.kino__title}>
            ЦЕХ <span className={s.kino__title_accent}>Киношкола</span>
          </h2>
          <p className={s.kino__subtitle}>
            Здесь подростки учатся мастерству кино у профессионалов
          </p>

          <div className={s.kino__gallery}>
            <img src="/images/kino-1.png" alt="" className={s.kino__image} />
            <img src="/images/kino-2.png" alt="" className={s.kino__image} />
          </div>

          <div className={s.kino__features}>
            <div className={s.kino__feature}>
              <h3 className={s.kino__feature_title}>Практика</h3>
              <p className={s.kino__feature_text}>
                Наши ученики снимают с первой недели на технику из большого кино
              </p>
            </div>

            <div className={s.kino__feature}>
              <h3 className={s.kino__feature_title}>Кинокарьера</h3>
              <p className={s.kino__feature_text}>
                ЦЕХ — первая ступень к успешной карьере в киноиндустрии
              </p>
            </div>

            <div className={s.kino__feature}>
              <h3 className={s.kino__feature_title}>Своя студия</h3>
              <p className={s.kino__feature_text}>
                Уникальное пространство, расположенное в самом центре Москвы
              </p>
            </div>

            <div className={s.kino__feature}>
              <h3 className={s.kino__feature_title}>Свое оборудование</h3>
              <p className={s.kino__feature_text}>
                Вся техника находится в свободном доступе
              </p>
            </div>

            <div className={s.kino__feature}>
              <h3 className={s.kino__feature_title}>Комьюнити</h3>
              <p className={s.kino__feature_text}>
                Формируем профессиональное сообщество
              </p>
            </div>

            <div className={s.kino__feature}>
              <h3 className={s.kino__feature_title}>Преподаватели</h3>
              <p className={s.kino__feature_text}>
                Практикующие профессионалы из киноиндустрии
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kino;
