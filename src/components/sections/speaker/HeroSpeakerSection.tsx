import clsx from "clsx";
import s from "@/app/speaker/Speaker.module.scss";
import { speakerFacts } from "@/lib/data";
import { ScrollLink } from "@/components/ui/ScrollLink";

export const HeroSpeakerSection = () => {
  return (
    <section className={clsx(s.hero_speaker, "section_padding")}>
      <div className="wrapper">
        <div className={s.hero_speaker_cont}>
          <div className={s.hero_speaker__content}>
            <div className={s.hero_speaker__intro}>
              <h1 className={s.hero_speaker__title}>
                Юрий Грибанов —
                <br />
                <span className={s.hero_speaker__title_accent_1}>
                  предприниматель-практик
                </span>
                <br />
                <span className={s.hero_speaker__title_accent}>
                  и публичный спикер
                </span>
              </h1>
              <p className={s.hero_speaker__subtitle}>
                О финансовом рынке, управленческих решениях и создании
                устойчивых бизнес-систем
              </p>
              <img
                className={s.hero_speaker__image_mobile}
                src="/images/hero-speaker.png"
                alt=""
              />
            </div>
            <div className={s.hero_speaker__info}>
              <div className={s.hero_speaker__facts}>
                {speakerFacts.map((fact) => (
                  <p key={fact.text} className={s.hero_speaker__fact}>
                    {fact.text}
                  </p>
                ))}
              </div>
              <ScrollLink className={s.hero_speaker__link} href="#contact">
                Обсудить выступление
              </ScrollLink>
            </div>
          </div>
          <div className={s.hero_speaker__media}>
            <img
              className={s.hero_speaker__image}
              src="/images/hero-speaker.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
