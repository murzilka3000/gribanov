import s from "@/app/about/About.module.scss";
import clsx from "clsx";

const Founder = () => {
  return (
    <section className={clsx(s.founder, "section_padding")}>
      <div className="wrapper">
        <div className={s.founder__inner}>
          <p className={s.founder__description}>
            Предприниматель, основатель и генеральный директор Frank RG,
            издатель Frank Media, сооснователь киношколы и студии ЦЕХ,
            корпоративной лиги Springle.
          </p>
          <div className={s.founder__quote}>
            <img
              src="/images/zap-33.svg"
              alt="icon"
              className={s["founder__quote-icon"]}
            />
            <p className={s["founder__quote-text"]}>
              Чем более ты трудолюбивый — тем больше ворота успеха, в которые ты
              забьешь гол. Однако там должна быть еще удача.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
