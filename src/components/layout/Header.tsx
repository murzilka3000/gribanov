"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import s from "./layout.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Создаем ссылку на контейнер попапа
  const popupRef = useRef<HTMLDivElement>(null);
  // Создаем ссылку на кнопку бургера (чтобы клик по ней не считался "кликом вне")
  const burgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // 1. Блокировка скролла
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 2. Логика закрытия при клике вне области (только для ПК)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        window.innerWidth >= 767 &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

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
            ref={burgerRef} // Привязываем реф к кнопке
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
            <div className={s.popup} ref={popupRef}>
              {" "}
              {/* Привязываем реф к попапу */}
              <div className={s.popup_content}>
                <div>
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
                            onClick={closeMenu}
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
                </div>

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
