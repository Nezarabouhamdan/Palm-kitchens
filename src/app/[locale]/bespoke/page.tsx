"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Coffee, PenTool, Hammer, CheckCircle } from "lucide-react";

export default function BespokePage() {
  const t = useTranslations("Bespoke");

  return (
    <main className="bg-[#f2f0ef] min-h-screen pt-40 md:pt-56 pb-24">
      {/* ==================== 1. الهيرو (الترويسة) ==================== */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center mb-24 animate-fade-in-up">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-rolex-gold"></span>
          <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
            {t("badge")}
          </span>
          <span className="w-12 h-[1px] bg-rolex-gold"></span>
        </div>
        <h1 className="text-rolex-green text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide leading-tight mb-8">
          {t("title")}
        </h1>
        <p className="text-rolex-green/70 font-light text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* ==================== 2. صورة عريضة تعطي فخامة للصفحة ==================== */}
      {/* ==================== 2. صورة عريضة تعطي فخامة للصفحة ==================== */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[600px] relative mb-24 md:mb-32 animate-fade-in-up delay-200 overflow-hidden">
        {/* ==================== 2. صورة عريضة تعطي فخامة للصفحة ==================== */}
        <div className="w-full h-[60vh] md:h-[90vh] relative mb-24 md:mb-32 animate-fade-in-up delay-200 overflow-hidden rounded-sm shadow-2xl">
          <Image
            src="https://i.ibb.co/vxV8pn8F/Gemini-Generated-Image-3ylfqi3ylfqi3ylf.png"
            alt="Bespoke Kitchen Design Process"
            fill
            unoptimized
            // استخدمنا object-cover مع object-center عشان تحافظ على دقتها وتتوسط الشاشة
            className="object-cover object-center"
          />
          {/* فلتر خفيف جداً لدمج الصورة مع ألوان الموقع */}
          <div className="absolute inset-0 bg-[#002817]/5 pointer-events-none"></div>
        </div>
        {/* فلتر خفيف فوق الصورة عشان تندمج مع ألوان الموقع */}
        <div className="absolute inset-0 bg-[#002817]/10 pointer-events-none"></div>

        <div className="absolute inset-0 bg-rolex-green/20"></div>
      </div>

      {/* ==================== 3. خطوات العمل (The Process) ==================== */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Step 1 */}
          <div className="group relative bg-white p-10 md:p-14 rounded-sm border border-rolex-green/5 hover:border-rolex-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(0,96,57,0.1)] transition-all duration-500 animate-fade-in-up">
            <div className="absolute top-0 right-0 p-8 text-rolex-green/5 group-hover:text-rolex-gold/10 transition-colors duration-500">
              <Coffee size={80} strokeWidth={1} />
            </div>
            <h3 className="text-rolex-green text-2xl md:text-3xl font-bold mb-6 relative z-10">
              {t("steps.step1.title")}
            </h3>
            <p className="text-rolex-green/70 text-base md:text-lg leading-relaxed font-light relative z-10">
              {t("steps.step1.desc")}
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white p-10 md:p-14 rounded-sm border border-rolex-green/5 hover:border-rolex-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(0,96,57,0.1)] transition-all duration-500 animate-fade-in-up delay-100 md:mt-16">
            <div className="absolute top-0 right-0 p-8 text-rolex-green/5 group-hover:text-rolex-gold/10 transition-colors duration-500">
              <PenTool size={80} strokeWidth={1} />
            </div>
            <h3 className="text-rolex-green text-2xl md:text-3xl font-bold mb-6 relative z-10">
              {t("steps.step2.title")}
            </h3>
            <p className="text-rolex-green/70 text-base md:text-lg leading-relaxed font-light relative z-10">
              {t("steps.step2.desc")}
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white p-10 md:p-14 rounded-sm border border-rolex-green/5 hover:border-rolex-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(0,96,57,0.1)] transition-all duration-500 animate-fade-in-up delay-200">
            <div className="absolute top-0 right-0 p-8 text-rolex-green/5 group-hover:text-rolex-gold/10 transition-colors duration-500">
              <Hammer size={80} strokeWidth={1} />
            </div>
            <h3 className="text-rolex-green text-2xl md:text-3xl font-bold mb-6 relative z-10">
              {t("steps.step3.title")}
            </h3>
            <p className="text-rolex-green/70 text-base md:text-lg leading-relaxed font-light relative z-10">
              {t("steps.step3.desc")}
            </p>
          </div>

          {/* Step 4 */}
          <div className="group relative bg-white p-10 md:p-14 rounded-sm border border-rolex-green/5 hover:border-rolex-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(0,96,57,0.1)] transition-all duration-500 animate-fade-in-up delay-300 md:mt-16">
            <div className="absolute top-0 right-0 p-8 text-rolex-green/5 group-hover:text-rolex-gold/10 transition-colors duration-500">
              <CheckCircle size={80} strokeWidth={1} />
            </div>
            <h3 className="text-rolex-green text-2xl md:text-3xl font-bold mb-6 relative z-10">
              {t("steps.step4.title")}
            </h3>
            <p className="text-rolex-green/70 text-base md:text-lg leading-relaxed font-light relative z-10">
              {t("steps.step4.desc")}
            </p>
          </div>
        </div>
      </div>

      {/* ==================== 4. قسم الإغلاق (Call to Action) ==================== */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl mt-32 text-center animate-fade-in-up delay-500">
        <div className="bg-rolex-green p-12 md:p-24 rounded-sm relative overflow-hidden">
          {/* زخرفة خلفية الزر */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rolex-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 relative z-10">
            {t("cta.title")}
          </h2>
          <p className="text-white/80 text-lg mb-12 relative z-10">
            {t("cta.desc")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-rolex-gold text-white px-8 md:px-12 py-4 md:py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-rolex-green transition-colors duration-300 relative z-10 rounded-sm"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </main>
  );
}
