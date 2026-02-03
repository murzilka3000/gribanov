import React from "react";
import clsx from "clsx";
import Image from "next/image";
import s from "@/app/frank-rg/FrankRg.module.scss";

export const MapSection = () => {
  return (
    <section className={clsx(s.map, "section-padding")}>
      <div className="wrapper">
        <div className={s.map_cont}>
          <div className={s.map_left}>
            <div className={s.map_texts}>
              <h2>О Frank RG</h2>
              <p>Frank RG — крупнейший поставщик аналитики для банков</p>
            </div>
            <div className={s.map_bottom}>
              <p>
                <span>2</span> офиса -- в Москве и в Орле
              </p>
              <p>
                <span>129</span> человек работают в компании
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/map.png"
              alt="Карта офисов"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
