import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";

export const TeamGameSection = () => {
  return (
    <div className={s.change_big_card}>
      <div className="wrapper">
        <h2>Командная игра</h2>
      </div>

      <HomeBigCard
        image="/images/img-3.png"
        intro="Алтимат фрисби — командная игра с летающим диском."
        href="https://frankrg.com/"
        description="Алтимат фрисби стал корпоративным спортом Frank RG в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться, а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!"
      />
    </div>
  );
};
