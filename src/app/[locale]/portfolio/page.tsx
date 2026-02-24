"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { projectsData } from "@/data/projects";

// تأكد إن هذي الجملة موجودة (export default function)
export default function PortfolioIndexPage() {
  const t = useTranslations("Portfolio");

  return (
    <main className="bg-[#f2f0ef] min-h-screen pt-56 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* ==================== 1. ترويسة الصفحة ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-rolex-gold"></span>
            <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
              {t("badge")}
            </span>
            <span className="w-12 h-[1px] bg-rolex-gold"></span>
          </div>
          <h1 className="text-rolex-green text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-rolex-green/70 font-light text-lg md:text-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* ==================== 2. شبكة الكروت بالصور ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <Link
              href={`/portfolio/${project.slug}`}
              key={project.id}
              className="group block bg-white rounded-sm overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,96,57,0.15)] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* === قسم الصورة === */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.coverImage}
                  alt={t(`projects.${project.id}`)}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-rolex-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* === قسم النصوص === */}
              <div className="p-8 border-t border-rolex-green/5">
                <span className="text-rolex-gold font-montserrat text-[10px] font-bold uppercase tracking-widest block mb-3">
                  {t(`categories.${project.categoryId}`)}
                </span>

                <h3 className="text-rolex-green text-xl md:text-2xl font-bold tracking-wide mb-6">
                  {t(`projects.${project.id}`)}
                </h3>

                <div className="flex items-center gap-3 text-rolex-green/60 font-montserrat text-xs font-bold uppercase tracking-widest group-hover:text-rolex-gold transition-colors duration-300">
                  <span>{t("viewProject")}</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 rtl:group-hover:-translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
