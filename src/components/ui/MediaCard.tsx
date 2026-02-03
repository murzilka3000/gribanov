import React from "react";
import Image from "next/image";
import s from "@/app/frank-media/FrankMedia.module.scss";
import { MediaItem } from "@/types";

export const MediaCard = ({ img, tags, title, date, link }: MediaItem) => {
  return (
    <article className={s.media_card}>
      <div className={s.media_card__img_wrapper}>
        <Image
          src={img}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className={s.media_card__img}
        />
      </div>
      <div className={s.media_card__tags}>
        {tags.map((tag, i) => (
          <span key={i} className={s.media_card__tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={s.media_card__content}>
        <h3 className={s.media_card__title}>{title}</h3>
        <div className={s.media_card__footer}>
          <time className={s.media_card__date}>{date}</time>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={s.media_card__link}
          >
            Смотреть
          </a>
        </div>
      </div>
    </article>
  );
};
