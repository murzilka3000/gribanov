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
              src="https://vk.com/video_ext.php?oid=-215365218&id=456239037&hd=2"
              width="100%"
              height="360"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
