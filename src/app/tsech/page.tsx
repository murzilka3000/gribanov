"use client";
import s from "./Tsech.module.scss";
import clsx from "clsx";
import HomeBigCard from "@/components/sections/HomeBigCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, url: "/images/slide-1.png" },
  { id: 2, url: "/images/slide-1.png" },
  { id: 3, url: "/images/slide-1.png" },
];

const page = () => {
  return (
    <main>
      <div className={s.hero}>
        <HomeBigCard
          image="/images/img-4.png"
          label="Сооснователь и продюсер студии и киношколы ЦЕХ"
          intro="ЦЕХ — это экосистема! Мы работаем в сфере медиа-контента и развиваем другие направления в области кино — от дополнительного образования до аренды декораций в съёмочных локациях."
          href="https://tseh.company/"
          description="Родившись как идея для бизнеса на съемочной площадке фильма «ЭТАЖИзнь», ЦЕХ стал творческим крылом экосистемы Frank. Студия ЦЕХ помогает упаковывать идеи и сообщения Frank RG, Frank Media и Springle в увлекательный видео-продукт. А киношкола взращивает молодое поколение кинематографистов."
        />
      </div>
      <div className={s.bg}>
        <section className={clsx(s.projects, "section_padding")}>
          <div className="wrapper">
            <div className={s.projects__container}>
              <h2 className={s.projects__title}>Наши проекты</h2>
              <div className={s.projects__grid}>
                <div className={s.projects__item}>
                  <div className={s.projects__info}>
                    <h3 className={s.projects__item_title}>
                      ЦЕХ <span>Студия</span>
                    </h3>
                    <p className={s.projects__item_text}>
                      Продакшн-студия полного цикла с постоянной командой,
                      собственным оборудованием и студией в центре Москвы
                    </p>
                  </div>
                  <div className={s.projects__actions}>
                    <img
                      className={s.projects__image}
                      src="/icons/a-w.svg"
                      alt=""
                    />
                    <a className={s.projects__link} href="https://tseh.studio/">
                      Подробнее
                    </a>
                  </div>
                </div>

                <div className={s.projects__item}>
                  <div className={s.projects__info}>
                    <h3 className={s.projects__item_title}>
                      ЦЕХ <span>Квартирник</span>
                    </h3>
                    <p className={s.projects__item_text}>
                      Творческие пространства в Москве для тех, кто увлечён
                      фотографией, кинематографом и ретро-эстетикой
                    </p>
                  </div>
                  <div className={s.projects__actions}>
                    <img
                      className={s.projects__image}
                      src="/icons/a-w.svg"
                      alt=""
                    />
                    <a
                      className={s.projects__link}
                      href="https://kvartirnik.studio/"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>

                <div className={s.projects__item}>
                  <div className={s.projects__info}>
                    <h3 className={s.projects__item_title}>
                      ЦЕХ <span>Киношкола</span>
                    </h3>
                    <p className={s.projects__item_text}>
                      Единственная в России киношкола для подростков, где
                      занятия проходят по-взрослому
                    </p>
                  </div>
                  <div className={s.projects__actions}>
                    <img
                      className={s.projects__image}
                      src="/icons/a-w.svg"
                      alt=""
                    />
                    <a className={s.projects__link} href="https://kino.school/">
                      Подробнее
                    </a>
                  </div>
                </div>

                <div className={s.projects__item}>
                  <div className={s.projects__info}>
                    <h3 className={s.projects__item_title}>
                      ЦЕХ <span>Практикум</span>
                    </h3>
                    <p className={s.projects__item_text}>
                      Киношкола для взрослых: никакой теории, все обучение —
                       через практику
                    </p>
                  </div>
                  <div className={s.projects__actions}>
                    <img
                      className={s.projects__image}
                      src="/icons/a-w.svg"
                      alt=""
                    />
                    <a
                      className={s.projects__link}
                      href="https://practicum.school"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.studio}>
          <div className="wrapper">
            <div className={s.studio__container}>
              <h2 className={s.studio__title}>
                ЦЕХ <span className={s.studio__title_accent}>Студия</span>
              </h2>
              <p className={s.studio__subtitle}>
                Придумаем идею, напишем сценарий, снимем и смонтируем ролик под
                ваши задачи
              </p>
              <div className={s.studio__box}>
                <p className={s.studio__box_text}>
                  У нас есть то, чего нет у других: свое оборудование, локации
                  для съемок <br />и постоянная команда
                </p>
                <img
                  className={s.studio__box_icon}
                  src="/icons/zap.svg"
                  alt=""
                />
              </div>
              <div className={s.video_container}>
                <iframe
                  className={s.studio__iframe}
                  src="https://www.youtube.com/embed/..."
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className={s.studio_kv}>
          <div className="wrapper">
            <div className={s.studio_kv__container}>
              <h2 className={s.studio_kv__title}>
                ЦЕХ <span>Квартирник</span>
              </h2>
              <p className={s.studio_kv__subtitle}>
                Творческие пространства в Москве для фото и видеосъемки
              </p>
              <div className={s.studio__box}>
                <p className={s.studio__box_text}>
                  Мы предлагаем в аренду декорации <br />в стилизованных
                  студиях, отражающие <br />
                  дух времени различных десятилетий
                </p>
                <img
                  className={s.studio__box_icon}
                  src="/icons/zap.svg"
                  alt=""
                />
              </div>
              <div className={s.studio_kv__features}>
                <div className={s.studio_kv__feature}>
                  <h3 className={s.studio_kv__feature_title}>Доступность</h3>
                  <p className={s.studio_kv__feature_text}>
                    Мы предлагаем удобный подъезд для разгрузки на 1 этаже в
                    центре Москвы, что обеспечивает легкий доступ и сокращает
                    время на транспортировку
                  </p>
                </div>

                <div className={s.studio_kv__feature}>
                  <h3 className={s.studio_kv__feature_title}>Адаптивность</h3>
                  <p className={s.studio_kv__feature_text}>
                    Наши студии созданы творцами для творцов. Операторы и
                    фотографы смогут найти впечатляющие планы и уникальные точки
                    съемки
                  </p>
                </div>

                <div className={s.studio_kv__feature}>
                  <h3 className={s.studio_kv__feature_title}>Достоверность</h3>
                  <p className={s.studio_kv__feature_text}>
                    Мы устали от «неживых» и стерильных студий, поэтому
                    художники наполнили жизнью каждый сантиметр нашего
                    пространства
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.location, "section_padding")}>
          <div className="wrapper">
            <div className={s.location__container}>
              <h2 className={s.location__title}>Локация «Гэтсби»</h2>
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

        <section className={s.team}>
          <div className="wrapper">
            <div>
              <h2>Команда</h2>
              <p className={s.desc}>ЦЕХ — это экосистема!</p>
              <img src="/images/img-8.png" alt="" />
              <div className={s.team_zap}>
                <p>
                  Мы работаем не только в сфере медиа-контента, но и развиваем
                   другие направления в области кино — от дополнительного
                   образования до аренды декораций в съёмочных локациях!
                </p>
                <img src="/icons/zap-2.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={s.logos}>
          <div className="wrapper">
            <div>
              <h2>Партнеры</h2>
              <div className={s.logos_flex}>
                <img src="/icons/l-1.svg" alt="" />
                <img src="/icons/l-2.svg" alt="" />
                <img src="/icons/l-3.svg" alt="" />
                <img src="/icons/l-4.svg" alt="" />
                <img src="/icons/l-5.svg" alt="" />
                <img src="/icons/l-6.svg" alt="" />
                <img src="/icons/l-7.svg" alt="" />
                <img src="/icons/l-8.svg" alt="" />
                <img src="/icons/l-9.svg" alt="" />
                <img src="/icons/l-10.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.achievements, "section_padding")}>
          <div className="wrapper">
            <div className={s.achievements__container}>
              <h2 className={s.achievements__title}>Достижения</h2>
              <div className={s.achievements__grid}>
                <div
                  className={s.achievements__item}
                  style={{ backgroundImage: "url('/images/c-1.png')" }}
                >
                  <h3 className={s.achievements__item_title}>
                    Золотой дельфин
                  </h3>
                  <p className={s.achievements__item_text}>
                    В 2019 году корпоративный короткометражный фильм для FRANK
                    RG получил приз на Каннском фестивале корпоративного кино
                  </p>
                </div>
                <div
                  className={s.achievements__item}
                  style={{ backgroundImage: "url('/images/c-2.png')" }}
                >
                  <h3 className={s.achievements__item_title}>
                    Рекламный ролик для «Транснефти»
                  </h3>
                  <p className={s.achievements__item_text}>
                    Создали запоминающуюся метафору и помогли запустить большую
                    рекламную кампанию в честь юбилея компании
                  </p>
                </div>
                <div
                  className={s.achievements__item}
                  style={{ backgroundImage: "url('/images/c-3.png')" }}
                >
                  <h3 className={s.achievements__item_title}>
                    Имиджевый ролик для Сбера
                  </h3>
                  <p className={s.achievements__item_text}>
                    Ролик для Сбербанк Страхование Жизни и ВПСО «Ангел»,
                    подчеркивающий ценность спасательных операций
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.socials, "section_padding")}>
          <div className="wrapper">
            <h2 className={s.socials__title}>Наши социальные сети</h2>
            <div className={s.socials__grid}>
              <div className={s.socials__column}>
                <div className={s.socials__item}>
                  <div className={s.socials__info}>
                    <a href="" className={s.socials__link}>
                      ВКонтакте
                    </a>
                    <p className={s.socials__label}>Киношкола для подростков</p>
                    <p className={s.socials__handle}>@kinoschool.tseh</p>
                  </div>
                  <img
                    className={s.socials__icon}
                    src="/icons/vk-2.svg"
                    alt=""
                  />
                </div>
                <div className={s.socials__item}>
                  <div className={s.socials__info}>
                    <a href="" className={s.socials__link}>
                      ВКонтакте
                    </a>
                    <p className={s.socials__label}>Студии для съёмок</p>
                    <p className={s.socials__handle}>@tseh.kvartirnik</p>
                  </div>
                  <img
                    className={s.socials__icon}
                    src="/icons/vk-2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className={s.socials__column}>
                <div className={s.socials__item}>
                  <div className={s.socials__info}>
                    <a href="" className={s.socials__link}>
                      Telegram
                    </a>
                    <p className={s.socials__label}>Киношкола для подростков</p>
                    <p className={s.socials__handle}>@kinoschooltseh</p>
                  </div>
                  <img
                    className={s.socials__icon_2}
                    src="/icons/tg-2.svg"
                    alt=""
                  />
                </div>
                <div className={s.socials__item}>
                  <div className={s.socials__info}>
                    <a href="" className={s.socials__link}>
                      YouTube
                    </a>
                    <p className={s.socials__label}>Киношкола для подростков</p>
                    <p className={s.socials__handle}>@kino.school</p>
                  </div>
                  <img
                    className={s.socials__icon}
                    src="/icons/y-2.svg"
                    alt=""
                  />
                </div>
                <div className={s.socials__item}>
                  <div className={s.socials__info}>
                    <a href="" className={s.socials__link}>
                      YouTube
                    </a>
                    <p className={s.socials__label}>Продакшн-студия</p>
                    <p className={s.socials__handle}>@tseh.studio</p>
                  </div>
                  <img
                    className={s.socials__icon}
                    src="/icons/y-2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
