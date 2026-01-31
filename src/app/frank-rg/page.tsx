import React from "react";
import s from "./FrankRg.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";
import clsx from "clsx";
import Image from "next/image";

const advantages = [
  {
    img: "/icons/advantages-1.svg",
    number: "17",
    text: "лет на рынке",
  },
  {
    img: "/icons/advantages-2.svg",
    number: "50+",
    text: "аналитических продуктов",
  },
  {
    img: "/icons/advantages-3.svg",
    number: "95%",
    text: "доля клиентов рынка",
  },
  {
    img: "/icons/advantages-4.svg",
    number: "500+",
    text: "млн рублей выручка в 2025 г.",
  },
];

const products = [
  {
    title: "Frank 360",
    text: "Масштабный срез рынка, который проводится раз в год.  Идея проекта — объединить многочисленные исследования, которые банки привыкли заказывать у разных профильных экспертов, и самостоятельно свести их в единый отчёт.",
  },
  {
    title: "Бенчмарк",
    text: "Анализ данных, необходимых для принятия бизнес-решений в различных сферах, например: анализ ставок по вкладам, кредитам и накопительным счетам, фактических ставок по ипотеке  и объёмов ипотечных портфелей, предложения для малого и среднего бизнеса и другие.",
  },
  {
    title: "Индивидуальный проект",
    text: "Исследования неочевидных сегментов. Выявление рыночных и технологических трендов на банковском рынке, оценка перспектив и возможностей, анализ предпочтения клиентов, а также обучение работе с информацией  и развитие профессионального сообщества для обмена опытом и идеями.",
  },
];

const awards = [
  {
    text: 'Победа в категории - "Human Resources" Cannes Corporate Media & TV Awards (2019, Франция, Канны)',
    id: 1
  },
  {
    text: "Лучший режиссер - Indian Cine Film Festival (2019, Индия, Мумбаи)",
    id: 2
  },
  {
    text: "Лучшая музыка - Indian Cine Film Festival (2019, Индия, Мумбаи)",
    id: 3
  },
  {
    text: "Лучший короткометражный фильм - Надымский Международный Фильм Фестиваль (2019, Россия, Надым)",
    id: 4
  },
  {
    text: "Лучший короткометражный фильм - Всероссийский Молодежный Кинофестиваль позитивного кино (2019, Россия, Пермь)",
    id: 5
  },
  {
    text: "Лучшая музыка - Indian Cine Film Festival (2019, Индия, Мумбаи)",
    id: 6
  },
];

const page = () => {
  return (
    <main>
      <div className={s.hero}>
        <HomeBigCard
          image="/images/img-1.png"
          label="Основатель, СЕО и руководитель Frank RG"
          intro="Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. "
          href="https://frankrg.com/"
          description="Frank RG появилась как идея объединить опыт,  накопленный в консалтинге и в банковской индустрии.  В 2006 году я пришел в банк Хоум Кредит, где мне,  как бывшему консультанту, поручили построить отдел внешней аналитики. Именно этот опыт лег в основу того, чем сегодня занимается команда Frank RG."
        />
      </div>

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
                  <span>2</span> офиса -- в Москве  и в Орле
                </p>
                <p>
                  <span>129</span> человек работают  в компании
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/map.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={s.advantages}>
        <div className="wrapper">
          <div className={s.advantages_cont}>
            {advantages.map((t) => {
              return (
                <div key={t.text}>
                  <img src={t.img} alt={t.text} />
                  <p className={s.advantages_number}>{t.number}</p>
                  <p className={s.advantages_text}>{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={clsx(s.products, "section-padding")}>
        <div className="wrapper">
          <div>
            <h2>Продукты</h2>
            <div className={s.products_cont}>
              {products.map((t) => {
                return (
                  <div key={t.title}>
                    <div>
                      <h3>{t.title}</h3>
                    </div>
                    <p>{t.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(s.black_section, "section-padding")}>
        <div className="wrapper">
          <div className={s.black_section_cont}>
            <div>
              <div>
                <h2>Frank Premium Banking Award</h2>
                <p>
                  Единственный рейтинг банков сегмента премиального обслуживания
                  в России.
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
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(s.cult, "section-padding")}>
        <div className="wrapper">
          <div className={s.cult_cont}>
            <h2>Корпоративная культура</h2>
            <div className={s.blockquote_cont}>
              <Image
                src="/images/yr.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <figure className={s.quote}>
                <blockquote>
                  <p>
                    Для меня важно, чтобы Frank RG была местом, куда хочется
                    приходить мне и всем членам команды
                  </p>
                </blockquote>
                <figcaption className={s.quote__author}>
                  Юрий Грибанов
                </figcaption>
              </figure>
            </div>
            <div className={s.first}>
              <div>
                <p>Небольшая компания, работающая по западным стандартам</p>
              </div>
              <div>
                <p>Понятная и открытая процедура принятия решений</p>
              </div>
            </div>
            <div className={s.second}>
              <div>
                <p>Возможность развития личного бренда в медиа</p>
              </div>
              <div>
                <p>Эффективная площадка для получения опыта и экспертизы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(s.shop, "section-padding")}>
        <div className="wrapper">
          <div className={s.shop_cont}>
            <h2>
              Мы всегда придумываем для команды что-то необычное, помогая
              взглянуть на нашу работу под другим углом
            </h2>
            <p>Мерч Frank RG </p>
          </div>
          <div className={s.shop_top}>
            <div className={s.g_4}>
              <div className={s.shop_card}>
                <Image
                  src="/images/p-1.png"
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Frank RG поло</h3>
                <p>Коллекция 2018 г. </p>
              </div>
              <div className={s.shop_card}>
                <Image
                  src="/images/p-2.png"
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>Frank RG пакет</h3>
                <p>Коллекция 2019 г. </p>
              </div>
            </div>
            <div className={s.shop_card}>
              <Image
                src="/images/p-3.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3>Frank RG Love is... </h3>
              <p>Коллекция 2022 г. </p>
            </div>
          </div>
          <div className={s.g_4_1}>
            <div className={s.shop_card}>
              <Image
                src="/images/p-4.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3>Frank RG диск</h3>
              <p>Коллекция 2023 г. </p>
            </div>
            <div className={s.shop_card}>
              <Image
                src="/images/p-5.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3>Frank RG футболка</h3>
              <p>Коллекция 2024 г. </p>
            </div>
            <div className={s.shop_card}>
              <Image
                src="/images/p-6.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h3>Frank RG значки</h3>
              <p>Коллекция 2018 г. </p>
            </div>
          </div>
        </div>
      </section>

      <div className={s.change_big_card}>
        <div className="wrapper">
          <h2>Командная игра</h2>
        </div>

        <HomeBigCard
          image="/images/img-3.png"
          intro="Алтимат фрисби — командная игра с летающим диском."
          href="https://frankrg.com/"
          description="Алтимат фрисби стал корпоративным спортом Frank RG  в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться,  а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!"
        />
      </div>

      <section className={s.video}>
        <div className="wrapper">
          <div>
            <h2>Кино Frank RG</h2>
            <div className={s.video_container}>
              <iframe
                src="https://www.youtube.com/embed/ID_ВАШЕГО_ВИДЕО"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <div className={s.video_texts}>
                <p>
                  Мы сняли кино с участием профессиональных актеров и
                  сотрудников Frank RG. Нам удалось сделать стопроцентно
                  зрительский фильм, а не скучное корпоративное кино.
                </p>
                <p>
                  Главный герой, отправляясь на собеседование, готов к любым
                  вопросам и любому развитию событий. Но к тому, что в итоге
                  случается, подготовиться просто невозможно! Из всего
                  предстоящего водоворота событий забытый дома паспорт – самое
                  безобидное, что с ним происходит...
                </p>
              </div>
              <div>
                <h3>Награды</h3>
                <div className={s.awards_grid}>
                  {awards.map((t) => {
                    return (
                      <div className={s.awards_item} key={t.id}>
                        <img src="/icons/i-1.svg" alt="" />
                        <p>{t.text}</p>
                        <img src="/icons/i-2.svg" alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
