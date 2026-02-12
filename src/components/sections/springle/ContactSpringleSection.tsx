import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import s from "@/app/springle/Springle.module.scss";

export const ContactSpringleSection = () => {
  return (
    <section className={clsx(s.last_spr, "section_padding")}>
      <div className="wrapper">
        <div className={s.last_spr__container}>
          <div className={s.last_spr__info}>
            <div className={s.last_spr__header}>
              <h2 className={s.last_spr__title}>Свяжитесь с нами</h2>
            </div>
            <Image
              src="/images/last-spr.png"
              alt="Галина Губанова"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={s.img_333}
            />
            <div className={s.last_spr__contact}>
              <p className={s.last_spr__name}>Галина Губанова</p>
              <p className={s.last_spr__position}>Руководитель проекта</p>
              <a href="tel:+79030099874" className={s.last_spr__phone}>
                +7 903 009 98 74
              </a>
            </div>
            <div className={s.last_spr__cta_wrapper}>
              <Link
                href="https://springle.ru/tournaments"
                target="_blank"
                rel="noopener noreferrer"
                className={s.last_spr__link}
              >
                Перейти на сайт
              </Link>
            </div>
          </div>
          <div className={s.last_spr__image_wrapper}>
            <Image
              src="/images/last-spr.png"
              alt="Галина Губанова"
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
