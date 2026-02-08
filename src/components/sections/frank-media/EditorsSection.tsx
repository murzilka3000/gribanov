import React from "react";
import clsx from "clsx";
import s from "@/app/frank-media/FrankMedia.module.scss";
import { editors } from "@/lib/data";
import { EditorCard } from "@/components/ui/EditorCard";

export const EditorsSection = () => {
  return (
    <section className={clsx(s.editors, "section_padding")}>
      <div className="wrapper">
        <div>
          <h2>Редакторы Frank Media</h2>
          <div className={s.editors_cont}>
            {editors.map((editor) => (
              <EditorCard key={editor.title} {...editor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
