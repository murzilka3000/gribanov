"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Импортируем Link
import clsx from "clsx";
import s from "./layout.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false); // Функция для закрытия меню при переходе

  const isHome = pathname === "/";

  const menuItems = [
    { title: "Frank RG", href: "/frank-rg", color: "#173969" },
    { title: "Frank Media", href: "/frank-media", color: "#173969" },
    { title: "Киношкола ЦЕХ", href: "/tsech", color: "#000000" },
    { title: "Springle", href: "/springle", color: "#FE5A00" },
  ];

  const burgerIcon = isOpen
    ? "/images/close.svg"
    : isHome
      ? "/images/burger-b.svg"
      : "/images/w-burger.svg";

  return (
    <header className={clsx(s.header, "section_padding")}>
      <div className="wrapper">
        <div className={s.header_cont}>
          <button
            className={clsx(s.burger, isOpen && s.active)}
            onClick={toggleMenu}
          >
            <img src={burgerIcon} alt="menu" />
          </button>

          <Link
            href="/"
            className={clsx(s.logo_link, isHome && s.dark_text)}
            onClick={closeMenu}
          >
            Юрий <br /> Грибанов
          </Link>

          {isOpen && (
            <div className={s.popup}>
              <div className={s.popup_content}>
                <span className={s.popup_label}>
                  Все проекты и направления:
                </span>

                <nav className={s.popup_nav}>
                  <ul>
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={s.nav_link}
                          style={{ color: item.color }}
                          onClick={closeMenu} // Закрываем при клике
                        >
                          {item.title}
                          <svg
                            width="33"
                            height="30"
                            viewBox="0 0 33 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.841869 15.0292H30.1"
                              stroke="currentColor"
                              strokeWidth="1.6838"
                              strokeLinecap="round"
                            />
                            <path
                              d="M22.6733 8.16416L30.8383 14.9689L22.6733 21.7736"
                              stroke="currentColor"
                              strokeWidth="1.6838"
                              strokeLinecap="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className={s.popup_footer}>
                  <Link href="/" className={s.btn_outline} onClick={closeMenu}>
                    Главная
                  </Link>
                  <Link
                    href="/about"
                    className={s.btn_outline}
                    onClick={closeMenu}
                  >
                    Обо мне
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
