"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import s from "./SliderMob.module.scss";
import clsx from "clsx";

const DATA = [
  {
    year: "1998",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Закончил московскую математическую школу №152 и поступил на
          экономический факультет Московского Технического Университета Связи и
          Информатики по специальности информационные системы в экономике
        </p>
        <p className={s.subText}>
          Когда я выбирал профессию, то решил стать программистом, потому что
          эта работа не требует общения с людьми. Я был не очень общительным
          ребенком. Но мне нравилось писать, и я думал, что мог бы стать
          журналистом. Свои первые деньги я заработал в 15 лет - написал заметку
          о самых трагичных авариях «Формулы-1» для издания
          «Мегаполис-Экспресс».
        </p>
      </div>
    ),
  },
  {
    year: "2001",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          На третьем курсе начал работать в НПФ «Промтехн»: участвовал в
          сертификации программного обеспечения по уровню безопасности
        </p>
      </div>
    ),
  },
  {
    year: "2003",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>Закончил университет  с красным дипломом</p>
        <p className={s.subText}>
          Я начал карьеру разработчика в таких компаниях, как eHouse и МТС,  но
          очень быстро понял, что вокруг меня множество более талантливых ребят,
          которые пишут код быстрее и качественнее.  Я начал искать возможности
          для смены работы.
        </p>
      </div>
    ),
  },
  {
    year: "2005",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Начал работать в консалтинговой компании Princeton Partners Group
        </p>
        <p className={s.subText}>
          В PPG мы выпустили первое глобальное исследование рынка страхования,
          ставшее эталоном на многие годы. Через год работы я очень устал и
          решил уйти. 90 часов в неделю оказалось для меня слишком крутым
          ритмом.
        </p>
      </div>
    ),
  },
  {
    year: "2006",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Начал работать в Home Credit  and Finance Bank
        </p>
        <p className={s.subText}>
          Я был единственным аналитиком с консалтинговым опытом, и мне поручили
          сделать так, чтобы менеджеры получали отчёты  о конкурентной среде. В
          результате я сделал подразделение рыночной аналитики, которое работает
          до сих пор.
        </p>
      </div>
    ),
  },
  {
    year: "2008",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Получил внешний заказ от ВТБ24  на региональное исследование рынка
          кредитов наличными
        </p>
        <p className={s.subText}>
          Когда я получил первый заказ, передо мной встала дилемма – остаться в
          банке или рискнуть и уйти развивать свою компанию. Выбор дался легко.
          Я на физическом уровне почувствовал, что пора уходить.  Так появилась
          Frank RG.
        </p>
      </div>
    ),
  },
  {
    year: "2009",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Продали первую подписку на ежемесячный мониторинг объёмов рынка и
          тарифов. Первым подписным клиентом стал Ситибанк
        </p>
      </div>
    ),
  },
  {
    year: "2010",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>Открыли офис Frank RG в Москве</p>
        <p className={s.subText}>
          Мы арендовали офис площадью 18 кв. м. и наняли первого сотрудника.
          Было очень страшно, так как денег на аренду и зарплату было всего  на
          3 месяца.
        </p>
        <div>
          <img src="/images/2010.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    year: "2012",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>Открыли филиал Frank RG в Орле</p>
        <div>
          <img src="/images/2012.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    year: "2015",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Впервые вручили награды Frank Award. А ещё увеличили выручку в два
          раза:  с 22 млн руб. до 39 млн руб.
        </p>
        <div>
          <img src="/images/2015.png" alt="" />
        </div>
      </div>
    ),
  },
  {
    year: "2017",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Впервые провели корпоративный турнир Frank RG по алтимат фрисби
        </p>
        <p className={s.subText}>
          Летом 2017 года мы решили, что на летнем корпоративе должна быть
          какая-то спортивная активность. Мы перебрали все: веселые старты,
          футбол, волейбол, баскетбол... Все это нам не подходило: веселые
          старты выглядят со стороны немного унизительными, а для футбола,
          волейбола и баскетбола у нас не хватало игроков.
          <br />
          <br />
          Нас выручил алтимат фрисби. Это простой и элегантный командый спорт.
          Из 26 сотрудников Frank RG в первом турнире участвовали 15.
        </p>
      </div>
    ),
  },
  {
    year: "2018",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>Создали Frank Media</p>
        <p className={s.subText}>
          Наши клиенты часто делились «болью», что качество индустриального
          специализированного контента упало.  Количество банковских медиа
          сократилось до одного лишь «Банковского обозрения», остальные либо
          умерли, либо превратились в пустышки.
        </p>
      </div>
    ),
  },

  {
    year: "2018",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Сняли корпоративный фильм «ЭТАЖИзнь». А ещё создали продакшн-студию и
          киношколу ЦЕХ
        </p>
        <div>
          <img src="/images/2018.png" alt="" />
        </div>
      </div>
    ),
  },

  {
    year: "2019",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Годовая выручка Frank RG  превысила 100 млн руб.
        </p>
      </div>
    ),
  },

  {
    year: "2021",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>
          Посещаемость сайта Frank Media превысила 100 тыс. уникальных
          пользователей в месяц
        </p>
      </div>
    ),
  },

  {
    year: "2022",
    content: (
      <div className={s.itemContent}>
        <p className={s.mainText}>Стартовали проект Springle</p>
        <p className={s.subText}>
          Это была третья попытка запуска проекта. В 2020 году мы отложили старт
          из-за ковида. Затем февраль 2022 года перекроил все планы. У нас были
          мысли, не стоит ли остановиться... Потому что страшно было
          представить, что может случиться ещё, чтобы помешать нам сделать
          Springle.
          <br /> <br />
          Но в апреле 2022 года, несмотря на все препятствия, корпоративная лига
          Springle была представлена публике!
        </p>
      </div>
    ),
  },
];

export default function SliderMob() {
  const rootRef = useRef(null);
  const contentStackRef = useRef(null);
  const yearsListRef = useRef(null);
  const progressLineRef = useRef(null);

  // Добавляем состояние для активного года
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const contents = gsap.utils.toArray(`.${s.contentItem}`) as HTMLElement[];
      const years = gsap.utils.toArray(`.${s.yearItem}`) as HTMLElement[];
      const dots = gsap.utils.toArray(`.${s.dot}`) as HTMLElement[];

      if (years.length === 0) return;

      const yearWidth = 120;
      const totalSteps = DATA.length;

      // 1. Таймлайн
      gsap.to(yearsListRef.current, {
        x: -Math.max(0, activeIndex - 1) * yearWidth,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // 2. Прогресс бар
      gsap.to(progressLineRef.current, {
        scaleX: activeIndex / (totalSteps - 1),
        duration: 0.5,
        ease: "power3.inOut",
      });

      // 3. Анимация высоты родителя и прозрачности контента
      const activeItem = contents[activeIndex];
      
      if (activeItem) {
        // Проявляем активный
        gsap.set(activeItem, { display: "block", position: "absolute", top: 0, left: 0 });
        
        // Считаем высоту и плавно меняем её у родителя
        gsap.to(contentStackRef.current, {
          height: activeItem.offsetHeight,
          duration: 0.4,
          ease: "power2.inOut",
        });

        // Анимация прозрачности БЕЗ сдвигов
        gsap.fromTo(activeItem, 
          { opacity: 0, y: 0 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.4, 
            ease: "none",
            clearProps: "transform" // Чистим за собой
          }
        );
      }

      // Скрываем остальные
      contents.forEach((item, i) => {
        if (i !== activeIndex) {
          gsap.to(item, {
            opacity: 0,
            y: 0,
            duration: 0.3,
            onComplete: () => gsap.set(item, { display: "none" })
          });
        }
      });

      // 4. Года и точки
      years.forEach((_, i) => {
        const isActive = i === activeIndex;
        gsap.to(years[i], {
          opacity: isActive ? 1 : 0.4,
          color: isActive ? "#1a3668" : "#b1b1b1",
          scale: isActive ? 1 : 0.85,
          duration: 0.4,
        });
        gsap.to(dots[i], {
          backgroundColor: isActive ? "#1a3668" : "#d1d9e0",
          borderColor: isActive ? "#1a3668" : "#d1d9e0",
          scale: isActive ? 1.3 : 1,
          duration: 0.4,
        });
      });
    },
    {
      scope: rootRef,
      dependencies: [activeIndex],
    }
  );

  return (
    <section className={clsx("section_padding", s.slider_mob)}>
      <div ref={rootRef} className={clsx(s.root, "")}>
        <div className={s.sticky}>
          <div className={s.container}>
            {/* ТАЙМЛАЙН (Горизонтальный на мобилках) */}
            <div className={s.right}>
              <h2 className={s.title}>Хронология событий</h2>
              <div className={s.timelineViewport}>
                <div className={s.trackLine} />

                {/* scaleX растет слева направо */}
                <div
                  ref={progressLineRef}
                  className={s.progressLine}
                  style={{ transformOrigin: "left center" }}
                />

                <div ref={yearsListRef} className={s.yearsMovingList}>
                  {DATA.map((item, i) => (
                    <div
                      key={i}
                      className={s.yearItem}
                      onClick={() => setActiveIndex(i)} // Делаем кликабельным
                      style={{ cursor: "pointer" }}
                    >
                      <span className={s.yearValue}>{item.year}</span>
                      <div className={s.dotWrapper}>
                        <div className={s.dot} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={s.left}>
              <div ref={contentStackRef} className={s.contentStack}>
                {DATA.map((item, i) => (
                  <div key={i} className={s.contentItem}>
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
