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
                      <div>
                        <div>
                          <p>{t.tag}</p>
                          <h3>{t.title}</h3>
                        </div>
                        <div>
                          <p dangerouslySetInnerHTML={{ __html: t.deck }} />
                        </div>
                      </div>
                      <div style={{ backgroundImage: `url(${t.img})` }}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
