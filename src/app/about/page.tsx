import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gribanov.com/"),
  title: "Юрий Грибанов — обо мне",
  description:
    "Хронология моих проектов и ценности, которые я сохраняю и культивирую в каждом бизнесе.",
  openGraph: {
    title: "Юрий Грибанов — обо мне",
    description:
      "Хронология моих проектов и ценности, которые я сохраняю и культивирую в каждом бизнесе.",
    siteName: "Юрий Грибанов — серийный предприниматель",
    images: [
      {
        url: "/soc.png",
        width: 1200,
        height: 630,
        alt: "Юрий Грибанов — обо мне",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Юрий Грибанов — обо мне",
    description:
      "Хронология моих проектов и ценности, которые я сохраняю и культивирую в каждом бизнесе.",
    images: ["/soc.png"],
  },
};

const page = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default page;
