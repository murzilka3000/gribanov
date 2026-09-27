import clsx from "clsx";
import s from "@/app/speaker/Speaker.module.scss";
import { speakerEvents, speakerTalks } from "@/lib/data";

export const RecentSpeakerSection = () => {
  return (
    <section className={clsx(s.recent_speaker, "section_padding")}>
      <div className="wrapper">
        <div className={s.recent_speaker__content}>
          <h2 className={s.recent_speaker__title}>Недавние выступления</h2>
          <div className={s.recent_speaker__cards}>
            {speakerTalks.map((talk) => (
              <div key={talk.title} className={s.recent_speaker__card}>
                <div className={s.recent_speaker__card_body}>
                  <div
                    className={s.recent_speaker__card_image}
                    style={{ backgroundImage: `url(${talk.image})` }}
                  ></div>
                  <span className={s.recent_speaker__card_type}>
                    {talk.type}
                  </span>
                  <h3 className={s.recent_speaker__card_title}>{talk.title}</h3>
                  <p className={s.recent_speaker__card_text}>{talk.text}</p>
                </div>
                <a
                  className={s.recent_speaker__card_link}
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Смотреть
                </a>
              </div>
            ))}
          </div>
          <div className={s.recent_speaker__list}>
            {speakerEvents.map((event) => (
              <div key={event.topic} className={s.recent_speaker__row}>
                <p className={s.recent_speaker__row_org}>{event.org}</p>
                <p className={s.recent_speaker__row_type}>{event.type}</p>
                <p className={s.recent_speaker__row_topic}>{event.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
