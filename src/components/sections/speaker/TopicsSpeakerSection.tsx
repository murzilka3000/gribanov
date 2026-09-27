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
                className={clsx(
                  s.topics_speaker__nav_btn,
                  s.topics_speaker__prev,
                )}
              >
                <img src="/images/sprev.svg" alt="prev" />
              </button>
              <button
                ref={topicsNextRef}
                type="button"
                className={clsx(
                  s.topics_speaker__nav_btn,
                  s.topics_speaker__next,
                )}
              >
                <img src="/images/snext.svg" alt="next" />
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
                  <h3 className={s.topics_speaker__card_title}>
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
