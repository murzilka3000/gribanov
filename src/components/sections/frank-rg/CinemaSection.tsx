import React from "react";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { frankRgAwards } from "@/lib/data";
import { AwardCard } from "@/components/ui/AwardCard";

export const CinemaSection = () => {
  return (
    <section className={s.video}>
      <div className="wrapper">
        <div>
          <h2>Кино Frank RG</h2>
          <div className={s.video_container}>
            <iframe
              src="https://www.youtube.com/embed/..." // Добавь реальную ссылку
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className={s.video_texts}>
              <p>
                Мы сняли кино с участием профессиональных актеров и сотрудников
                Frank RG. Нам удалось сделать стопроцентно зрительский фильм, а
                не скучное корпоративное кино.
              </p>
              <p>
                Главный герой, отправляясь на собеседование, готов к любым
                вопросам и любому развитию событий. Но к тому, что в итоге
                случается, подготовиться просто невозможно! Из всего
                предстоящего водоворота событий забытый дома паспорт – самое
                безобидное, что с ним происходит...
              </p>
            </div>
            <div>
              <h3>Награды</h3>
              <div className={s.awards_grid}>
                {frankRgAwards.map((t) => (
                  <AwardCard key={t.id} {...t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
