import React from "react";
import clsx from "clsx";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { merchGroupTop, merchGroupMiddle, merchGroupBottom } from "@/lib/data";
import { MerchCard } from "@/components/ui/MerchCard";

export const ShopSection = () => {
  return (
    <section className={clsx(s.shop, "section_padding")}>
      <div className="wrapper">
        <div className={s.shop_cont}>
          <h2>
            Мы всегда придумываем для команды что-то необычное, помогая
            взглянуть на нашу работу под другим углом
          </h2>
          <p>Мерч Frank RG </p>
        </div>

        <div className={s.shop_top}>
          <div className={s.g_4}>
            {merchGroupTop.map((item) => (
              <MerchCard key={item.title} {...item} />
            ))}
          </div>
          {merchGroupMiddle.map((item) => (
            <MerchCard key={item.title} {...item} />
          ))}
        </div>

        <div className={s.g_4_1}>
          {merchGroupBottom.map((item) => (
            <MerchCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
