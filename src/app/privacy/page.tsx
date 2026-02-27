import { Metadata } from "next";
import PrivacyContent from "@/components/sections/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика в отношении обработки персональных данных ООО «Грибанов и Партнеры»",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
