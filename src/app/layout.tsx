import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.scss";

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
  title: "Project Title",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}