import React from "react";
import clsx from "clsx";
import Image from "next/image";
import s from "@/app/frank-rg/FrankRg.module.scss";

export const MapSection = () => {
  return (
    <section className={clsx(s.map)}>
      <div className="wrapper">
        <div className={s.map_cont}>
          <div className={s.map_left}>
            <div className={s.map_texts}>
              <h2>О Frank RG</h2>
              <p>Frank RG — крупнейший поставщик аналитики для банков</p>
            </div>
            <div className={s.map_bottom}>
              <p>
                <span>2</span> офиса - <br /> в Москве <br /> и в Орле
              </p>
              <p>
                <span>129</span> человек работают <br /> в компании
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/map.png"
              alt="Карта офисов"
              className={s.img_desc_12}
            />
            <img
              src="/images/map.png"
              alt="Карта офисов"
              className={s.img_mob_12}
            />
          </div>
          <div className={clsx(s.map_bottom, s.map_bottom_2)}>
            <p>
              <span>2</span> офиса - <br /> в Москве <br /> и в Орле
            </p>
            <p>
              <span>129</span> человек работают <br /> в компании
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
