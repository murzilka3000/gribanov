import React from "react";
import s from "@/app/frank-media/FrankMedia.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";

export const HeroMediaSection = () => {
  return (
    <div className={s.hero}>
      <HomeBigCard
        image="/images/frank-media.png"
        label="Издатель Frank Media"
        intro="Frank Media — деловое издание о финансах и экономике. Последние новости из мира банков и финансовых рынков в России и мире."
        href="https://frankmedia.ru/"
        description="В 2017 году на рынке деловых медиа разгорался кризис. «Двойные сплошные» символично разделили историю деловой журналистики на «до» и «после». До — эпоха великих издательских домов «Коммерсанта» и «Ведомостей». После — эпоха захвата информационного пространства блогерами, рождения множества «бутиковых» медиа и снижения престижа журналистской профессии. И мы увидели в этом возможность для создания делового издания, сфокусированного на рынке банков и финансов. Так появилось Frank Media, которое сегодня занимает 2-е место по цитируемости среди всех финансовых изданий России."
        imageMobile="/images/mob-555.png"
      />
    </div>
  );
};
