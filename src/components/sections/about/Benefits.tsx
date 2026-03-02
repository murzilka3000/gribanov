import s from "@/app/about/About.module.scss";
import clsx from "clsx";

const Benefits = () => {
  return (
    <section className={clsx(s.benefits, "section_padding")}>
      <div className="wrapper">
        <div className={s.benefits__inner}>
          <div className={s.benefits__content}>
            <div>
              <h2 className={clsx(s.benefits__title)}>
                Польза <br />
                каждый день
              </h2>
              <p className={s.benefits__description}>
                У меня над столом есть лист, на котором я зачеркиваю каждую
                прожитую неделю. Это нужно для того, чтобы чувствовать время
                материально. Чтобы понимать, что оно конечно.  Мотивирует не
                терять годы впустую.
              </p>
            </div>
          </div>
          <div className={s.benefits__image_wrapper}>
            <h2 className={clsx(s.benefits__title, s.benefits__title_mob)}>
              Польза <br />
              каждый день
            </h2>
            <img
              className={s.benefits__image}
              src="/images/img-671.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
