"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../i18n/routing";

// مصفوفة المشاريع (وهمية حالياً لحين ربطها بقاعدة بياناتك)
// استخدمنا صور من Unsplash (واللي أضفناها مسبقاً في next.config.ts)
const projects = [
  {
    id: "p1",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop",
    category: "modern",
    span: "md:col-span-2 md:row-span-2", // صورة ضخمة تاخذ عمودين وصفين
  },
  {
    id: "p2",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070&auto=format&fit=crop",
    category: "classic",
    span: "md:col-span-1 md:row-span-1", // صورة عادية
  },
  {
    id: "p3",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    category: "wood",
    span: "md:col-span-1 md:row-span-1", // صورة عادية
  },
  {
    id: "p4",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    category: "modern",
    span: "md:col-span-3 md:row-span-1", // صورة بانورامية عريضة بالأسفل
  },
];

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  return (
    // الخلفية بيضاء نقية عشان الصور تبرز وتخبط بالعين
    <section className="py-32 bg-white" id="portfolio">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* ==================== رأس القسم (Header) ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-rolex-gold"></span>
              <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-rolex-green text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* زر عرض كل المشاريع (اختياري) */}
          <Link
            href="/portfolio"
            className="group hidden md:flex items-center gap-3 pb-2 border-b border-rolex-gold text-rolex-green hover:text-rolex-gold transition-colors duration-300"
          >
            <span className="font-bold uppercase tracking-widest text-xs">
              {t("viewProject")}
            </span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* ==================== شبكة الصور (The Grid) ==================== */}
        {/* استخدمنا auto-rows-[300px] عشان نوحد ارتفاع الصفوف وتطلع الشبكة بيرفكت */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-gray-100 ${project.span}`}
            >
              {/* الصورة مع تأثير الزووم البطيء عند مرور الماوس */}
              <Image
                src={project.image}
                alt={t(`projects.${project.id}`)}
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />

              {/* طبقة شفافة داكنة تظهر فقط عند التمرير لتوضيح النص */}
              <div className="absolute inset-0 bg-gradient-to-t from-rolex-green/90 via-rolex-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* النصوص التي تظهر عند التمرير */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex flex-col gap-2">
                <span className="text-rolex-gold font-montserrat text-xs font-bold uppercase tracking-widest">
                  {t(`categories.${project.category}`)}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                  {t(`projects.${project.id}`)}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* زر عرض الموبايل (يظهر فقط في الشاشات الصغيرة) */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/portfolio"
            className="border border-rolex-gold text-rolex-green px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-rolex-gold hover:text-white transition-all duration-300 w-full text-center"
          >
            {t("viewProject")}
          </Link>
        </div>
      </div>
    </section>
  );
}
