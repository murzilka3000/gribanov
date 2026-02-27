// hooks/useTypography.ts
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PREPOSITIONS = [
  "и",
  "в",
  "на",
  "к",
  "с",
  "о",
  "у",
  "а",
  "но",
  "не",
  "ни",
  "по",
  "за",
  "из",
  "от",
  "до",
  "для",
  "при",
  "без",
  "под",
  "над",
  "об",
  "про",
  "со",
  "во",
  "ко",
  "же",
  "бы",
  "ли",
];

// Маркер чтобы не обрабатывать дважды
const PROCESSED_ATTR = "data-typography-processed";

const regex = new RegExp(
  `(^|\\s|[\\(\\[\\{«"])(${PREPOSITIONS.join("|")})\\s`,
  "gi",
);

const processElement = (element: Node) => {
  // Пропускаем уже обработанные элементы
  if (element instanceof HTMLElement && element.hasAttribute(PROCESSED_ATTR)) {
    return;
  }

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach((node) => {
    // Пропускаем скрипты, стили, код
    const parent = node.parentElement;
    if (parent?.closest("script, style, code, pre, textarea, input")) {
      return;
    }

    if (node.textContent) {
      const newText = node.textContent.replace(regex, "$1$2\u00A0");
      if (newText !== node.textContent) {
        node.textContent = newText;
      }
    }
  });

  // Помечаем как обработанный
  if (element instanceof HTMLElement) {
    element.setAttribute(PROCESSED_ATTR, "true");
  }
};

export const useTypography = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Небольшая задержка чтобы DOM успел отрендериться
    const timeoutId = setTimeout(() => {
      // Убираем старые маркеры при смене страницы
      document.querySelectorAll(`[${PROCESSED_ATTR}]`).forEach((el) => {
        el.removeAttribute(PROCESSED_ATTR);
      });

      // Обрабатываем весь контент
      processElement(document.body);
    }, 100);

    // Следим за динамическим контентом
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE ||
            node.nodeType === Node.TEXT_NODE
          ) {
            processElement(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]); // Перезапускаем при смене страницы
};
