// Элемент списка в Hero секции (иконка + текст)
export interface HeroItem {
  img: string;
  span: string;
  link: string;
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

// Редактор
export interface EditorItem {
  tag: string;
  title: string;
  deck: string; // HTML контент
  img: string;
}

// Медиа карточка (Видео/Статья)
export interface MediaItem {
  img: string;
  tags: string[]; // Объединим теги в массив для удобства
  title: string;
  date: string;
  link: string;
}

// Карточка стандарта/ценности
export interface StandardItem {
  icon: string;
  title: string;
  text: string;
}

// Логотип партнера
export interface PartnerLogo {
  img: string;
}

// Преимущество (цифры и иконки)
export interface AdvantageItem {
  img: string;
  number: string;
  text: string;
}

// Продукт (Frank 360 и т.д.)
export interface ProductItem {
  title: string;
  text: string;
}

// Награда (список внизу)
export interface AwardItem {
  id: number;
  text: string;
}

// Товар (Мерч)
export interface MerchItem {
  img: string;
  title: string;
  subtitle: string;
}

// Продукт Springle (3 карточки)
export interface SpringleProductItem {
  img: string;
  title: string;
  text: string;
}

// Элемент списка ценностей (Бизнес/Фрисби)
export interface SpringleValueItem {
  text: string;
}
