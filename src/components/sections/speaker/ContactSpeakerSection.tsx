import clsx from "clsx";
import s from "@/app/speaker/Speaker.module.scss";

export const ContactSpeakerSection = () => {
  return (
    <section
      id="contact"
      className={clsx(s.contact_speaker, "section_padding")}
    >
      <div className="wrapper">
        <div className={s.contact_speaker__content}>
          <h2 className={s.contact_speaker__title}>
            Обсудить <br /> выступление
          </h2>
          <div className={s.contact_speaker__info}>
            <p className={s.contact_speaker__text}>
              Расскажите об аудитории, формате и ожидаемом результате — предложу
              подходящую тему и обсудим вариант участия
            </p>
            <div className={s.contact_speaker__email}>
              <p className={s.contact_speaker__email_label}>Почта для связи</p>
              <a
                className={s.contact_speaker__email_link}
                href="mailto:gribanov_channel@mail.ru"
              >
                gribanov_channel@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
