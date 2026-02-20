import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const Achievements = () => {
  return (
    <section className={clsx(s.achievements, "section_padding")}>
      <div className="wrapper">
        <div className={s.achievements__container}>
          <h2 className={s.achievements__title}>Достижения</h2>
          <div className={s.achievements__grid}>
            <div
              className={s.achievements__item}
              style={{ backgroundImage: "url('/images/c-1.png')" }}
            >
              <h3 className={s.achievements__item_title}>Золотой дельфин</h3>
              <p className={s.achievements__item_text}>
                В 2019 году корпоративный короткометражный фильм для FRANK RG
                получил приз на Каннском фестивале корпоративного кино
              </p>
            </div>
            <div
              className={s.achievements__item}
              style={{ backgroundImage: "url('/images/c-2.png')" }}
            >
              <h3 className={s.achievements__item_title}>
                Рекламный ролик для «Транснефти»
              </h3>
              <p className={s.achievements__item_text}>
                Создали запоминающуюся метафору и помогли запустить большую
                рекламную кампанию в честь юбилея компании
              </p>
            </div>
            <div
              className={s.achievements__item}
              style={{ backgroundImage: "url('/images/c-3.png')" }}
            >
              <h3 className={s.achievements__item_title}>
                Имиджевый ролик для Сбера
              </h3>
              <p className={s.achievements__item_text}>
                Ролик для Сбербанк Страхование Жизни и ВПСО «Ангел»,
                подчеркивающий ценность спасательных операций
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
