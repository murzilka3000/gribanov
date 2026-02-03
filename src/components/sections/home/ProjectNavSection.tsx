import React from "react";
import Link from "next/link";
import clsx from "clsx";
import s from "@/app/(home)/Home.module.scss";
import { homeNavItems } from "@/lib/data";

export const ProjectNavSection = () => {
  return (
    <section className={clsx(s.home_all_projects, "section_padding")}>
      <div className="wrapper">
        <div className={s.home_all_projects_cont}>
          <div className={s.home_all_projects_left}>
            <img src="/icons/home_all_projects-icon.svg" alt="" />
            <div>
              <p>
                В современном мире ценности создаются на стыке компетенций, на
                границе разных индустрий.
              </p>
              <p>
                Главное искусство — найти баланс, чтобы многогранность не
                превратилась в расфокусированность.
              </p>
            </div>
          </div>
          <div className={s.home_all_projects_right}>
            <p>Все проекты и направления:</p>
            <nav>
              {homeNavItems.map((t) => (
                <Link key={t.href} href={t.href}>
                  <p>{t.text}</p>
                  <img src={t.img} alt="" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
