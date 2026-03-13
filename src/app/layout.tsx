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
