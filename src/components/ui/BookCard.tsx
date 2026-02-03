import React from "react";
import Image from "next/image";
import s from "@/app/(home)/Home.module.scss";
import { BookItem } from "@/types";

export const BookCard = ({ year, img, link }: BookItem) => {
  return (
    <div>
      <p>{year}</p>
      <Image
        src={img}
        alt={`Книги ${year}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <a href={link} target="_blank" rel="noopener noreferrer">
        Читать
      </a>
    </div>
  );
};
