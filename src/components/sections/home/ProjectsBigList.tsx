import s from "@/app/(home)/Home.module.scss";
import HomeBigCard from "@/components/sections/HomeBigCard";
import { mainProjects } from "@/lib/data";

export const ProjectsBigList = () => {
  return (
    <div className={s.homeCard_cont}>
      {mainProjects.map((project) => (
        <HomeBigCard
          key={project.label}
          label={project.label}
          image={project.image}
          description={project.description}
          href={project.href}
          intro={project.intro}
        />
      ))}
    </div>
  );
};
