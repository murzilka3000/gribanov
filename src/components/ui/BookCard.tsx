import React from "react";
import Image from "next/image";
import { BookItem } from "@/types";

export const BookCard = ({ year, img, link }: BookItem) => {
  return (
    <article>
      <p>{year}</p>
      <Image
        src={img}
        alt={`Обложка книги, рекомендация ${year} года`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <a href={link} target="_blank" rel="noopener noreferrer">
        Подробнее
      </a>
    </article>
  );
};
