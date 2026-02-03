import React from "react";
import clsx from "clsx";
import s from "@/app/(home)/Home.module.scss";
import { books } from "@/lib/data";
import { BookCard } from "@/components/ui/BookCard";

export const BooksSection = () => {
  return (
    <section className={clsx(s.books_section, "section-padding")}>
      <div className="wrapper">
        <div>
          <div className={s.books_texts}>
            <h2>
              Книги, которые <br /> я рекомендую прочитать
            </h2>
            <p>
              Книги — это бесконечный источник знаний, идей, вдохновения и
              утешения... (текст сокращен для примера, вставь полный)
            </p>
          </div>
          <div className={s.books}>
            {books.map((book) => (
              <BookCard key={book.year} {...book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
