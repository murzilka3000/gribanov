// Элемент списка в Hero секции (иконка + текст)
export interface HeroItem {
  img: string;
  span: string;
}

// Элемент навигации по проектам (стрелочки с ссылками)
export interface NavItem {
  href: string;
  text: string;
  img: string;
}

// Большая карточка проекта (Frank RG, Media, etc.)
export interface ProjectCardData {
  image: string;
  label: string;
  intro: string;
  href: string;
  description: string;
}

// Карточка публикации/статьи
export interface PublicationItem {
  img: string;
  tag_1: string;
  tag_2: string;
  title: string;
  date: string; // В коде было 'data', лучше назвать 'date'
  link: string;
}

// Карточка книги
export interface BookItem {
  year: string;
  img: string;
  link: string;
}
