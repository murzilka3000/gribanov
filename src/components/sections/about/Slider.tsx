"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import s from "./Slider.module.scss";
import clsx from "clsx";

const DATA = [
  // ... ваши данные массива DATA (оставляем без изменений)
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
        <p className={s.mainText}>Закончил университет с красным дипломом</p>
        <p className={s.subText}>
          Я начал карьеру разработчика в таких компаниях, как eHouse и МТС, но
          очень быстро понял, что вокруг меня множество более талантливых ребят,
          которые пишут код быстрее и качественнее. Я начал искать возможности
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
          Начал работать в Home Credit and Finance Bank
        </p>
        <p className={s.subText}>
          Я был единственным аналитиком с консалтинговым опытом, и мне поручили
          сделать так, чтобы менеджеры получали отчёты о конкурентной среде. В
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
          Получил внешний заказ от ВТБ24 на региональное исследование рынка
          кредитов наличными
        </p>
        <p className={s.subText}>
          Когда я получил первый заказ, передо мной встала дилемма – остаться в
          банке или рискнуть и уйти развивать свою компанию. Выбор дался легко.
          Я на физическом уровне почувствовал, что пора уходить. Так появилась
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
          Было очень страшно, так как денег на аренду и зарплату было всего на 3
          месяца.
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
          раза: с 22 млн руб. до 39 млн руб.
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
          специализированного контента упало. Количество банковских медиа
          сократилось до одного лишь «Банковского обозрения», остальные либо
          умерли, либо превратились в пустышки.
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
          Годовая выручка Frank RG превысила 100 млн руб.
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

export default function ChronologyDesktop() {
  const rootRef = useRef(null);
  const progressLineRef = useRef(null);
  const currentYearRef = useRef<HTMLDivElement>(null);
  const nextYearRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Вычисляем текущий и следующий год
  const currentYear = DATA[activeIndex]?.year;
  const nextYear = DATA[activeIndex + 1]?.year;
  const hasNext = activeIndex < DATA.length - 1;
  const hasPrev = activeIndex > 0;

  useGSAP(
    () => {
      const contents = gsap.utils.toArray(`.${s.contentItem}`) as HTMLElement[];
      const totalSteps = DATA.length;

      // 1. Анимация прогресс-бара
      gsap.to(progressLineRef.current, {
        scaleY: activeIndex / (totalSteps - 1),
        duration: 0.8,
        ease: "power3.inOut",
      });

      // 2. Анимация смены текущего года
      if (currentYearRef.current) {
        gsap.fromTo(
          currentYearRef.current,
          { opacity: 0, y: -30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" },
        );
      }

      // 3. Анимация смены следующего года
      if (nextYearRef.current) {
        gsap.fromTo(
          nextYearRef.current,
          { opacity: 0, y: 30, scale: 0.85 },
          {
            opacity: 0.4,
            y: 0,
            scale: 0.85,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.1,
          },
        );
      }

      // 4. Анимация контента (левая часть)
      contents.forEach((content, i) => {
        const isActive = i === activeIndex;

        gsap.to(content, {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : i < activeIndex ? -40 : 40,
          pointerEvents: isActive ? "auto" : "none",
          duration: 0.7,
          ease: "power3.out",
        });
      });
    },
    {
      scope: rootRef,
      dependencies: [activeIndex],
    },
  );

  // Навигация
  const goToNext = () => {
    if (hasNext) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (hasPrev) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section className={clsx("section_padding", s.sliderdesc)}>
      <div className="wrapper">
        <div ref={rootRef} className={s.root}>
          <div className={s.container}>
            {/* Левая часть - контент */}
            <div className={s.left}>
              <h2 className={s.title}>Хронология событий</h2>
              <div className={s.contentStack}>
                {DATA.map((item, i) => (
                  <div
                    key={i}
                    className={s.contentItem}
                    style={{
                      opacity: i === 0 ? 1 : 0,
                      position: i === 0 ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                    }}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            </div>

            {/* Правая часть - только 2 года */}
            <div className={s.right}>
              <div className={s.timelineViewport}>
                {/* Трек-линия */}
                <div className={s.trackLine} />

                {/* Прогресс-линия */}
                <div
                  ref={progressLineRef}
                  className={s.progressLine}
                  style={{ transformOrigin: "top center" }}
                />

                {/* Фиксированные 2 года */}
                <div className={s.yearsFixed}>
                  {/* Текущий год - ВВЕРХУ */}
                  <div
                    ref={currentYearRef}
                    key={`current-${activeIndex}`} // key для перезапуска анимации
                    className={clsx(s.yearItem, s.yearCurrent)}
                    onClick={goToPrev}
                    style={{ cursor: hasPrev ? "pointer" : "default" }}
                  >
                    <div className={s.dotWrapper}>
                      <div className={clsx(s.dot, s.dotActive)} />
                    </div>
                    <span className={s.yearValue}>{currentYear}</span>
                  </div>

                  {/* Следующий год - ВНИЗУ */}
                  {hasNext && (
                    <div
                      ref={nextYearRef}
                      key={`next-${activeIndex + 1}`} // key для перезапуска анимации
                      className={clsx(s.yearItem, s.yearNext)}
                      onClick={goToNext}
                    >
                      <div className={s.dotWrapper}>
                        <div className={s.dot} />
                      </div>
                      <span className={s.yearValue}>{nextYear}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
