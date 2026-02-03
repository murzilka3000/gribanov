import React from "react";
import Image from "next/image";
import s from "@/app/(home)/Home.module.scss"; // Импорт стилей из твоего модуля
import { PublicationItem } from "@/types";

export const PublicationCard = ({
  img,
  tag_1,
  tag_2,
  title,
  date,
  link,
}: PublicationItem) => {
  return (
    <div>
      <Image
        src={img}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className={s.tags}>
        <p>{tag_1}</p>
        <p>{tag_2}</p>
      </div>
      <h3>{title}</h3>
      <div className={s.small_card_bottom}>
        <p>{date}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Читать
        </a>
      </div>
    </div>
  );
};
