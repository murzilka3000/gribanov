import HomeBigCard from "@/components/sections/HomeBigCard";
import s from "./Springle.module.scss";
import clsx from "clsx";
import Link from "next/link";

const products_springle = [
  {
    img: "/icons/spr-1.svg",
    title: "Организация внутрикорпоративных турниров",
    text: "Отдельное мероприятие или часть корпоративной спартакиады",
  },
  {
    img: "/icons/spr-2.svg",
    title: "Организация турнира между компаниями",
    text: "Однодневный турнир по алтимат фрисби для 4-8 команд",
  },
  {
    img: "/icons/spr-3.svg",
    title: "Организация любительского чемпионата",
    text: "Календарь игр алтимат фрисби  на 7-8 месяцев для 15-20 команд",
  },
];

const busness = [
  {
    text: "Равенство, равные возможности",
  },
  {
    text: "Здоровая конкуренция, лидерство",
  },
  {
    text: "Развитие, ответственность, вовлечение",
  },
  {
    text: "Демократичность, инициатива, меритократия",
  },
  {
    text: "Открытость, доверие",
  },
  {
    text: "Позитивные отношения  в команде",
  },
];

const free = [
  {
    text: "Гендерно-смешанные команды",
  },
  {
    text: "Уважение к соперникам",
  },
  {
    text: "Самоорганизация команд",
  },
  {
    text: "Отсутствие судей",
  },
  {
    text: "Честная игра",
  },
  {
    text: "Неконтактный спорт",
  },
];

const page = () => {
  return (
    <main>
      <div className={s.hero}>
        <HomeBigCard
          image="/images/img-3.png"
          label="Сооснователь Springle"
          intro="Алтимат фрисби — командная игра с летающим диском."
          href="https://springle.ru/"
          description="Во Frank RG алтимат фрисби стал корпоративным спортом в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться,  а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!"
        />
      </div>
      <div className={s.bg_orange}>
        <section className={clsx(s.ultimate, "section_padding")}>
          <div className="wrapper">
            <div className={s.ultimate__container}>
              <div className={s.ultimate__image_wrapper}>
                <img src="/images/gr.png" alt="" />
              </div>
              <div className={s.ultimate__content}>
                <h2 className={s.ultimate__title}>
                  Алтимат фрисби — моя любимая игра
                </h2>
                <figure className={s.ultimate__quote_block}>
                  <blockquote className={s.ultimate__quote}>
                    <p className={s.ultimate__text}>
                      В 2008 году я основал аналитическую компанию Frank RG,
                      которая занимается исследованиями банковской розницы.
                    </p>
                    <p className={s.ultimate__text}>
                      За эти 14 лет мы попробовали различные виды коллективного
                      спорта, но именно алтимат фрисби стал основным на
                      корпоративах компании.
                    </p>
                    <p className={s.ultimate__text}>
                      Почему? Этот спорт идеально подходит под наши ценности:
                      командная работа, безупречная репутация сотрудников как
                      внутри команды, так и в отношениях с клиентами, инициатива
                      и ответственность — у нас часто именно команда определяет,
                      что и как мы делаем дальше. Настоящий алтимат.
                    </p>
                  </blockquote>
                  <figcaption className={s.ultimate__author}>
                    Юрий Грибанов
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.spr_prod, "section-padding")}>
          <div className="wrapper">
            <div>
              <h2>Продукты</h2>
              <div className={s.spr_prod_cont}>
                {products_springle.map((t) => {
                  return (
                    <div key={t.title}>
                      <img src={t.img} alt="" />
                      <h3>{t.title}</h3>
                      <p>{t.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.corporate_sport, "section_padding")}>
          <div className="wrapper">
            <div className={s.corporate_sport__container}>
              <div className={s.corporate_sport__header}>
                <h2 className={s.corporate_sport__title}>
                  Алтимат фрисби — идеальный корпоративный спорт
                </h2>
                <p className={s.corporate_sport__subtitle}>
                  Ценности алтимат фрисби идеально коррелируют с представлениями
                  о том, каким должен быть успешный бизнес. Они созвучны
                  ценностям любой компании.
                </p>
              </div>
              <div className={s.corporate_sport__content}>
                <div className={s.corporate_sport__column}>
                  <h3>Бизнес</h3>
                  {busness.map((t) => (
                    <div key={t.text} className={s.corporate_sport__item}>
                      <p className={s.corporate_sport__text}>{t.text}</p>
                    </div>
                  ))}
                </div>
                <div className={s.corporate_sport__image_wrapper}>
                  <img src="/icons/s-arr.svg" alt="" />
                </div>
                <div className={s.corporate_sport__column}>
                  <h3>Фрисби</h3>
                  {free.map((t) => (
                    <div key={t.text} className={s.corporate_sport__item}>
                      <p className={s.corporate_sport__text}>{t.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.springle_info, "section_padding")}>
          <div className="wrapper">
            <div className={s.springle_info__container}>
              <div className={s.springle_info__block}>
                <h3 className={s.springle_info__title}>
                  Springle — часть мирового спортивного движения алтимат фрисби
                </h3>
                <div className={s.springle_info__text_group}>
                  <p className={s.springle_info__text}>
                    Мы получили эксклюзивные права на проведение игр по алтимату
                    от Федерации флаинг диска России.
                  </p>
                  <p className={s.springle_info__text}>
                    Благодаря сотрудничеству с Федерацией мы привлекаем лучших в
                    России тренеров по алтимат фрисби — чемпионов мира, Европы и
                    России разных лет.
                  </p>
                  <p className={s.springle_info__text}>
                    10% всей выручки Springle перечисляет в Федерацию на
                    развитие алтимата в России. А Федерация следит за
                    соблюдением нами правил и стандартов игры.
                  </p>
                  <p className={s.springle_info__text}>
                    Работая со Springle, вы поддерживаете развитие алтимат
                    фрисби в России.
                  </p>
                </div>
              </div>
              <div className={s.springle_info__block}>
                <h3 className={s.springle_info__title}>Springle Pro</h3>
                <div className={s.springle_info__text_group}>
                  <p className={s.springle_info__text}>
                    Мы сделали турнир, который стал первым турниром с призовым
                    фондом для российского алтимата. На него приглашаются 8
                    лучших команд после Чемпионата России.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(s.video, "section-padding")}>
          <div className="wrapper">
            <div>
              <h2>Видео</h2>
              <div className={s.video_container}>
                <iframe
                  src="https://www.youtube.com/embed/ID_ВАШЕГО_ВИДЕО"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className={s.img_7}>
          <div className="wrapper2">
            <img src="/images/img-7.png" alt="" />
          </div>
        </section>

        <section className={clsx(s.last_spr, "section_padding")}>
          <div className="wrapper">
            <div className={s.last_spr__container}>
              <div className={s.last_spr__info}>
                <div className={s.last_spr__header}>
                  <h2 className={s.last_spr__title}>Свяжитесь с нами</h2>
                </div>
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
                <img src="/images/last-spr.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
