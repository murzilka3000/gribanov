import React from "react";
import clsx from "clsx";
import s from "@/app/(home)/Home.module.scss";
import { books } from "@/lib/data";
import { BookCard } from "@/components/ui/BookCard";

export const BooksSection = () => {
  return (
    <section className={clsx(s.books_section, "section_padding")}>
      <div className="wrapper">
        <div>
          <div className={s.books_texts}>
            <h2>
              Книги, которые <br /> я рекомендую <br /> прочитать
            </h2>
            <p>
              Книги — это бесконечный источник знаний, идей, вдохновения и
              утешения. К сожалению, чтение требует времени и дисциплины. Чтобы
              помочь себе и своим коллегам в поисках сил и времени для книг, мы
              создали внутри Frank RG традицию делиться рецензиями на
              прочитанные книги. Это помогает найти свою следующую книгу и
              дополнительно мотивирует прочитать быстрее и больше.
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
