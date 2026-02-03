import React from "react";
import Image from "next/image";
import s from "@/app/frank-media/FrankMedia.module.scss"; // Путь к стилям страницы
import { EditorItem } from "@/types";

export const EditorCard = ({ tag, title, deck, img }: EditorItem) => {
  return (
    <article className={s.editors_item}>
      <div className={s.editors_item_left}>
        <div className={s.editors_top}>
          <span className={s.editors_tag}>{tag}</span>
          <h3 className={s.editors_name}>{title}</h3>
        </div>
        <div className={s.desc}>
          <p dangerouslySetInnerHTML={{ __html: deck }} />
        </div>
      </div>
      {/* Используем Image с fill для оптимизации вместо backgroundImage */}
      <div className={s.editors_img_wrapper}>
        <Image
          src={img}
          alt={title}
          fill
          className={s.editors_image_file}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </article>
  );
};
