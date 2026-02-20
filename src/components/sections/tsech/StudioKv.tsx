import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const StudioKv = () => {
  return (
    <section className={clsx(s.studio_kv, "section_padding")}>
      <div className="wrapper">
        <div className={s.studio_kv__container}>
          <h2 className={s.studio_kv__title}>
            ЦЕХ <span>Квартирник</span>
          </h2>
          <p className={s.studio_kv__subtitle}>
            Творческие пространства в Москве для фото и видеосъемки
          </p>
          <div className={s.studio__box}>
            <p className={s.studio__box_text}>
              Мы предлагаем в аренду декорации <br />в стилизованных студиях,
              отражающие <br />
              дух времени различных десятилетий
            </p>
            <img className={s.studio__box_icon} src="/icons/zap.svg" alt="" />
          </div>
          <div className={s.studio_kv__features}>
            <div className={s.studio_kv__feature}>
              <h3 className={s.studio_kv__feature_title}>Доступность</h3>
              <p className={s.studio_kv__feature_text}>
                Мы предлагаем удобный подъезд для разгрузки на 1 этаже в центре
                Москвы, что обеспечивает легкий доступ и сокращает время на
                транспортировку
              </p>
            </div>

            <div className={s.studio_kv__feature}>
              <h3 className={s.studio_kv__feature_title}>Адаптивность</h3>
              <p className={s.studio_kv__feature_text}>
                Наши студии созданы творцами для творцов. Операторы и фотографы
                смогут найти впечатляющие планы и уникальные точки съемки
              </p>
            </div>

            <div className={s.studio_kv__feature}>
              <h3 className={s.studio_kv__feature_title}>Достоверность</h3>
              <p className={s.studio_kv__feature_text}>
                Мы устали от «неживых» и стерильных студий, поэтому художники
                наполнили жизнью каждый сантиметр нашего пространства
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioKv;
