"use client";

import { useRef } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import s from "@/app/speaker/Speaker.module.scss";
import { speakerTopics } from "@/lib/data";
import { ScrollLink } from "@/components/ui/ScrollLink";

const pad = (n: number) => String(n).padStart(2, "0");

export const TopicsSpeakerSection = () => {
  const topicsPrevRef = useRef<HTMLButtonElement>(null);
  const topicsNextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={clsx(s.topics_speaker, "section_padding")}>
      <div className="wrapper">
        <div className={s.topics_speaker__content}>
          <div className={s.topics_speaker__head}>
            <h2 className={s.topics_speaker__title}>Темы выступлений</h2>
            <div className={s.topics_speaker__nav}>
              <button
                ref={topicsPrevRef}
                type="button"
                aria-label="Назад"
                className={clsx(
                  s.topics_speaker__nav_btn,
                  s.topics_speaker__prev,
                )}
              >
                <svg
                  className={s.topics_speaker__nav_icon}
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" />
                  <path d="M29.096 22.983H16.259L19.449 26.173L18.327 27.317L13.08 22.07L18.327 16.823L19.449 17.967L16.281 21.135H29.096V22.983Z" />
                </svg>
              </button>
              <button
                ref={topicsNextRef}
                type="button"
                aria-label="Вперёд"
                className={clsx(
                  s.topics_speaker__nav_btn,
                  s.topics_speaker__next,
                )}
              >
                <svg
                  className={s.topics_speaker__nav_icon}
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" />
                  <path d="M14.08 22.983V21.135H26.895L23.727 17.967L24.849 16.823L30.096 22.07L24.849 27.317L23.727 26.173L26.917 22.983H14.08Z" />
                </svg>
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            className={s.topics_speaker__slider}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              prevEl: topicsPrevRef.current,
              nextEl: topicsNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = topicsPrevRef.current;
                nav.nextEl = topicsNextRef.current;
              }
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {speakerTopics.map((topic, index) => (
              <SwiperSlide
                key={topic.title}
                className={s.topics_speaker__slide}
              >
                <div className={s.topics_speaker__card}>
                  <span className={s.topics_speaker__card_number}>
                    {pad(index + 1)}
                  </span>
                  <h3
                    className={clsx(
                      s.topics_speaker__card_title,
                      topic.plainWrap && s.topics_speaker__card_title_plain,
                    )}
                  >
                    {topic.title}
                  </h3>
                  <p className={s.topics_speaker__card_text}>{topic.text}</p>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className={s.topics_speaker__slide}>
              <div className={s.topics_speaker__card_2}>
                <span className={s.topics_speaker__card_number}>
                  {pad(speakerTopics.length + 1)}
                </span>
                <h3 className={s.topics_speaker__card_title}>
                  Разработаю тему под ваш запрос
                </h3>
                <ScrollLink
                  className={s.topics_speaker__card_link}
                  href="#contact"
                >
                  Обсудить тему
                </ScrollLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
