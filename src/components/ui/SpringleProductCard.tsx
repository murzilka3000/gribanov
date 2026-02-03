import React from "react";
import s from "@/app/springle/Springle.module.scss";
import { SpringleProductItem } from "@/types";

export const SpringleProductCard = ({
  img,
  title,
  text,
}: SpringleProductItem) => {
  return (
    <div>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
