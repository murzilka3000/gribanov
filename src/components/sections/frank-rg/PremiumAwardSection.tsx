import React from "react";
import clsx from "clsx";
import Image from "next/image";
import s from "@/app/frank-rg/FrankRg.module.scss";

export const PremiumAwardSection = () => {
  return (
    <section className={clsx(s.black_section, "section_padding")}>
      <div className="wrapper">
        <div className={s.black_section_cont}>
          <div>
            <div className={s.flex_2322}>
              <h2>Frank Premium Banking Award</h2>
              <Image
                src="/images/bl-img.png"
                alt="Award"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className={s.img_mob_541}
              />
              <p>
                Единственный рейтинг банков сегмента премиального обслуживания в
                России.
              </p>
            </div>
            <a
              href="https://frankrg.com/awards/142376"
              target="_blank"
              rel="noopener noreferrer"
            >
              Перейти на сайт
            </a>
          </div>
          <div className={s.img_cont}>
            <Image
              src="/images/bl-img.png"
              alt="Award"
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
