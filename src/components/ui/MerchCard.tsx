import React from "react";
import Image from "next/image";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { MerchItem } from "@/types";

export const MerchCard = ({ img, title, subtitle }: MerchItem) => {
  return (
    <div className={s.shop_card}>
      <Image
        src={img}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
