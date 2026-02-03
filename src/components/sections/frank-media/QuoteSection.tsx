import React from "react";
import clsx from "clsx";
import Image from "next/image";
import s from "@/app/frank-media/FrankMedia.module.scss";

export const QuoteSection = () => {
  return (
    <section className={clsx(s.figure_section, "section-padding")}>
      <div className="wrapper">
        <div className={s.blockquote_cont}>
          <Image src="/images/block.png" alt="" width={50} height={50} />
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
