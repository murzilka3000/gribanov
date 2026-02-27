import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const Team = () => {
  return (
    <section className={clsx(s.team, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>Команда</h2>
          <p className={s.desc}>ЦЕХ — это экосистема!</p>
          <img src="/images/img-8.png" alt="" />
          <div className={s.team_zap}>
            <p>
              Мы работаем не только в сфере медиа-контента, но и развиваем
               другие направления в области кино — от дополнительного
               образования до аренды съемочных локаций!
            </p>
            <img src="/icons/zap-2.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
