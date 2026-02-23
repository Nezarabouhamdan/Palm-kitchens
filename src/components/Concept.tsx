"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Concept() {
  const t = useTranslations("Concept");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // تشغيل الحركة مرة واحدة فقط
        }
      },
      { threshold: 0.2 }, // تبدأ الحركة لما يظهر 20% من القسم
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // خلفية بيضاء نقية لتعطي تبايناً مذهلاً مع الهيرو الأخضر الغامق
    <section
      ref={sectionRef}
      className="py-32 bg-white overflow-hidden relative"
      id="concept"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ================= عمود النص (اليمين في العربي، اليسار في الإنجليزي) ================= */}
          <div
            className={`flex flex-col justify-center transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-rolex-gold"></span>
              <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-rolex-green text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
              {t("title")}
            </h2>

            {/* Description */}
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-10">
              {t("description")}
            </p>

            {/* Features & Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button className="group relative overflow-hidden bg-rolex-green text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:shadow-xl transition-all duration-500">
                <span className="absolute inset-0 w-full h-full bg-rolex-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                <span className="relative z-10">{t("explore")}</span>
              </button>

              <div className="flex flex-col gap-2 border-l-2 border-rolex-gold/30 pl-6">
                <span className="text-rolex-green font-bold tracking-wide text-sm uppercase">
                  {t("feature1")}
                </span>
                <span className="text-rolex-green font-bold tracking-wide text-sm uppercase">
                  {t("feature2")}
                </span>
              </div>
            </div>
          </div>

          {/* ================= عمود الصورة (التصميم غير المتماثل) ================= */}
          <div
            className={`relative h-[600px] md:h-[700px] w-full transform transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-24 opacity-0"
            }`}
          >
            {/* إطار ذهبي خلف الصورة ليعطي عمق 3D */}
            <div className="absolute top-8 -left-8 w-full h-full border border-rolex-gold/50 z-0 hidden md:block"></div>

            {/* حاوية الصورة الأساسية */}
            <div className="relative w-full h-full z-10 shadow-2xl overflow-hidden">
              <Image
                // استخدمت صورة لمطبخ رخامي فخم جداً كـ Placeholder
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Palm Kitchens Concept"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
              {/* Overlay خفيف لدمج الصورة مع ألوان الموقع */}
              <div className="absolute inset-0 bg-rolex-green/10 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* عنصر ديكوري: مربع أخضر يطفو فوق الصورة */}
            <div className="absolute -bottom-10 -right-10 bg-rolex-green p-8 md:p-12 z-20 shadow-2xl hidden md:block">
              <div className="w-16 h-16 border-2 border-rolex-gold rounded-full flex items-center justify-center">
                <span className="text-rolex-gold text-2xl">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
