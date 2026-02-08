import clsx from "clsx";
import s from "@/app/frank-media/FrankMedia.module.scss";

export const QuoteSection = () => {
  return (
    <section className={clsx(s.figure_section, "section_padding")}>
      <div className="wrapper">
        <div className={s.blockquote_cont}>
          <img src="/images/block.png" alt="" />
          <figure className={s.quote}>
            <blockquote>
              <p>
                Наши клиенты часто делились «болью», что качество
                индустриального специализированного контента упало. Количество
                банковских медиа сократилось до одного лишь «Банковского
                обозрения», остальные либо умерли, либо превратились в пустышки
              </p>
            </blockquote>
            <figcaption className={s.quote__author}>Юрий Грибанов</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
