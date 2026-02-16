import React from "react";
import clsx from "clsx";
import s from "@/app/frank-rg/FrankRg.module.scss";
import { frankRgProducts } from "@/lib/data";

export const ProductsSection = () => {
  return (
    <section className={clsx(s.products, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>Продукты</h2>
          <div className={s.products_cont}>
            {frankRgProducts.map((t) => (
              <div key={t.title}>
                <div>
                  <h3>{t.title}</h3>
                </div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
