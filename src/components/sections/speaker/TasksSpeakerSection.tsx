import clsx from "clsx";
import s from "@/app/speaker/Speaker.module.scss";
import { speakerTasks } from "@/lib/data";

export const TasksSpeakerSection = () => {
  return (
    <section className={clsx(s.tasks_speaker, "section_padding")}>
      <div className="wrapper">
        <div className={s.tasks_speaker__content}>
          <h2 className={s.tasks_speaker__title}>Задачи выступлений</h2>
          <div className={s.tasks_speaker__list}>
            {speakerTasks.map((task) => (
              <div key={task.title} className={s.tasks_speaker__item}>
                <h3 className={s.tasks_speaker__item_title}>{task.title}</h3>
                <p className={s.tasks_speaker__item_text}>{task.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
