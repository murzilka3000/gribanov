import React from "react";
import clsx from "clsx";
import s from "@/app/(home)/Home.module.scss";

export const TelegramSection = () => {
  return (
    <section className={clsx(s.tg_home, "section_padding", s.tg_home_2)}>
      <div className="wrapper">
        <div>
          <h2>Канал «ГРИБАНОВ»</h2>
          <div className={s.tg_cont}>
            <div>
              <p className={s.subtitle_tg}>
                Веду авторский тг-канал для руководителей и тех, кто хочет ими
                стать
              </p>
              <p className={s.tg_tag}>@gribanov_channel</p>
              <a
                href="https://t.me/+WbUPnCLcqLxjM2Fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Читать канал
              </a>
            </div>
            <div>
              <img src="/icons/tg.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
