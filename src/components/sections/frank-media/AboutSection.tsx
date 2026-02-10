import clsx from "clsx";
import s from "@/app/frank-media/FrankMedia.module.scss";
import { frankMediaLogos } from "@/lib/data";

export const AboutSection = () => {
  return (
    <section className={clsx(s.about, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>О Frank Media</h2>
          <div className={s.about_cont}>
            <div className={s.about_left}>
              <p>Frank Media — деловое издание о финансах и экономике</p>
            </div>
            <div className={s.about_right}>
              <div className={s.about_right_cont}>
                <p>ТОП-2</p>
                <p>самых цитируемых <br /> СМИ в тематике</p>
              </div>
              <div className={s.about_right_cont}>
                <p>350+</p>
                <p>тыс. читателей <br /> в 2025 г.</p>
              </div>
            </div>
          </div>
          <div className={s.logos_cont}>
            <div>
              <p>
                Для вас пишут журналисты, работавшие в крупнейших деловых
                изданиях России
              </p>
            </div>
            <div className={s.logos_grid}>
              {frankMediaLogos.map((t, index) => (
                <img key={index} src={t.img} alt="Логотип партнера" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
