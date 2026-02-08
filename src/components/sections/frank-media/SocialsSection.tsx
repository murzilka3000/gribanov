import React from "react";
import clsx from "clsx";
import s from "@/app/frank-media/FrankMedia.module.scss";

export const SocialsSection = () => {
  return (
    <section className={clsx(s.socials, "section_padding")}>
      <div className="wrapper">
        <div className={s.socials__inner}>
          <h2 className={s.socials__title}>Наши социальные сети</h2>
          <div className={s.socials__grid}>
            <div className={s.socials__column_1}>
              <div className={s.social_card}>
                <a
                  href="https://t.me/frank_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.social_card__link}
                >
                  Telegram финансы
                </a>
                <p className={s.social_card__desc}>Канал про финансы</p>
                <p className={s.social_card__handle}>@frank_media</p>
                <img
                  src="/icons/tg-1.svg"
                  alt="Telegram"
                  className={s.social_card__icon}
                />
              </div>
              <div className={s.social_card}>
                <a
                  href="https://t.me/fm_invest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.social_card__link}
                >
                  Telegram инвестиции
                </a>
                <p className={s.social_card__desc}>Канал про инвестиции</p>
                <p className={s.social_card__handle}>@fm_invest</p>
                <img
                  src="/icons/tg-1.svg"
                  alt="Telegram"
                  className={s.social_card__icon}
                />
              </div>
            </div>
            <div className={s.socials__column}>
              <div className={s.socials__subgrid}>
                <div className={clsx(s.social_card, s.social_card_z)}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.social_card__link}
                  >
                    Дзен
                  </a>
                  <p className={s.social_card__handle}>@frank_media</p>
                  <img
                    src="/icons/zen.svg"
                    alt="Дзен"
                    className={s.social_card__icon}
                  />
                </div>

                <div className={s.socials__mini_grid}>
                  <div className={clsx(s.social_card, s.social_card_vk)}>
                    <div className={s.social_card__info}>
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.social_card__link}
                      >
                        VK
                      </a>
                      <p className={s.social_card__handle}>@frank_media</p>
                    </div>
                    <img
                      src="/icons/vk.svg"
                      alt="VK"
                      className={s.social_card__icon}
                    />
                  </div>

                  <div className={clsx(s.social_card, s.social_card_rut)}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.social_card__link}
                    >
                      Rutube
                    </a>
                    <p className={s.social_card__handle}>@frank_media</p>
                    <img
                      src="/icons/rub.svg"
                      alt="Rutube"
                      className={s.social_card__icon}
                    />
                  </div>
                </div>
              </div>

              <div className={clsx(s.social_card, s.social_card_y)}>
                <div className={s.social_card__info}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.social_card__link}
                  >
                    YouTube
                  </a>
                  <p className={s.social_card__handle}>@frank_media</p>
                </div>
                <img
                  src="/icons/y.svg"
                  alt="YouTube"
                  className={s.social_card__icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
