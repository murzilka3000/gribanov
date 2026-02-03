import React from "react";
import Image from "next/image";
import s from "@/app/frank-media/FrankMedia.module.scss";
import { StandardItem } from "@/types";

export const StandardCard = ({ icon, title, text }: StandardItem) => {
  return (
    <article className={s.standart_item}>
      <Image
        src={icon}
        alt=""
        width={40}
        height={40}
        className={s.standart_item__icon}
      />
      <h3 className={s.standart_item__title}>{title}</h3>
      <p className={s.standart_item__text}>{text}</p>
    </article>
  );
};
