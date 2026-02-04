import clsx from "clsx";
import React from "react";
import s from "./layout.module.scss";


const footer = [
    {
        href: 'https://vc.ru/id573551',
        img: '/icons/f-1.svg',
        text: 'VC'
    },
    {
        href: 'https://vkvideo.ru/@gribanov_channel',
        img: '/icons/f-2.svg',
        text: 'ВКонтакте'
    },
    {
        href: 'https://vkvideo.ru/@gribanov_channel',
        img: '/icons/f-3.svg',
        text: 'Telegram'
    },
    {
        href: 'https://www.youtube.com/@gribanov_channel',
        img: '/icons/f-4.svg',
        text: 'YouTube'
    },
    {
        href: 'https://rutube.ru/channel/28464322/',
        img: '/icons/f-5.svg',
        text: 'Rutube'
    },
    {
        href: 'https://dzen.ru/gribanov_channel',
        img: '/icons/f-6.svg',
        text: 'Дзен'
    },
]

const Footer = () => {
  return (
    <footer className={clsx(s.footer, "section_padding")}>
      <div className="wrapper">
        <div className={s.footer_cont}>
          <p className={s.footer_text}>Подписывайтесь <br /> на мои соцсети</p>
          <div className={s.footer_links}>
            {
                footer.map(t => {
                    return (
                        <a href={t.href} key={t.text}>
                            <img src={t.img} alt="" />
                            <p>{t.text}</p>
                        </a>
                    )
                })
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
