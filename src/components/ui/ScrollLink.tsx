"use client";

import { MouseEvent, ReactNode } from "react";

type ScrollLinkProps = {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
};

export const ScrollLink = ({ href, className, children }: ScrollLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
