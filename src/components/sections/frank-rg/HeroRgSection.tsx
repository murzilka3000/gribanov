import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";

export const HeroRgSection = () => {
  return (
    <div className={s.hero}>
      <HomeBigCard
        image="/images/img-1.png"
        label="Основатель, СЕО и руководитель Frank RG"
        intro="Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. "
        href="https://frankrg.com/"
        description="Frank RG появилась как идея объединить опыт, накопленный в консалтинге и в банковской индустрии. В 2006 году я пришел в банк Хоум Кредит, где мне, как бывшему консультанту, поручили построить отдел внешней аналитики. Именно этот опыт лег в основу того, чем сегодня занимается команда Frank RG."
      />
    </div>
  );
};
