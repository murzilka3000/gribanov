import React from "react";
import s from "@/app/(home)/Home.module.scss";
import { publications } from "@/lib/data";
import { PublicationCard } from "@/components/ui/PublicationCard";

export const PublicationsSection = () => {
  return (
    <section className="section_padding">
      <div className="wrapper">
        <div className={s.small_cards_home}>
          <h2>
            Публикации, интервью <br /> и видео
          </h2>
          {publications.map((item) => (
            <PublicationCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
