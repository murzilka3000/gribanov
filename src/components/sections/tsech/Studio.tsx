import React from "react";
import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const Studio = () => {
  return (
    <section className={clsx(s.studio, "section_padding")}>
      <div className="wrapper">
        <div className={s.studio__container}>
          <h2 className={s.studio__title}>
            ЦЕХ <span className={s.studio__title_accent}>Студия</span>
          </h2>
          <p className={s.studio__subtitle}>
            Придумаем идею, напишем сценарий, снимем и смонтируем ролик под ваши
            задачи
          </p>
          <div className={s.studio__box}>
            <p className={s.studio__box_text}>
              У нас есть то, чего нет у других: свое оборудование, локации для
              съемок <br />и постоянная команда
            </p>
            <img className={s.studio__box_icon} src="/icons/zap.svg" alt="" />
          </div>
          <div className={s.video_container}>
            <iframe
              className={s.studio__iframe}
              src="https://www.youtube.com/embed/..."
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
