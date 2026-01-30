import React from "react";
import s from "./Home.module.scss";
import clsx from "clsx";
import { Hero } from "@/types";
import Link from "next/link";
import Image from "next/image";
import HomeBigCard from "@/components/sections/HomeBigCard";

const Page = () => {
  const hero: Hero[] = [
    {
      img: "/icons/hero-arr-1.svg",
      span: "Консалтинговая компания,",
    },
    {
      img: "/icons/hero-arr-2.svg",
      span: "Деловое медиа,",
    },
    {
      img: "/icons/hero-arr-3.svg",
      span: "Киношкола и продакшн студия,",
    },
    {
      img: "/icons/hero-arr-4.svg",
      span: "Спортивная корпоративная лига",
    },
  ];

  const home_nav = [
    {
      href: "/#1",
      text: "Frank RG",
      img: "/icons/home_nav-arr-1.svg",
    },
    {
      href: "/#2",
      text: "Frank Media",
      img: "/icons/home_nav-arr-1.svg",
    },
    {
      href: "/#3",
      text: "Киношкола ЦЕХ",
      img: "/icons/home_nav-arr-2.svg",
    },
    {
      href: "/#4",
      text: "Springle",
      img: "/icons/home_nav-arr-3.svg",
    },
  ];

  const small_card = [
    {
      img: "/images/small-card-1.png",
      tag_1: "Бизнес",
      tag_2: "Интервью",
      title: "Решение на миллион: “В бизнесе важно быть честным с собой”",
      data: "28 октября  2025, tg.ru",
      link: "https://t.me/gribanov_channel/229",
    },
    {
      img: "/images/small-card-2.png",
      tag_1: "Бизнес",
      tag_2: "Публикация",
      title: "Кого я никогда не найму на работу: бенчмарк для руководителей",
      data: "3 июля 2025, tg.ru",
      link: "https://t.me/gribanov_channel/176",
    },
    {
      img: "/images/small-card-3.png",
      tag_1: "Бизнес",
      tag_2: "Видео",
      title: "Как сделать бизнес-премию и повысить имидж бренда",
      data: "24 февраля 2025, vk.ru",
      link: "https://vkvideo.ru/video-227184791_456239128",
    },
    {
      img: "/images/small-card-4.png",
      tag_1: "Банки",
      tag_2: "Публикация",
      title: "Без доверия работать  с чувствительными данными невозможно",
      data: "14 декабря 2023, komersant.ru",
      link: "https://www.kommersant.ru/doc/6381155",
    },
    {
      img: "/images/small-card-5.png",
      tag_1: "Бизнес",
      tag_2: "Интервью",
      title: "Киношколы — это хардкор для сильных духом",
      data: "06 декабря 2023, rb.ru",
      link: "https://rb.ru/longread/yuri-gribanov-about-tseh/",
    },
    {
      img: "/images/small-card-6.png",
      tag_1: "Медиа",
      tag_2: "Публикация",
      title: "Как мы создавали Frank Media",
      data: "22 апреля 2023, vc.ru",
      link: "https://vc.ru/media/673775-kak-my-sozdavali-frank-media-i-pochemu-reshili-perevesti-ego-na-novyi-domen",
    },
    {
      img: "/images/small-card-7.png",
      tag_1: "Банки",
      tag_2: "Публикация",
      title:
        "Конец эпохи депозитов: как меняется рынок сбережений в условиях низких ставок",
      data: "21 марта 2021, forbes.ru",
      link: "https://www.forbes.ru/finansy-i-investicii/424383-konec-epohi-depozitov-kak-menyaetsya-rynok-sberezheniy-v-usloviyah",
    },
    {
      img: "/images/small-card-8.png",
      tag_1: "Финансы",
      tag_2: "Публикация",
      title: "Дойдут ли пожертвованные деньги или попадут  к мошенникам?",
      data: "03 июня 2017, forbes.ru",
      link: "https://www.forbes.ru/finansy-i-investicii/424383-konec-epohi-depozitov-kak-menyaetsya-rynok-sberezheniy-v-usloviyah",
    },
  ];

  const books = [
    {
      year: "2025",
      img: "/images/book-1.png",
      link: "https://vc.ru/books/2683512-rekomendatsii-knig-2025-god",
    },
    {
      year: "2024",
      img: "/images/book-2.png",
      link: "https://vc.ru/books/1751344-chto-iz-prochitannogo-mnoi-v-2024-godu-ya-mogu-rekomendovat-vam",
    },
    {
      year: "2023",
      img: "/images/book-3.png",
      link: "https://vc.ru/books/1036607-knigi-kotorye-ya-prochital-v-2023-godu",
    },
    {
      year: "2022",
      img: "/images/book-4.png",
      link: "https://vc.ru/books/580954-knigi-prochitannye-v-2022-godu",
    },
  ];

  return (
    <main>
      <div className={s.home_top_cont}>
        <section className={clsx(s.hero, "section_padding")}>
          <div className="wrapper">
            <div className={s.hero__container}>
              <div className={s.hero__header}>
                <div className={s.hero__title_wrapper}>
                  <div className={s.hero__decoration}></div>
                  <h1 className={s.hero__title}>
                    Юрий
                    <br /> Грибанов
                  </h1>
                </div>
                <div className={s.hero__achievements}>
                  <p className={s.hero__achievement_text}>
                    ТОП-100 крупнейших <br /> консалтинговых компаний <br /> по
                    версии RAEX
                  </p>
                  <p className={s.hero__achievement_text}>
                    ТОП-2 самых цитируемых <br /> финансовых СМИ по версии{" "}
                    <br /> Медиалогии
                  </p>
                </div>
              </div>
              <div className={s.hero__body}>
                <p className={s.hero__subtitle}>Предприниматель,</p>
                <ul className={s.hero__list}>
                  {hero.map((t) => {
                    return (
                      <li key={t.span} className={s.hero__item}>
                        <img className={s.hero__icon} src={t.img} alt="" />
                        <span className={s.hero__text}>{t.span}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={clsx(s.home_gallery, "section_padding")}>
          <div className="wrapper">
            <div className={s.home_gallery_cont}>
              <div className={s.home_gallery_left}>
                <div>
                  <img src="/images/home_gallery-1.png" alt="" />
                  <img src="/images/home_gallery-2.png" alt="" />
                </div>
                <img src="/images/home_gallery-3.png" alt="" />
              </div>
              <div className={s.home_gallery_right}>
                <img src="/images/home_gallery-4.png" alt="" />
                <img src="/images/home_gallery-5.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className={clsx(s.home_all_projects, "section_padding")}>
          <div className="wrapper">
            <div className={s.home_all_projects_cont}>
              <div className={s.home_all_projects_left}>
                <img src="/icons/home_all_projects-icon.svg" alt="" />
                <div>
                  <p>
                    В современном мире ценности создаются на стыке компетенций,
                    на границе разных индустрий.
                  </p>
                  <p>
                    Главное искусство — найти баланс, чтобы многогранность не
                    превратилась в расфокусированность.
                  </p>
                </div>
              </div>
              <div className={s.home_all_projects_right}>
                <p>Все проекты и направления:</p>
                <nav>
                  {home_nav.map((t) => {
                    return (
                      <Link key={t.href} href={t.href}>
                        <p>{t.text}</p>
                        <img src={t.img} alt="" />
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className={s.homeCard_cont}>
          <HomeBigCard
            label="Основатель, СЕО и руководитель Frank RG"
            image="/images/img-1.png"
            description="Frank RG появилась как идея объединить опыт,  накопленный в консалтинге и в банковской индустрии.  В 2006 году я пришел в банк Хоум Кредит, где мне,  как бывшему консультанту, поручили построить отдел внешней аналитики. Именно этот опыт лег в основу того, чем сегодня занимается команда Frank RG."
            href="https://frankrg.com/"
            intro="Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. "
          />
          <HomeBigCard
            label="Издатель Frank Media"
            image="/images/img-2.png"
            description="В 2017 году на рынке деловых медиа разгорался кризис. «Двойные сплошные» символично разделили историю деловой журналистики на «до» и «после». До — эпоха великих издательских домов «Коммерсанта» и «Ведомостей». После — эпоха захвата информационного пространства блогерами, рождения множества «бутиковых» медиа и снижения престижа журналистской профессии. И мы увидели в этом возможность для создания делового издания, сфокусированного на рынке банков и финансов. Так появилось Frank Media, которое сегодня занимает 2-е место по цитируемости среди всех финансовых изданий России."
            href="https://frankmedia.ru/"
            intro="Frank Media — деловое издание о финансах  и экономике. Последние новости  из мира банков и финансовых рынков
в России и мире."
          />
          <HomeBigCard
            label="Сооснователь Springle"
            image="/images/img-3.png"
            description="Во Frank RG алтимат фрисби стал корпоративным спортом в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться,  а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!"
            href="https://springle.ru"
            intro="Алтимат фрисби — командная игра  с летающим диском."
          />
          <HomeBigCard
            label="Сооснователь и продюсер студии и киношколы ЦЕХ"
            image="/images/img-4.png"
            description="Родившись как идея для бизнеса на съемочной площадке фильма ЭТАЖИзнь, ЦЕХ стал творческим крылом экосистемы Frank. Студия ЦЕХ помогает упаковывать идеи и сообщения Frank RG, Frank Media и Springle в увлекательный видео-продукт. А киношкола ЦЕХ взращивает молодое поколение кинематографистов."
            href="https://tseh.company"
            intro="ЦЕХ — это экосистема!
  Мы сами снимаем кино и учим этому других."
          />
        </div>

        <section className="section_padding">
          <div className="wrapper">
            <div className={s.home_text_cont}>
              <h2>
                Член попечительских <br /> советов <br /> благотворительных{" "}
                <br /> фондов
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
                  <a href="https://fondpravmir.ru/">
                    <p>Правмир</p>
                    <img src="/icons/home_nav-arr-2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section_padding">
        <div className="wrapper">
          <div className={s.small_cards_home}>
            <h2>
              Публикации, интервью <br /> и видео
            </h2>

            {small_card.map((t) => {
              return (
                <div key={t.title}>
                  <Image
                    src={t.img}
                    alt={t.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className={s.tags}>
                    <p>{t.tag_1}</p>
                    <p>{t.tag_2}</p>
                  </div>
                  <h3>{t.title}</h3>
                  <div className={s.small_card_bottom}>
                    <p>{t.data}</p>
                    <a href={t.link} target="_blank" rel="noopener noreferrer">
                      Читать
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={clsx(s.books_section, "section-padding")}>
        <div className="wrapper">
          <div>
            <div className={s.books_texts}>
              <h2>
                Книги, которые <br /> я рекомендую прочитать
              </h2>
              <p>
                Книги — это бесконечный источник знаний, идей, вдохновения и
                утешения. К сожалению, чтение требует времени и дисциплины.
                Чтобы помочь себе и своим коллегам в поисках сил и времени для
                книг, мы создали внутри Frank RG традицию делиться рецензиями на
                прочитанные книги. Это помогает найти свою следующую книгу и
                дополнительно мотивирует прочитать быстрее и больше.
              </p>
            </div>
            <div className={s.books}>
              {books.map((t) => {
                return (
                  <div key={t.img}>
                    <p>{t.year}</p>
                    <Image
                      src={t.img}
                      alt={t.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <a href={t.link} target="_blank" rel="noopener noreferrer">
                      Читать
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(s.tg_home, "sectiob-padding")}>
        <div className="wrapper">
          <div>
            <h2>Канал «ГРИБАНОВ»</h2>
            <div className={s.tg_cont}>
              <div>
                <p className={s.subtitle_tg}>
                  Веду авторский тг-канал для руководителей и тех, кто хочет ими
                  стать
                </p>
                <p className={s.tg_tag}>@gribanov_channel</p>
                <a
                  href="https://t.me/+WbUPnCLcqLxjM2Fi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Читать канал
                </a>
              </div>
              <div>
                <img src="/icons/tg.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
