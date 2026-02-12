import React from "react";
import clsx from "clsx";
import s from "@/app/springle/Springle.module.scss";
import { springleProducts } from "@/lib/data";
import { SpringleProductCard } from "@/components/ui/SpringleProductCard";

export const SpringleProductsSection = () => {
  return (
    <section className={clsx(s.spr_prod, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>Продукты</h2>
          <div className={s.spr_prod_cont}>
            {springleProducts.map((t) => (
              <SpringleProductCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
