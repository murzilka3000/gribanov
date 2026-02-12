import React from "react";
import Image from "next/image";
import s from "@/app/springle/Springle.module.scss";

export const GalleryStripSection = () => {
  return (
    <section className={s.img_7}>
      <div className="wrapper2">
        <Image
          src="/images/img-7.png"
          alt="Фото с игры"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="img_1"
        />
        <Image
          src="/images/img-441.png"
          alt="Фото с игры"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="img_mob_1"
        />
      </div>
    </section>
  );
};
