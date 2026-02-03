import React from "react";
import clsx from "clsx";
import s from "@/app/(home)/Home.module.scss";

export const GallerySection = () => {
  return (
    <section className={clsx(s.home_gallery, "section_padding")}>
      <div className="wrapper">
        <div className={s.home_gallery_cont}>
          <div className={s.home_gallery_left}>
            <div>
              <img
                src="/images/home_gallery-1.png"
                alt="Юрий Грибанов фото 1"
              />
              <img
                src="/images/home_gallery-2.png"
                alt="Юрий Грибанов фото 2"
              />
            </div>
            <img src="/images/home_gallery-3.png" alt="Юрий Грибанов фото 3" />
          </div>
          <div className={s.home_gallery_right}>
            <img src="/images/home_gallery-4.png" alt="Юрий Грибанов фото 4" />
            <img src="/images/home_gallery-5.png" alt="Юрий Грибанов фото 5" />
          </div>
        </div>
      </div>
    </section>
  );
};
