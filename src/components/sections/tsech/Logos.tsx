import s from "@/app/tsech/Tsech.module.scss";
import clsx from "clsx";

const Logos = () => {
  return (
    <section className={clsx(s.logos, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>Партнеры</h2>
          <div className={s.logos_flex}>
            <img src="/icons/l-1.svg" alt="" />
            <img src="/icons/l-2.svg" alt="" />
            <img src="/icons/l-3.svg" alt="" />
            <img src="/icons/l-4.svg" alt="" />
            <img src="/icons/l-5.svg" alt="" />
            <img src="/icons/l-6.svg" alt="" />
            <img src="/icons/l-7.svg" alt="" />
            <img src="/icons/l-8.svg" alt="" />
            <img src="/icons/l-9.svg" alt="" />
            <img src="/icons/l-10.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
