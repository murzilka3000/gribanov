import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { AdvantageItem } from "@/types";

export const AdvantageCard = ({ img, number, text }: AdvantageItem) => {
  return (
    <div>
      <img src={img} alt="" />
      <p className={s.advantages_number}>{number}</p>
      <p className={s.advantages_text}>{text}</p>
    </div>
  );
};
