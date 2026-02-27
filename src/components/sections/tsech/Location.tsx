"use client";
import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const slides = [
  { id: 1, url: "/images/1.webp" },
  { id: 2, url: "/images/2.webp" },
  { id: 3, url: "/images/3.webp" },
];

const Location = () => {
  return (
    <section className={clsx(s.location, "section_padding")}>
      <div className="wrapper">
        <div className={s.location__container}>
          <h2 className={s.location__title}>Локация «Редакция»</h2>
          <div className={s.location__slider_wrapper}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                prevEl: `.${s.location__prev}`,
                nextEl: `.${s.location__next}`,
              }}
              pagination={{
                el: `.${s.location__pagination}`,
                clickable: true,
              }}
              className={s.location__swiper}
            >
              {slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className={s.location__slide}
                  style={{ backgroundImage: `url(${slide.url})` }}
                />
              ))}

              <button className={clsx(s.location__nav, s.location__prev)}>
                <img src="/icons/prev.svg" alt="" />
              </button>
              <button className={clsx(s.location__nav, s.location__next)}>
                <img src="/icons/next.svg" alt="" />
              </button>
            </Swiper>
            <div className={s.location__pagination}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
