import HomeBigCard from "../HomeBigCard";
import s from "@/app/tsech/Tsech.module.scss";

const Hero = () => {
  return (
    <div className={s.hero}>
      <HomeBigCard
        image="/images/img-4.png"
        label="Сооснователь и продюсер студии и киношколы ЦЕХ"
        intro="ЦЕХ — это экосистема! Мы работаем в сфере медиа-контента и развиваем другие направления в области кино — от дополнительного образования до аренды декораций в съёмочных локациях."
        href="https://tseh.company/"
        description="Родившись как идея для бизнеса на съемочной площадке фильма «ЭТАЖИзнь», ЦЕХ стал творческим крылом экосистемы Frank. Студия ЦЕХ помогает упаковывать идеи и сообщения Frank RG, Frank Media и Springle в увлекательный видео-продукт. А киношкола взращивает молодое поколение кинематографистов."
        imageMobile="/images/223.png"
      />
    </div>
  );
};

export default Hero;
