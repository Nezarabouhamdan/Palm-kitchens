// src/app/page.tsx

import Concept from "@/components/Concept";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palm Kitchens | Luxury Bespoke Kitchens in Dubai & Abu Dhabi",
  description:
    "Discover the art of luxury cabinetry with Palm Kitchens. Rolex-inspired designs for the UAE’s most prestigious homes.",
  keywords: [
    "Luxury Kitchens Dubai",
    "Bespoke Kitchens Abu Dhabi",
    "Modern Kitchen Design UAE",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Portfolio /> {/* عرض القسم هنا */}
      {/* باقي الأقسام مثل الـ Portfolio ستأتي لاحقاً */}
    </main>
  );
}
