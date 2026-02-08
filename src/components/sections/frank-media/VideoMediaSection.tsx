import React from "react";
import s from "@/app/frank-media/FrankMedia.module.scss";
import { mediaCards } from "@/lib/data";
import { MediaCard } from "@/components/ui/MediaCard";
import clsx from "clsx";

export const VideoMediaSection = () => {
  return (
    <section className={clsx(s.video_media, "section_padding")}>
      <div className="wrapper">
        <div className={s.video_media__inner}>
          <h2 className={s.video_media__title}>Видео Frank Media</h2>
          <div className={s.video_media__grid}>
            {mediaCards.map((item) => (
              <MediaCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
