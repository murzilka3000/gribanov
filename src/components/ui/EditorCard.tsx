import React from "react";
import Image from "next/image";
import s from "@/app/frank-media/FrankMedia.module.scss"; // Путь к стилям страницы
import { EditorItem } from "@/types";
import clsx from "clsx";

export const EditorCard = ({ tag, title, deck, img }: EditorItem) => {
  return (
    <article className={s.editors_item}>
      <div className={s.editors_item_left}>
        <div className={s.editors_top}>
          <span className={clsx(s.editors_tag, s.editors_tag_deck)}>{tag}</span>
          <h3 className={s.editors_name}>{title}</h3>
        </div>
        <div className={s.desc}>
          <p dangerouslySetInnerHTML={{ __html: deck }} />
        </div>
        <span className={clsx(s.editors_tag, s.editors_tag_mob)}>{tag}</span>
      </div>
      <div
        className={s.editors_img_wrapper}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </article>
  );
};
