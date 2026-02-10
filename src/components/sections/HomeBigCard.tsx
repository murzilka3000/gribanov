import s from "./HomeBigCard.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface HomeBigCardProps {
  image: string;
  imageMobile?: string;
  label?: string;
  intro: string;
  href: string;
  description: string;
}

const HomeBigCard = ({
  image,
  imageMobile,
  label,
  intro,
  href,
  description,
}: HomeBigCardProps) => {
  return (
    <section className={clsx(s.home_big_card, "section_padding")}>
      <div className="wrapper">
        <div className={s.home_big_card_cont}>
          <Image
            src={image}
            alt={label || ""}
            width={0}
            height={0}
            sizes="100vw"
            className={clsx(imageMobile && s.desktop_image)}
            style={{ width: "100%", height: "auto" }}
          />

          {imageMobile && (
            <Image
              src={imageMobile}
              alt={label || ""}
              width={0}
              height={0}
              sizes="100vw"
              className={s.mobile_image}
              style={{ width: "100%", height: "auto" }}
            />
          )}

          {label && <p className={s.sm_text}>{label}</p>}

          <div className={s.bottom_cont}>
            <div>
              <p dangerouslySetInnerHTML={{ __html: intro }} />
              <Link href={href} target="_blank" rel="noopener noreferrer">
                Перейти на сайт
              </Link>
            </div>
            <div>
              <p>{description}</p>
              <Link
                className={s.mob_link}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Перейти на сайт
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBigCard;
