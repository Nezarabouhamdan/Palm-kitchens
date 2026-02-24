"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../i18n/routing";
import { projectsData } from "@/data/projects"; // استيراد الداتا اللي عملناها

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  return (
    // تم تعديل الخلفية لتطابق لون الموقع الأوف-وايت الفخم
    <section className="py-32 bg-[#f2f0ef]" id="portfolio">
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

        {/* ==================== شبكة الصور المربوطة بالداتا ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          {projectsData.map((project, index) => {
            // توزيع المساحات (Span) برمجياً حسب ترتيب الصورة للحفاظ على الشبكة الفنية
            let spanClass = "md:col-span-1 md:row-span-1";
            if (index === 0) spanClass = "md:col-span-2 md:row-span-2"; // أول صورة كبيرة
            if (index === 3) spanClass = "md:col-span-3 md:row-span-1"; // رابع صورة بانورامية

            return (
              // حولنا الـ div إلى Link عشان الزبون يقدر يضغط ويفوت على تفاصيل المشروع
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.id}
                className={`group relative overflow-hidden bg-gray-100 block cursor-pointer ${spanClass}`}
              >
                <Image
                  src={project.coverImage}
                  alt={t(`projects.${project.id}`)}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-rolex-green/90 via-rolex-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex flex-col gap-2">
                  <span className="text-rolex-gold font-montserrat text-xs font-bold uppercase tracking-widest">
                    {t(`categories.${project.categoryId}`)}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                    {t(`projects.${project.id}`)}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* زر عرض الموبايل */}
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
