import React from "react";
import clsx from "clsx";
import Image from "next/image";
import s from "@/app/frank-rg/FrankRg.module.scss";

export const CultureSection = () => {
  return (
    <section className={clsx(s.cult, "section_padding")}>
      <div className="wrapper">
        <div className={s.cult_cont}>
          <h2>Корпоративная культура</h2>
          <div className={s.blockquote_cont}>
            <Image
              src="/images/yr.png"
              alt="Юрий Грибанов"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <figure className={s.quote}>
              <blockquote>
                <p>
                  Для меня важно, чтобы Frank RG была местом, куда хочется
                  приходить мне и всем членам команды
                </p>
              </blockquote>
              <figcaption className={s.quote__author}>Юрий Грибанов</figcaption>
            </figure>
          </div>
          <div className={s.first}>
            <div>
              <p>Небольшая компания, работающая по западным стандартам</p>
            </div>
            <div>
              <p>Понятная и открытая процедура принятия решений</p>
            </div>
          </div>
          <div className={s.second}>
            <div>
              <p>Возможность развития личного бренда в медиа</p>
            </div>
            <div>
              <p>Эффективная площадка для получения опыта и экспертизы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
