import React from "react";
import clsx from "clsx";
import s from "@/app/frank-media/FrankMedia.module.scss";
import { standardsGroup1, standardsGroup2, standardsGroup3 } from "@/lib/data";
import { StandardCard } from "@/components/ui/StandardCard";

export const StandardsSection = () => {
  return (
    <section className={clsx(s.standards, "section-padding")}>
      <div className="wrapper">
        <div className={s.standards__inner}>
          <h2 className={s.standards__title}>Стандарты и ценности</h2>
          <p className={s.standards__description}>
            При создании текстов мы ориентируемся на потребности нашей
            аудитории, которая состоит как из обычных потребителей финансовых
            услуг, так и профессионалов из сферы финансов.
          </p>

          <div className={s.standards__list}>
            {standardsGroup1.map((item, i) => (
              <StandardCard key={i} {...item} />
            ))}
          </div>

          <div className={s.standards__list_2}>
            {standardsGroup2.map((item, i) => (
              <StandardCard key={i} {...item} />
            ))}
          </div>

          <div className={s.standards__list}>
            {standardsGroup3.map((item, i) => (
              <StandardCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
