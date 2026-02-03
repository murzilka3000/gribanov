import React from "react";
import s from "@/app/springle/Springle.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";

export const HeroSpringleSection = () => {
  return (
    <div className={s.hero}>
      <HomeBigCard
        image="/images/img-3.png"
        label="Сооснователь Springle"
        intro="Алтимат фрисби — командная игра с летающим диском."
        href="https://springle.ru/"
        description="Во Frank RG алтимат фрисби стал корпоративным спортом в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться, а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!"
      />
    </div>
  );
};
