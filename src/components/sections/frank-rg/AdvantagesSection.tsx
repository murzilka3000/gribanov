import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { frankRgAdvantages } from "@/lib/data";
import { AdvantageCard } from "@/components/ui/AdvantageCard";
import clsx from "clsx";

export const AdvantagesSection = () => {
  return (
    <section className={clsx(s.advantages, "section_padding")}>
      <div className="wrapper">
        <div className={s.advantages_cont}>
          {frankRgAdvantages.map((t) => (
            <AdvantageCard key={t.text} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};
