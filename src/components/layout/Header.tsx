"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import s from "./layout.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const popupRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (isOpen) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const isDarkPage = pathname === "/" || pathname === "/privacy";

  const menuItems = [
    { title: "Frank RG", href: "/frank-rg", color: "#173969" },
    { title: "Frank Media", href: "/frank-media", color: "#173969" },
    { title: "Киношкола ЦЕХ", href: "/tsech", color: "#000000" },
    { title: "Springle", href: "/springle", color: "#FE5A00" },
  ];

  const burgerIcon = isOpen
    ? "/images/close.svg"
    : isDarkPage
      ? "/images/burger-b.svg"
      : isScrolled
        ? "/images/burger-b.svg"
        : "/images/w-burger.svg";

  return (
    <header
      className={clsx(
        s.header,
        "section_padding",
        !isVisible && s.header_hidden,
        (isScrolled || isOpen) && s.header_scrolled,
      )}
    >
      <div className="wrapper">
        <div className={s.header_cont}>
          <button
            ref={burgerRef}
            className={clsx(s.burger, isOpen && s.active)}
            onClick={toggleMenu}
          >
            <img src={burgerIcon} alt="menu" />
          </button>

          <Link
            href="/"
            className={clsx(
              s.logo_link,
              (isDarkPage || isScrolled || isOpen) && s.dark_text,
            )}
            onClick={closeMenu}
          >
            Юрий <br /> Грибанов
          </Link>

          {isOpen && (
            <div className={s.popup} ref={popupRef}>
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
