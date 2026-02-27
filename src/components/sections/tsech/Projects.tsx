import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const Projects = () => {
  return (
    <section className={clsx(s.projects, "section_padding")}>
      <div className="wrapper">
        <div className={s.projects__container}>
          <h2 className={s.projects__title}>Наши проекты</h2>
          <div className={s.projects__grid}>
            <div className={s.projects__item}>
              <div className={s.projects__info}>
                <h3 className={s.projects__item_title}>
                  ЦЕХ <span>Студия</span>
                </h3>
                <p className={s.projects__item_text}>
                  Продакшн-студия полного цикла с постоянной командой,
                  собственным оборудованием и студией в центре Москвы
                </p>
              </div>
              <div className={s.projects__actions}>
                <img
                  className={s.projects__image}
                  src="/icons/a-w.svg"
                  alt=""
                />
                <a
                  className={s.projects__link}
                  href="https://tseh.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
            </div>

            <div className={s.projects__item}>
              <div className={s.projects__info}>
                <h3 className={s.projects__item_title}>
                  ЦЕХ <span>Квартирник</span>
                </h3>
                <p className={s.projects__item_text}>
                  Творческие пространства в Москве для тех, кто увлечён
                  фотографией, кинематографом и ретро-эстетикой
                </p>
              </div>
              <div className={s.projects__actions}>
                <img
                  className={s.projects__image}
                  src="/icons/a-w.svg"
                  alt=""
                />
                <a
                  className={s.projects__link}
                  href="https://kvartirnik.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
            </div>

            <div className={s.projects__item}>
              <div className={s.projects__info}>
                <h3 className={s.projects__item_title}>
                  ЦЕХ <span>Киношкола</span>
                </h3>
                <p className={s.projects__item_text}>
                  Единственная в России киношкола для подростков, где занятия
                  проходят по-взрослому
                </p>
              </div>
              <div className={s.projects__actions}>
                <img
                  className={s.projects__image}
                  src="/icons/a-w.svg"
                  alt=""
                />
                <a
                  className={s.projects__link}
                  href="https://kino.school/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
            </div>

            <div className={s.projects__item}>
              <div className={s.projects__info}>
                <h3 className={s.projects__item_title}>
                  ЦЕХ <span>Практикум</span>
                </h3>
                <p className={s.projects__item_text}>
                  Киношкола для взрослых: никакой теории, все обучение — через
                  практику
                </p>
              </div>
              <div className={s.projects__actions}>
                <img
                  className={s.projects__image}
                  src="/icons/a-w.svg"
                  alt=""
                />
                <a
                  className={s.projects__link}
                  href="https://practicum.school"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
