"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Compass, Crown, ShieldCheck } from "lucide-react";

export default function ConceptPage() {
  const t = useTranslations("ConceptPage");

  return (
    <main className="bg-[#f2f0ef] min-h-screen">
      {/* ==================== 1. الهيرو (الخلفية الثابتة Parallax) ==================== */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* خاصية bg-fixed هي اللي بتعطي تأثير الـ Parallax الساحر */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070')",
          }}
        ></div>

        {/* طبقة شفافة داكنة لبروز النص */}
        <div className="absolute inset-0 bg-[#002817]/80 z-10"></div>

        <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl animate-fade-in-up mt-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-rolex-gold"></span>
            <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
              {t("badge")}
            </span>
            <span className="w-12 h-[1px] bg-rolex-gold"></span>
          </div>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wide leading-tight mb-8">
            {t("title")}
          </h1>
          <p className="text-white/80 font-light text-lg md:text-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* ==================== 2. قصة الحرفة (The Story) ==================== */}
      <section className="py-24 md:py-32 container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* قسم النصوص */}
          <div className="animate-fade-in-up">
            <h2 className="text-rolex-green text-3xl md:text-5xl font-bold mb-10 leading-tight">
              {t("storyTitle")}
            </h2>
            <div className="w-16 h-[2px] bg-rolex-gold mb-10"></div>
            <p className="text-rolex-green/80 text-lg md:text-xl leading-relaxed font-light mb-6">
              {t("storyP1")}
            </p>
            <p className="text-rolex-green/80 text-lg md:text-xl leading-relaxed font-light">
              {t("storyP2")}
            </p>
          </div>

          {/* قسم الصورة الفنية */}
          <div className="relative h-[500px] md:h-[700px] w-full animate-fade-in-up delay-200">
            {/* إطار ذهبي ديكوري خلف الصورة */}
            <div className="absolute top-8 -left-8 w-full h-full border border-rolex-gold/30 z-0 hidden md:block"></div>
            <div className="relative z-10 w-full h-full overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070"
                alt="Craftsmanship"
                fill
                unoptimized
                className="object-cover transition-transform duration-[3000ms] hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. الركائز (Core Pillars) ==================== */}
      <section className="py-24 bg-white border-t border-rolex-green/5">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-rolex-green text-3xl md:text-4xl font-bold uppercase tracking-wide">
              {t("valuesTitle")}
            </h2>
            <div className="w-24 h-[1px] bg-rolex-gold mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div className="text-center group animate-fade-in-up">
              <div className="w-20 h-20 mx-auto bg-rolex-green/5 text-rolex-green rounded-full flex items-center justify-center mb-8 group-hover:bg-rolex-gold group-hover:text-white transition-all duration-500">
                <ShieldCheck size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-rolex-green text-xl font-bold mb-4">
                {t("values.v1.title")}
              </h3>
              <p className="text-rolex-green/70 leading-relaxed font-light">
                {t("values.v1.desc")}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center group animate-fade-in-up delay-100">
              <div className="w-20 h-20 mx-auto bg-rolex-green/5 text-rolex-green rounded-full flex items-center justify-center mb-8 group-hover:bg-rolex-gold group-hover:text-white transition-all duration-500">
                <Crown size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-rolex-green text-xl font-bold mb-4">
                {t("values.v2.title")}
              </h3>
              <p className="text-rolex-green/70 leading-relaxed font-light">
                {t("values.v2.desc")}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center group animate-fade-in-up delay-200">
              <div className="w-20 h-20 mx-auto bg-rolex-green/5 text-rolex-green rounded-full flex items-center justify-center mb-8 group-hover:bg-rolex-gold group-hover:text-white transition-all duration-500">
                <Compass size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-rolex-green text-xl font-bold mb-4">
                {t("values.v3.title")}
              </h3>
              <p className="text-rolex-green/70 leading-relaxed font-light">
                {t("values.v3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. زر الانتقال للمعرض ==================== */}
      {/* ==================== 4. زر الانتقال للمعرض ==================== */}
      <section className="py-24 text-center bg-[#002817] relative overflow-hidden">
        {/* زخرفة خفيفة */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rolex-gold/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 animate-fade-in-up">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 leading-tight">
            {t("ctaTitle")}
          </h2>
          <Link
            href="/portfolio"
            // الزر صار ذهبي صلب مع ظل فخم عشان ينطرح للعين
            className="inline-block bg-rolex-gold text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-rolex-green transition-all duration-300 rounded-sm shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)]"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}
