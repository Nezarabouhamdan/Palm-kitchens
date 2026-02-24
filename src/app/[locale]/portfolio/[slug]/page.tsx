"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Link } from "@/i18n/routing";
import { useState, use } from "react";
import {
  Palette,
  Layers,
  Gem,
  LayoutDashboard,
  MapPin,
  Calendar,
  X,
} from "lucide-react";

// ================== مكون عرض المواصفة مع أيقونة ==================
const SpecCard = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-start gap-5 p-6 bg-white rounded-sm border border-rolex-green/5 hover:border-rolex-gold/30 hover:shadow-[0_10px_30px_-10px_rgba(0,96,57,0.1)] transition-all duration-500 group">
    <div className="p-3 bg-rolex-green/5 rounded-full text-rolex-green group-hover:bg-rolex-gold/10 group-hover:text-rolex-gold transition-colors duration-500">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="text-rolex-gold font-montserrat text-[10px] font-bold uppercase tracking-widest mb-2">
        {label}
      </h4>
      <p className="text-rolex-green font-semibold text-sm md:text-base leading-relaxed">
        {value}
      </p>
    </div>
  </div>
);

// ================== الصفحة الرئيسية للمشروع ==================
export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = useLocale();
  const { slug } = use(params);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = useTranslations(`ProjectDetails.${project.id}`);
  const commonT = useTranslations("ProjectDetails");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#f2f0ef] min-h-screen pb-24">
      {/* ================== 1. هيرو المشروع ================== */}
      <section className="relative h-[70vh] md:h-[85vh] w-full">
        <Image
          src={project.coverImage}
          alt={t("title")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002817]/90 via-[#002817]/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 container mx-auto max-w-7xl z-10">
          <div className="flex items-center gap-3 text-rolex-gold mb-4 animate-fade-in-up">
            <MapPin size={18} />
            <span className="font-montserrat text-xs font-bold uppercase tracking-widest">
              {t("location")}
            </span>
            <span className="mx-2">•</span>
            <Calendar size={18} />
            <span className="font-montserrat text-xs font-bold uppercase tracking-widest">
              {project.year}
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight mb-6 animate-fade-in-up delay-100">
            {t("title")}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* ================== 2. الوصف (القصة) ================== */}
          <div className="lg:col-span-5 animate-fade-in-up delay-200">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-rolex-gold"></span>
              {/* تعديل الترجمة هنا */}
              <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
                {commonT("storyLabel")}
              </span>
            </div>
            <p className="text-rolex-green/80 text-lg md:text-xl leading-relaxed font-light">
              {t("description")}
            </p>

            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-rolex-green text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-rolex-gold transition-all duration-500"
              >
                {/* تعديل الترجمة هنا لتكون قطعة واحدة */}
                <span>{commonT("enquireStyle")}</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300 rtl:group-hover:-translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ================== 3. المواصفات مع الأيقونات ================== */}
          <div className="lg:col-span-7">
            <h3 className="text-rolex-green text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-rolex-gold inline-block"></span>
              {commonT("specificationsLabel")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up delay-300">
              {/* تعديل الترجمات هنا للـ Labels */}
              <SpecCard
                icon={Palette}
                label={commonT("labels.style")}
                value={t("specs.style")}
              />
              <SpecCard
                icon={Layers}
                label={commonT("labels.materials")}
                value={t("specs.materials")}
              />
              <SpecCard
                icon={Gem}
                label={commonT("labels.accents")}
                value={t("specs.accents")}
              />
              <SpecCard
                icon={LayoutDashboard}
                label={commonT("labels.layout")}
                value={t("specs.layout")}
              />
            </div>
          </div>
        </div>

        {/* ================== 4. معرض الصور ================== */}
        <div className="mt-24 md:mt-32 mb-16 animate-fade-in-up delay-500">
          <h3 className="text-rolex-green text-2xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-rolex-gold/50 inline-block"></span>
            {commonT("galleryLabel")}
            <span className="w-12 h-[1px] bg-rolex-gold/50 inline-block"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className={`relative h-[300px] md:h-[400px] group cursor-pointer overflow-hidden rounded-sm ${index === 0 ? "md:col-span-2" : ""}`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${t("title")} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rolex-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white bg-rolex-green/80 p-3 rounded-full drop-shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    🔍
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================== Lightbox Modal ================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-[#002817]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-rolex-gold transition-colors p-2 bg-white/5 rounded-full z-50">
            <X size={32} />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery zoom"
              fill
              className="object-contain drop-shadow-2xl"
              quality={100}
            />
          </div>
        </div>
      )}
    </main>
  );
}
