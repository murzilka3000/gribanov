import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Юрий Грибанов — обо мне",
  description:
    "Хронология моих проектов и ценности, которые я сохраняю и культивирую в каждом бизнесе.",
  openGraph: {
    title: "Юрий Грибанов — обо мне",
    description:
      "Хронология моих проектов и ценности, которые я сохраняю и культивирую в каждом бизнесе.",
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
