import React from "react";
import s from "./FrankMedia.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";
import clsx from "clsx";
import Image from "next/image";

const images = [
  {
    img: "/icons/logo-1.svg",
  },
  {
    img: "/icons/logo-2.svg",
  },
  {
    img: "/icons/logo-3.svg",
  },
  {
    img: "/icons/logo-4.svg",
  },
  {
    img: "/icons/logo-5.svg",
  },
];

const editors = [
  {
    tag: "Редактор",
    title: "Татьяна Воронова",
    deck: "Главный редактор Frank Media с 2022 года. Возглавила редакцию в начале 2022 года и перестроила её работу в период рыночной турбулентности начала СВО, введения санкций, перестройки экономики. <br/> <br/> До Frank Media Татьяна 12 лет работала в отделе финансовых новостей Ведомостей и 4 года — в агентстве Reuters.",
    img: "/images/ed-1.png",
  },
  {
    tag: "Редактор",
    title: "Татьяна Алешкина",
    deck: "Главный редактор Frank Media с 2019 по 2021 год. Татьяна пришла во Frank Media вскоре после старта проекта и возглавила редакцию после ухода Елены Тофанюк. <br/> <br/> До Frank Media Татьяна много лет работала в РБК.",
    img: "/images/ed-2.png",
  },
  {
    tag: "Редактор",
    title: "Елена Тофанюк",
    deck: "Главный редактор Frank Media с 2018 по 2019 год. Запустила проект, заложила ключевые принципы и стандарты работы редкации. Благодаря Елене с первых дней редакция была независима от бизнеса и издателя (т.е. меня). <br/> <br/> До Frank Media Елена работала в ведущих деловых СМИ: Forbes, РБК и  РБК-ТВ.",
    img: "/images/ed-3.png",
  },
];

const media_cards = [
  {
    img: "/images/media_cards-1.png",
    tag_1: "Сбербанк",
    tag_2: "Санкции",
    tag_3: "Банки Росии",
    title:
      "Как Сберу приходится конкурировать за клиентов | Кирилл Царев, первый зампред Сбербанка",
    data: "21 июня 2024, frankmedia.ru",
    link: "https://frankmedia.ru/167759",
  },
  {
    img: "/images/media_cards-2.png",
    tag_1: "Платежная система",
    tag_2: "Банки",
    tag_3: "Mir pay",
    title:
      "Будущее платежных систем в России: платежи за рубеж и бесконтактная оплата | Владимир Комлев, НСПК",
    data: "12 декабря 2023, frankmedia.ru",
    link: "https://frankmedia.ru/148841",
  },
  {
    img: "/images/media_cards-3.png",
    tag_1: "НПФ",
    tag_2: "Пенсия",
    tag_3: "Накопительная пенсия",
    title:
      'Как правильно копить на пенсию и на чем зарабатывают пенсионные фонды? | Куратор НПФ ГК "Регион"',
    data: "18 сентября 2023, frankmedia.ru",
    link: "https://frankmedia.ru/139019",
  },
];

const page = () => {
  return (
    <main>
      <div className={s.hero}>
        <HomeBigCard
          image="/images/frank-media.png"
          label="Издатель Frank Media"
          intro="Frank Media — деловое издание 
о финансах и экономике. Последние  новости из мира банков и финансовых рынков в России и мире."
          href="https://frankmedia.ru/"
          description="В 2017 году на рынке деловых медиа разгорался кризис. «Двойные сплошные» символично разделили историю деловой журналистики на «до» и «после». До — эпоха великих издательских домов «Коммерсанта» и «Ведомостей». После — эпоха захвата информационного пространства блогерами, рождения множества «бутиковых» медиа и снижения престижа журналистской профессии. И мы увидели в этом возможность для создания делового издания, сфокусированного на рынке банков и финансов. Так появилось Frank Media, которое сегодня занимает 2-е место по цитируемости среди всех финансовых изданий России."
        />
      </div>
      <div className={s.bg}>
        <section className={clsx(s.about, "section-padding")}>
          <div className="wrapper">
            <div>
              <h2>О Frank Media</h2>
              <div className={s.about_cont}>
                <div className={s.about_left}>
                  <p>Frank Media — деловое издание о финансах и экономике</p>
                </div>
                <div className={s.about_right}>
                  <div className={s.about_right_cont}>
                    <p>ТОП-2</p>
                    <p>самых цитируемых СМИ в тематике</p>
                  </div>
                  <div className={s.about_right_cont}>
                    <p>350+</p>
                    <p>тыс. читателей  в 2025 г.</p>
                  </div>
                </div>
              </div>
              <div className={s.logos_cont}>
                <div>
                  <p>
                    Для вас пишут журналисты, работавшие в крупнейших деловых
                    изданиях России
                  </p>
                </div>
                <div className={s.logos_grid}>
                  {images.map((t) => {
                    return <img src={t.img} alt={t.img} key={t.img} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.figure_section, "section-padding")}>
          <div className="wrapper">
            <div className={s.blockquote_cont}>
              <img src="/images/block.png" alt="" />
              <figure className={s.quote}>
                <blockquote>
                  <p>
                    Наши клиенты часто делились «болью», что качество
                    индустриального специализированного контента упало.
                    Количество банковских медиа сократилось до одного лишь
                    «Банковского обозрения», остальные либо умерли, либо
                    превратились в пустышки
                  </p>
                </blockquote>
                <figcaption className={s.quote__author}>
                  Юрий Грибанов
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={clsx(s.editors, "section-padding")}>
          <div className="wrapper">
            <div>
              <h2>Редакторы Frank Media</h2>
              <div className={s.editors_cont}>
                {editors.map((t) => {
                  return (
                    <div key={t.img} className={s.editors_item}>
                      <div className={s.editors_item_left}>
                        <div className={s.editors_top}>
                          <span>{t.tag}</span>
                          <h3>{t.title}</h3>
                        </div>
                        <div className={s.desc}>
                          <p dangerouslySetInnerHTML={{ __html: t.deck }} />
                        </div>
                      </div>
                      <div
                        className={s.editors_img}
                        style={{ backgroundImage: `url(${t.img})` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.standards, "section-padding")}>
          <div className="wrapper">
            <div className={s.standards__inner}>
              <h2 className={s.standards__title}>Стандарты и ценности</h2>
              <p className={s.standards__description}>
                При создании текстов мы ориентируемся на потребности нашей
                аудитории, которая состоит как из обычных потребителей
                финансовых услуг, так и профессионалов из сферы финансов.
              </p>

              <div className={s.standards__list}>
                <div className={s.standart_item}>
                  <img
                    src="/icons/s-1.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>
                    Точность и объективность
                  </h3>
                  <p className={s.standart_item__text}>
                    Frank Media — издание, основанное на журналистике факта.
                    Точность и объективность при передаче информации мы ставим
                    во главу угла. Никакой общественно значимый доказанный факт
                    не может быть сознательно скрыт от читателя.
                  </p>
                </div>

                <div className={s.standart_item}>
                  <img
                    src="/icons/s-2.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>Конфиденциальность</h3>
                  <p className={s.standart_item__text}>
                    Наши источники надежно скрыты, но мы тщательно проверяем,
                    чтобы они не были связаны между собой. Мы никому и никогда
                    не раскрываем наши источники, в том числе властям.
                  </p>
                </div>
              </div>

              <div className={s.standards__list_2}>
                <div className={s.standart_item}>
                  <img
                    src="/icons/s-3.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>Плюрализм</h3>
                  <p className={s.standart_item__text}>
                    Возможность высказаться должна быть предоставлена каждой
                    стороне. Мы не делим героев наших материалов на «своих» и
                    «чужих».
                  </p>
                </div>

                <div className={s.standart_item}>
                  <img
                    src="/icons/s-4.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>Беспристрастность</h3>
                  <p className={s.standart_item__text}>
                    Журналисты Frank Media должны избегать конфликта интересов в
                    любых обстоятельствах. А если такой конфликт присутствует у
                    кого-то из авторов, мы честно его раскрываем.
                  </p>
                </div>

                <div className={s.standart_item}>
                  <img
                    src="/icons/s-5.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>Честность</h3>
                  <p className={s.standart_item__text}>
                    Мы не платим за информацию и не берем никаких взяток,
                    включая информационные.
                  </p>
                </div>
              </div>

              <div className={s.standards__list}>
                <div className={s.standart_item}>
                  <img
                    src="/icons/s-6.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>
                    Точность и объективность
                  </h3>
                  <p className={s.standart_item__text}>
                    Frank Media — издание, основанное на журналистике факта.
                    Точность и объективность при передаче информации мы ставим
                    во главу угла. Никакой общественно значимый доказанный факт
                    не может быть сознательно скрыт от читателя.
                  </p>
                </div>

                <div className={s.standart_item}>
                  <img
                    src="/icons/s-7.svg"
                    alt=""
                    className={s.standart_item__icon}
                  />
                  <h3 className={s.standart_item__title}>Конфиденциальность</h3>
                  <p className={s.standart_item__text}>
                    Наши источники надежно скрыты, но мы тщательно проверяем,
                    чтобы они не были связаны между собой. Мы никому и никогда
                    не раскрываем наши источники, в том числе властям.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.video_media}>
          <div className="wrapper">
            <div className={s.video_media__inner}>
              <h2 className={s.video_media__title}>Видео Frank Media</h2>
              <div className={s.video_media__grid}>
                {media_cards.map((t) => {
                  return (
                    <div key={t.img} className={s.media_card}>
                      <img src={t.img} alt="" className={s.media_card__img} />
                      <div className={s.media_card__tags}>
                        <span className={s.media_card__tag}>{t.tag_1}</span>
                        <span className={s.media_card__tag}>{t.tag_2}</span>
                        <span className={s.media_card__tag}>{t.tag_3}</span>
                      </div>
                      <div className={s.media_card__content}>
                        <h3 className={s.media_card__title}>{t.title}</h3>
                        <div className={s.media_card__footer}>
                          <p className={s.media_card__date}>{t.data}</p>
                          <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.media_card__link}
                          >
                            Смотреть
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={s.socials}>
          <div className="wrapper">
            <div className={s.socials__inner}>
              <h2 className={s.socials__title}>Наши социальные сети</h2>
              <div className={s.socials__grid}>
                {/* Левая колонка с крупными карточками Telegram */}
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
                      alt=""
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
                      alt=""
                      className={s.social_card__icon}
                    />
                  </div>
                </div>

                {/* Правая колонка со сложной сеткой (Дзен, ВК, Рутуб, Ютуб) */}
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
                        alt=""
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
                          alt=""
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
                          alt=""
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
                      alt=""
                      className={s.social_card__icon}
                    />
                  </div>
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
