import React from "react";
import clsx from "clsx";
import s from "@/app/springle/Springle.module.scss";

export const VideoSpringleSection = () => {
  return (
    <section className={clsx(s.video, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>Видео</h2>
          <div className={s.video_container}>
            <iframe
              src="https://www.youtube.com/embed/..." // Добавь ссылку
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
