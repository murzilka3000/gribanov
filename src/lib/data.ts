import {
  HeroItem,
  NavItem,
  ProjectCardData,
  PublicationItem,
  BookItem,
  EditorItem,
  MediaItem,
  PartnerLogo,
  StandardItem,
} from "@/types";

export const heroItems: HeroItem[] = [
  {
    img: "/icons/hero-arr-1.svg",
    span: "Консалтинговая компания,",
  },
  {
    img: "/icons/hero-arr-2.svg",
    span: "Деловое медиа,",
  },
  {
    img: "/icons/hero-arr-3.svg",
    span: "Киношкола и продакшн студия,",
  },
  {
    img: "/icons/hero-arr-4.svg",
    span: "Спортивная корпоративная лига",
  },
];

export const homeNavItems: NavItem[] = [
  {
    href: "/#1",
    text: "Frank RG",
    img: "/icons/home_nav-arr-1.svg",
  },
  {
    href: "/#2",
    text: "Frank Media",
    img: "/icons/home_nav-arr-1.svg",
  },
  {
    href: "/#3",
    text: "Киношкола ЦЕХ",
    img: "/icons/home_nav-arr-2.svg",
  },
  {
    href: "/#4",
    text: "Springle",
    img: "/icons/home_nav-arr-3.svg",
  },
];

export const mainProjects: ProjectCardData[] = [
  {
    label: "Основатель, СЕО и руководитель Frank RG",
    image: "/images/img-1.png",
    intro:
      "Frank RG — аналитическая консалтинговая компания, эксперт в области исследований конкурентной среды российского рынка финансовых услуг. ",
    href: "https://frankrg.com/",
    description:
      "Frank RG появилась как идея объединить опыт, накопленный в консалтинге и в банковской индустрии. В 2006 году я пришел в банк Хоум Кредит, где мне, как бывшему консультанту, поручили построить отдел внешней аналитики. Именно этот опыт лег в основу того, чем сегодня занимается команда Frank RG.",
  },
  {
    label: "Издатель Frank Media",
    image: "/images/img-2.png",
    intro:
      "Frank Media — деловое издание о финансах и экономике. Последние новости из мира банков и финансовых рынков в России и мире.",
    href: "https://frankmedia.ru/",
    description:
      "В 2017 году на рынке деловых медиа разгорался кризис. «Двойные сплошные» символично разделили историю деловой журналистики на «до» и «после». До — эпоха великих издательских домов «Коммерсанта» и «Ведомостей». После — эпоха захвата информационного пространства блогерами, рождения множества «бутиковых» медиа и снижения престижа журналистской профессии. И мы увидели в этом возможность для создания делового издания, сфокусированного на рынке банков и финансов. Так появилось Frank Media, которое сегодня занимает 2-е место по цитируемости среди всех финансовых изданий России.",
  },
  {
    label: "Сооснователь Springle",
    image: "/images/img-3.png",
    intro: "Алтимат фрисби — командная игра с летающим диском.",
    href: "https://springle.ru",
    description:
      "Во Frank RG алтимат фрисби стал корпоративным спортом в 2017 году — когда прошел первый турнир в рамках летнего корпоратива. Нам понравились дух, ценности и азарт алтимата фрисби. Он помогает команде сплотиться, а также провести время с пользой и удовольствием. И мы решили, что было бы замечательно, если и в других компаниях будут играть в алтимат. И мы получим от этого пользу — нам будет с кем соревноваться!",
  },
  {
    label: "Сооснователь и продюсер студии и киношколы ЦЕХ",
    image: "/images/img-4.png",
    intro:
      "ЦЕХ — это экосистема! Мы работаем в сфере медиа-контента и развиваем другие направления в области кино — от дополнительного образования до аренды декораций в съёмочных локациях.",
    href: "https://tseh.company",
    description:
      "Родившись как идея для бизнеса на съемочной площадке фильма «ЭТАЖИзнь», ЦЕХ стал творческим крылом экосистемы Frank. Студия ЦЕХ помогает упаковывать идеи и сообщения Frank RG, Frank Media и Springle в увлекательный видео-продукт. А киношкола взращивает молодое поколение кинематографистов.",
  },
];

export const publications: PublicationItem[] = [
  {
    img: "/images/small-card-1.png",
    tag_1: "Бизнес",
    tag_2: "Интервью",
    title: "Решение на миллион: “В бизнесе важно быть честным с собой”",
    date: "28 октября 2025, tg.ru",
    link: "https://t.me/gribanov_channel/229",
  },
  {
    img: "/images/small-card-2.png",
    tag_1: "Бизнес",
    tag_2: "Публикация",
    title: "Кого я никогда не найму на работу: бенчмарк для руководителей",
    date: "3 июля 2025, tg.ru",
    link: "https://t.me/gribanov_channel/176",
  },
  {
    img: "/images/small-card-3.png",
    tag_1: "Бизнес",
    tag_2: "Видео",
    title: "Как сделать бизнес-премию и повысить имидж бренда",
    date: "24 февраля 2025, vk.ru",
    link: "https://vkvideo.ru/video-227184791_456239128",
  },
  {
    img: "/images/small-card-4.png",
    tag_1: "Банки",
    tag_2: "Публикация",
    title: "Без доверия работать с чувствительными данными невозможно",
    date: "14 декабря 2023, komersant.ru",
    link: "https://www.kommersant.ru/doc/6381155",
  },
  {
    img: "/images/small-card-5.png",
    tag_1: "Бизнес",
    tag_2: "Интервью",
    title: "Киношколы — это хардкор для сильных духом",
    date: "06 декабря 2023, rb.ru",
    link: "https://rb.ru/longread/yuri-gribanov-about-tseh/",
  },
  {
    img: "/images/small-card-6.png",
    tag_1: "Медиа",
    tag_2: "Публикация",
    title: "Как мы создавали Frank Media",
    date: "22 апреля 2023, vc.ru",
    link: "https://vc.ru/media/673775-kak-my-sozdavali-frank-media-i-pochemu-reshili-perevesti-ego-na-novyi-domen",
  },
  {
    img: "/images/small-card-7.png",
    tag_1: "Банки",
    tag_2: "Публикация",
    title:
      "Конец эпохи депозитов: как меняется рынок сбережений в условиях низких ставок",
    date: "21 марта 2021, forbes.ru",
    link: "https://www.forbes.ru/finansy-i-investicii/424383-konec-epohi-depozitov-kak-menyaetsya-rynok-sberezheniy-v-usloviyah",
  },
  {
    img: "/images/small-card-8.png",
    tag_1: "Финансы",
    tag_2: "Публикация",
    title: "Дойдут ли пожертвованные деньги или попадут к мошенникам?",
    date: "03 июня 2017, forbes.ru",
    link: "https://www.forbes.ru/finansy-i-investicii/424383-konec-epohi-depozitov-kak-menyaetsya-rynok-sberezheniy-v-usloviyah",
  },
];

export const books: BookItem[] = [
  {
    year: "2025",
    img: "/images/book-1.png",
    link: "https://vc.ru/books/2683512-rekomendatsii-knig-2025-god",
  },
  {
    year: "2024",
    img: "/images/book-2.png",
    link: "https://vc.ru/books/1751344-chto-iz-prochitannogo-mnoi-v-2024-godu-ya-mogu-rekomendovat-vam",
  },
  {
    year: "2023",
    img: "/images/book-3.png",
    link: "https://vc.ru/books/1036607-knigi-kotorye-ya-prochital-v-2023-godu",
  },
  {
    year: "2022",
    img: "/images/book-4.png",
    link: "https://vc.ru/books/580954-knigi-prochitannye-v-2022-godu",
  },
];

export const frankMediaLogos: PartnerLogo[] = [
  { img: "/icons/logo-1.svg" },
  { img: "/icons/logo-2.svg" },
  { img: "/icons/logo-3.svg" },
  { img: "/icons/logo-4.svg" },
  { img: "/icons/logo-5.svg" },
];

export const editors: EditorItem[] = [
  {
    tag: "Редактор",
    title: "Татьяна Воронова",
    deck: "Главный редактор Frank Media с 2022 года. Возглавила редакцию в начале 2022 года и перестроила её работу в период рыночной турбулентности начала СВО, введения санкций, перестройки экономики. <br/> <br/> До Frank Media Татьяна 12 лет работала в отделе финансовых новостей Ведомостей и 4 года — в агентстве Reuters.",
    img: "/images/ed-1.png",
  },
  {
    tag: "Редактор",
    title: "Татьяна Алешкина",
    deck: "Главный редактор Frank Media с 2019 по 2021 год. Татьяна пришла во Frank Media вскоре после старта проекта и возглавила редакцию после ухода Елены Тофанюк. <br/> <br/> До Frank Media Татьяна много лет работала в РБК.",
    img: "/images/ed-2.png",
  },
  {
    tag: "Редактор",
    title: "Елена Тофанюк",
    deck: "Главный редактор Frank Media с 2018 по 2019 год. Запустила проект, заложила ключевые принципы и стандарты работы редкации. Благодаря Елене с первых дней редакция была независима от бизнеса и издателя (т.е. меня). <br/> <br/> До Frank Media Елена работала в ведущих деловых СМИ: Forbes, РБК и  РБК-ТВ.",
    img: "/images/ed-3.png",
  },
];

export const mediaCards: MediaItem[] = [
  {
    img: "/images/media_cards-1.png",
    tags: ["Сбербанк", "Санкции", "Банки Росии"],
    title:
      "Как Сберу приходится конкурировать за клиентов | Кирилл Царев, первый зампред Сбербанка",
    date: "21 июня 2024, frankmedia.ru",
    link: "https://frankmedia.ru/167759",
  },
  {
    img: "/images/media_cards-2.png",
    tags: ["Платежная система", "Банки", "Mir pay"],
    title:
      "Будущее платежных систем в России: платежи за рубеж и бесконтактная оплата | Владимир Комлев, НСПК",
    date: "12 декабря 2023, frankmedia.ru",
    link: "https://frankmedia.ru/148841",
  },
  {
    img: "/images/media_cards-3.png",
    tags: ["НПФ", "Пенсия", "Накопительная пенсия"],
    title:
      'Как правильно копить на пенсию и на чем зарабатывают пенсионные фонды? | Куратор НПФ ГК "Регион"',
    date: "18 сентября 2023, frankmedia.ru",
    link: "https://frankmedia.ru/139019",
  },
];

// Группа стандартов 1 (верхняя)
export const standardsGroup1: StandardItem[] = [
  {
    icon: "/icons/s-1.svg",
    title: "Точность и объективность",
    text: "Frank Media — издание, основанное на журналистике факта. Точность и объективность при передаче информации мы ставим во главу угла. Никакой общественно значимый доказанный факт не может быть сознательно скрыт от читателя.",
  },
  {
    icon: "/icons/s-2.svg",
    title: "Конфиденциальность",
    text: "Наши источники надежно скрыты, но мы тщательно проверяем, чтобы они не были связаны между собой. Мы никому и никогда не раскрываем наши источники, в том числе властям.",
  },
];

// Группа стандартов 2 (средняя)
export const standardsGroup2: StandardItem[] = [
  {
    icon: "/icons/s-3.svg",
    title: "Плюрализм",
    text: "Возможность высказаться должна быть предоставлена каждой стороне. Мы не делим героев наших материалов на «своих» и «чужих».",
  },
  {
    icon: "/icons/s-4.svg",
    title: "Беспристрастность",
    text: "Журналисты Frank Media должны избегать конфликта интересов в любых обстоятельствах. А если такой конфликт присутствует у кого-то из авторов, мы честно его раскрываем.",
  },
  {
    icon: "/icons/s-5.svg",
    title: "Честность",
    text: "Мы не платим за информацию и не берем никаких взяток, включая информационные.",
  },
];

// Группа стандартов 3 (нижняя)
export const standardsGroup3: StandardItem[] = [
  {
    icon: "/icons/s-6.svg",
    title: "Точность и объективность",
    text: "Frank Media — издание, основанное на журналистике факта. Точность и объективность при передаче информации мы ставим во главу угла. Никакой общественно значимый доказанный факт не может быть сознательно скрыт от читателя.",
  },
  {
    icon: "/icons/s-7.svg",
    title: "Конфиденциальность",
    text: "Наши источники надежно скрыты, но мы тщательно проверяем, чтобы они не были связаны между собой. Мы никому и никогда не раскрываем наши источники, в том числе властям.",
  },
];
