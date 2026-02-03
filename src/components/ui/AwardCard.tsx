import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { AwardItem } from "@/types";

export const AwardCard = ({ text }: AwardItem) => {
  return (
    <div className={s.awards_item}>
      <img src="/icons/i-1.svg" alt="" />
      <p>{text}</p>
      <img src="/icons/i-2.svg" alt="" />
    </div>
  );
};
