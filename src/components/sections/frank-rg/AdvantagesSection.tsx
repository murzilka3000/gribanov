import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { frankRgAdvantages } from "@/lib/data";
import { AdvantageCard } from "@/components/ui/AdvantageCard";

export const AdvantagesSection = () => {
  return (
    <section className={s.advantages}>
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
