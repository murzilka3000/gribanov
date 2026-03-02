import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.scss";

import Header from "@/components/layout/Header";
import { TypographyProvider } from "@/components/TypographyProvider";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  weight: ["500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gribanov.com/"),
  title: "Заголовок твоего сайта", // Обязательно добавь
  description: "Юрий Грибанов — серийный предприниматель", // Обязательно добавь

  openGraph: {
    title: "Юрий Грибанов — серийный предприниматель",
    description: "Юрий Грибанов — серийный предприниматель",
    url: "https://gribanov.com/",
    siteName: "Юрий Грибанов — серийный предприниматель",
    images: [
      {
        url: "/soc.png", // Можно писать просто /soc.png, так как есть metadataBase
        width: 1200,
        height: 630,
        alt: "Юрий Грибанов — серийный предприниматель", // Полезно для доступности
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  // Важно для Twitter/X, чтобы картинка была большой
  twitter: {
    card: "summary_large_image",
    title: "Юрий Грибанов — серийный предприниматель",
    description: "Юрий Грибанов — серийный предприниматель",
    images: ["/soc.png"], // Берет ту же картинку
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <Header />
        <TypographyProvider>{children}</TypographyProvider>
      </body>
    </html>
  );
}
