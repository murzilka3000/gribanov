import React from "react";
import s from "@/app/(home)/Home.module.scss";
import clsx from "clsx";

export const CharitySection = () => {
  return (
    <section className={clsx(s.mob_445, "section_padding")}>
      <div className="wrapper">
        <div className={s.home_text_cont}>
          <h2>
            Член попечительских <br /> советов <br /> благотворительных <br />{" "}
            фондов
          </h2>
          <div className={s.home_links_cont}>
            <div className={s.home_links}>
              <a
                href="https://www.bigchange.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Большая Перемена</p>
                <img src="/icons/home_nav-arr-2.svg" alt="" />
              </a>
              <a
                href="https://fondpravmir.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Правмир</p>
                <img src="/icons/home_nav-arr-2.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
