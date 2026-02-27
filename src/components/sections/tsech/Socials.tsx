import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";
const Socials = () => {
  return (
    <section className={clsx(s.socials, "section_padding")}>
      <div className="wrapper">
        <h2 className={s.socials__title}>Наши социальные сети</h2>
        <div className={s.socials__grid}>
          <div className={s.socials__column}>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://vk.com/kinoschool.tseh"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ВКонтакте
                </a>
                <p className={s.socials__label}>Киношкола для подростков</p>
                <p className={s.socials__handle}>@kinoschool.tseh</p>
              </div>
              <img className={s.socials__icon} src="/icons/vk-2.svg" alt="" />
            </div>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://vk.com/tseh.kvartirnik"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ВКонтакте
                </a>
                <p className={s.socials__label}>Студии для съёмок</p>
                <p className={s.socials__handle}>@tseh.kvartirnik</p>
              </div>
              <img className={s.socials__icon} src="/icons/vk-2.svg" alt="" />
            </div>
          </div>
          <div className={s.socials__column}>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://t.me/kinoschooltseh"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
                <p className={s.socials__label}>Киношкола для подростков</p>
                <p className={s.socials__handle}>@kinoschooltseh</p>
              </div>
              <img className={s.socials__icon_2} src="/icons/tg-2.svg" alt="" />
            </div>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://www.youtube.com/@kino.school"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <p className={s.socials__label}>Киношкола для подростков</p>
                <p className={s.socials__handle}>@kino.school</p>
              </div>
              <img className={s.socials__icon} src="/icons/y-2.svg" alt="" />
            </div>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://www.youtube.com/@tsehstudio"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <p className={s.socials__label}>Продакшн-студия</p>
                <p className={s.socials__handle}>@tseh.studio</p>
              </div>
              <img className={s.socials__icon} src="/icons/y-2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={clsx(s.socials__grid_2, s.socials__grid)}>
          <div className={s.socials__column}>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://vk.com/kinoschool.tseh"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VK
                </a>
                <p className={s.socials__label}>
                  ЦЕХ <span className={s.q1}>Киношкола</span>
                </p>
                <p className={s.socials__handle}>@kinoschool.tseh</p>
              </div>
              <img className={s.socials__icon} src="/icons/vk-2.svg" alt="" />
            </div>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://vk.com/tseh.kvartirnik"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VK
                </a>
                <p className={s.socials__label}>
                  ЦЕХ <span className={s.q2}>Квартирник</span>
                </p>
                <p className={s.socials__handle}>@tseh.kvartirnik</p>
              </div>
              <img className={s.socials__icon} src="/icons/vk-2.svg" alt="" />
            </div>
          </div>
          <div className={s.socials__column}>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://t.me/kinoschooltseh"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
                <p className={s.socials__label}>
                  ЦЕХ <span className={s.q3}>Студия</span>
                </p>
                <p className={s.socials__handle}>@kinoschooltseh</p>
              </div>
              <img className={s.socials__icon_2} src="/icons/tg-2.svg" alt="" />
            </div>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://www.youtube.com/@kino.school"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <p className={s.socials__label}>
                  ЦЕХ <span className={s.q4}>Киношкола</span>
                </p>
                <p className={s.socials__handle}>@kino.school</p>
              </div>
              <img className={s.socials__icon} src="/icons/y-2.svg" alt="" />
            </div>
            <div className={s.socials__item}>
              <div className={s.socials__info}>
                <a
                  href="https://www.youtube.com/@tsehstudio"
                  className={s.socials__link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <p className={s.socials__label}>
                  ЦЕХ <span className={s.q5}>Студия</span>
                </p>
                <p className={s.socials__handle}>@tseh.studio</p>
              </div>
              <img className={s.socials__icon} src="/icons/y-2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Socials;
