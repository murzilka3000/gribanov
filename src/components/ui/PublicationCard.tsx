import React from "react";
import Image from "next/image";
import s from "@/app/(home)/Home.module.scss";
import { PublicationItem } from "@/types";

export const PublicationCard = ({
  img,
  tag_1,
  tag_2,
  title,
  date,
  link,
  button,
}: PublicationItem) => {
  return (
    <article className={s.small_card}>
      <Image
        src={img}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className={s.tags}>
        <span className={s.tag}>{tag_1}</span>
        <span className={s.tag}>{tag_2}</span>
      </div>
      <h3 className={s.card_title}>{title}</h3>
      <div className={s.small_card_bottom}>
        <time className={s.date}>{date}</time>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {button}
        </a>
      </div>
    </article>
  );
};
