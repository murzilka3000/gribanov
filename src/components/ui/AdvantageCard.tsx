import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { AdvantageItem } from "@/types";

export const AdvantageCard = ({ img, number, text }: AdvantageItem) => {
  return (
    <div className={s.card_445}>
      <img src={img} alt="" />
      <div>
        <p className={s.advantages_number}>{number}</p>
        <p className={s.advantages_text}>{text}</p>
      </div>
    </div>
  );
};
