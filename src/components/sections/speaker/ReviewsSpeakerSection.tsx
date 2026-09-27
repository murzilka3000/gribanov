"use client";

import { useState } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import s from "@/app/speaker/Speaker.module.scss";
import { speakerReviews } from "@/lib/data";

const pad = (n: number) => String(n).padStart(2, "0");

export const ReviewsSpeakerSection = () => {
  const [reviewsSwiper, setReviewsSwiper] = useState<SwiperType | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);

  return (
    <section className={clsx(s.reviews_speaker, "section_padding")}>
      <div className="wrapper">
        <div className={s.reviews_speaker__content}>
          <h2 className={s.reviews_speaker__title}>Отзывы</h2>
          <Swiper
            className={s.reviews_speaker__slider}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={setReviewsSwiper}
            onSlideChange={(swiper) => setReviewIndex(swiper.realIndex)}
          >
            {speakerReviews.map((review, index) => (
              <SwiperSlide key={index} className={s.reviews_speaker__slide}>
                <div className={s.reviews_speaker__card}>
                  <p className={s.reviews_speaker__card_text}>{review.text}</p>
                  <p className={s.reviews_speaker__card_author}>
                    {review.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={s.reviews_speaker__controls}>
            <p className={s.reviews_speaker__counter}>
              <span className={s.reviews_speaker__counter_current}>
                {pad(reviewIndex + 1)}
              </span>
              {" / "}
              <span className={s.reviews_speaker__counter_total}>
                {pad(speakerReviews.length)}
              </span>
            </p>
            <div className={s.reviews_speaker__nav}>
              <button
                type="button"
                onClick={() => reviewsSwiper?.slidePrev()}
                className={clsx(
                  s.reviews_speaker__nav_btn,
                  s.reviews_speaker__prev,
                )}
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => reviewsSwiper?.slideNext()}
                className={clsx(
                  s.reviews_speaker__nav_btn,
                  s.reviews_speaker__next,
                )}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
