"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  LayoutPanelLeft,
  LayoutTemplate,
  LayoutGrid,
  LayoutDashboard,
  Minus,
  Plus,
  PaintBucket,
  Sparkles,
  Crown,
  Layers,
  ShieldCheck,
  Gem,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function EstimatorPage() {
  const t = useTranslations("Estimator");

  // حالة (State) لتتبع الخطوة الحالية
  const [step, setStep] = useState(1);

  // حالة لحفظ اختيارات الزبون
  const [layout, setLayout] = useState("linear");
  const [meters, setMeters] = useState(6);
  const [finish, setFinish] = useState("basic");
  const [countertop, setCountertop] = useState("quartz");

  // حالة لحفظ السعر النهائي
  const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 });

  // دالة لحساب السعر التقديري (لوجيك تسعير وهمي بس منطقي جداً للـ Luxury)
  const calculatePrice = () => {
    // السعر الأساسي للمتر حسب التشطيب
    let basePerMeter =
      finish === "luxury" ? 5000 : finish === "premium" ? 3500 : 2500;

    // إضافة سعر الرخام للمتر
    let marblePerMeter =
      countertop === "marble" ? 3000 : countertop === "dekton" ? 2000 : 1000;

    let totalPerMeter = basePerMeter + marblePerMeter;
    let baseTotal = totalPerMeter * meters;

    // نسبة زيادة حسب شكل المطبخ (الجزيرة وحرف U بيستهلكوا مواد أكثر)
    let layoutMultiplier =
      layout === "island"
        ? 1.3
        : layout === "uShape"
          ? 1.15
          : layout === "lShape"
            ? 1.05
            : 1;

    let finalEstimate = baseTotal * layoutMultiplier;

    // إنشاء رينج (من - إلى) عشان يكون تقديري ومش سعر قطعي
    setEstimatedPrice({
      min: Math.round(finalEstimate * 0.9),
      max: Math.round(finalEstimate * 1.1),
    });

    setStep(6); // الانتقال لشاشة النتيجة
  };

  // كلاس موحد للكروت القابلة للضغط
  const cardClass = (isSelected: boolean) => `
    relative p-6 md:p-8 rounded-sm border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center gap-4
    ${isSelected ? "border-rolex-gold bg-rolex-gold/5 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)]" : "border-rolex-green/10 bg-white hover:border-rolex-gold/50 hover:bg-rolex-green/5"}
  `;

  return (
    <main className="bg-[#f2f0ef] min-h-screen pt-40 md:pt-56 pb-24 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* ================= الترويسة وشريط التقدم ================= */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs mb-4 block">
            {t("badge")}
          </span>
          <h1 className="text-rolex-green text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
            {step === 6 ? t("result.title") : t("title")}
          </h1>

          {step < 6 && (
            <div className="w-full max-w-md mx-auto bg-rolex-green/10 h-1.5 rounded-full overflow-hidden mt-8">
              <div
                className="bg-rolex-gold h-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* ================= الحاوية الرئيسية للحاسبة ================= */}
        <div className="bg-white p-6 md:p-12 rounded-sm border border-rolex-green/5 shadow-[0_20px_40px_-15px_rgba(0,96,57,0.05)] animate-fade-in-up delay-100 min-h-[400px]">
          {/* الخطوة 1: شكل المطبخ */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h2 className="text-rolex-green text-xl md:text-2xl font-bold mb-8 text-center">
                {t("step1.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div
                  onClick={() => setLayout("linear")}
                  className={cardClass(layout === "linear")}
                >
                  <LayoutPanelLeft
                    size={48}
                    className={
                      layout === "linear"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green">
                    {t("step1.linear")}
                  </span>
                  {layout === "linear" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setLayout("lShape")}
                  className={cardClass(layout === "lShape")}
                >
                  <LayoutTemplate
                    size={48}
                    className={
                      layout === "lShape"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green">
                    {t("step1.lShape")}
                  </span>
                  {layout === "lShape" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setLayout("uShape")}
                  className={cardClass(layout === "uShape")}
                >
                  <LayoutGrid
                    size={48}
                    className={
                      layout === "uShape"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green">
                    {t("step1.uShape")}
                  </span>
                  {layout === "uShape" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setLayout("island")}
                  className={cardClass(layout === "island")}
                >
                  <LayoutDashboard
                    size={48}
                    className={
                      layout === "island"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green">
                    {t("step1.island")}
                  </span>
                  {layout === "island" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* الخطوة 2: الأمتار الطولية */}
          {step === 2 && (
            <div className="animate-fade-in-up text-center py-8">
              <h2 className="text-rolex-green text-xl md:text-2xl font-bold mb-4">
                {t("step2.title")}
              </h2>
              <p className="text-rolex-green/60 mb-12">{t("step2.desc")}</p>

              <div className="flex items-center justify-center gap-8 md:gap-12">
                <button
                  onClick={() => setMeters((m) => Math.max(3, m - 1))}
                  className="w-16 h-16 rounded-full border-2 border-rolex-green text-rolex-green flex items-center justify-center hover:bg-rolex-green hover:text-white transition-colors"
                >
                  <Minus size={24} />
                </button>

                <div className="text-center w-32">
                  <span className="text-6xl md:text-8xl font-black text-rolex-gold">
                    {meters}
                  </span>
                  <span className="block text-rolex-green font-bold uppercase tracking-widest text-xs mt-2">
                    {t("step2.meters")}
                  </span>
                </div>

                <button
                  onClick={() => setMeters((m) => Math.min(30, m + 1))}
                  className="w-16 h-16 rounded-full border-2 border-rolex-green text-rolex-green flex items-center justify-center hover:bg-rolex-green hover:text-white transition-colors"
                >
                  <Plus size={24} />
                </button>
              </div>
            </div>
          )}

          {/* الخطوة 3: خامات الدرف */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h2 className="text-rolex-green text-xl md:text-2xl font-bold mb-8 text-center">
                {t("step3.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => setFinish("basic")}
                  className={cardClass(finish === "basic")}
                >
                  <PaintBucket
                    size={40}
                    className={
                      finish === "basic"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green text-sm">
                    {t("step3.basic")}
                  </span>
                  {finish === "basic" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setFinish("premium")}
                  className={cardClass(finish === "premium")}
                >
                  <Sparkles
                    size={40}
                    className={
                      finish === "premium"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green text-sm">
                    {t("step3.premium")}
                  </span>
                  {finish === "premium" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setFinish("luxury")}
                  className={cardClass(finish === "luxury")}
                >
                  <Crown
                    size={40}
                    className={
                      finish === "luxury"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green text-sm">
                    {t("step3.luxury")}
                  </span>
                  {finish === "luxury" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* الخطوة 4: الرخام */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              <h2 className="text-rolex-green text-xl md:text-2xl font-bold mb-8 text-center">
                {t("step4.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => setCountertop("quartz")}
                  className={cardClass(countertop === "quartz")}
                >
                  <Layers
                    size={40}
                    className={
                      countertop === "quartz"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green text-sm">
                    {t("step4.quartz")}
                  </span>
                  {countertop === "quartz" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setCountertop("dekton")}
                  className={cardClass(countertop === "dekton")}
                >
                  <ShieldCheck
                    size={40}
                    className={
                      countertop === "dekton"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green text-sm">
                    {t("step4.dekton")}
                  </span>
                  {countertop === "dekton" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
                <div
                  onClick={() => setCountertop("marble")}
                  className={cardClass(countertop === "marble")}
                >
                  <Gem
                    size={40}
                    className={
                      countertop === "marble"
                        ? "text-rolex-gold"
                        : "text-rolex-green/40"
                    }
                    strokeWidth={1.5}
                  />
                  <span className="font-bold text-rolex-green text-sm">
                    {t("step4.marble")}
                  </span>
                  {countertop === "marble" && (
                    <CheckCircle2
                      className="absolute top-4 right-4 text-rolex-gold"
                      size={20}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* الخطوة 5: اصطياد الزبون (Lead Capture) */}
          {step === 5 && (
            <div className="animate-fade-in-up text-center max-w-md mx-auto py-4">
              <h2 className="text-rolex-green text-xl md:text-2xl font-bold mb-4">
                {t("step5.title")}
              </h2>
              <p className="text-rolex-green/60 mb-8">{t("step5.desc")}</p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t("step5.name")}
                  className="w-full bg-[#f2f0ef] border border-rolex-green/10 focus:border-rolex-gold focus:ring-1 focus:ring-rolex-gold rounded-sm p-4 text-rolex-green outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder={t("step5.phone")}
                  className="w-full bg-[#f2f0ef] border border-rolex-green/10 focus:border-rolex-gold focus:ring-1 focus:ring-rolex-gold rounded-sm p-4 text-rolex-green outline-none transition-all text-left"
                  dir="ltr"
                />
              </div>
            </div>
          )}

          {/* الخطوة 6: النتيجة الذهبية */}
          {step === 6 && (
            <div className="animate-fade-in-up text-center py-12">
              <div className="w-24 h-24 bg-rolex-gold/10 text-rolex-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-rolex-green/70 font-bold uppercase tracking-widest text-sm mb-4">
                {t("result.title")}
              </h2>

              {/* السعر التقديري */}
              <div
                className="text-4xl md:text-6xl font-black text-rolex-gold mb-6 flex items-center justify-center gap-4 flex-wrap"
                dir="ltr"
              >
                <span>{estimatedPrice.min.toLocaleString()}</span>
                <span className="text-rolex-green/30">-</span>
                <span>{estimatedPrice.max.toLocaleString()}</span>
                <span className="text-xl md:text-2xl text-rolex-green font-bold">
                  {t("result.currency")}
                </span>
              </div>

              <p className="text-rolex-green/60 max-w-lg mx-auto mb-12 leading-relaxed">
                {t("result.desc")}
              </p>

              <Link
                href="/contact"
                className="inline-block bg-rolex-green text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-rolex-gold transition-colors duration-300 rounded-sm shadow-xl"
              >
                {t("result.book")}
              </Link>
            </div>
          )}

          {/* ================= أزرار التحكم (التالي / السابق) ================= */}
          {step < 6 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-rolex-green/5">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className={`flex items-center gap-2 text-rolex-green/60 hover:text-rolex-gold font-bold uppercase text-xs tracking-widest transition-colors ${step === 1 ? "invisible" : ""}`}
              >
                <ArrowLeft size={16} className="rtl:rotate-180" /> {t("prev")}
              </button>

              {step < 5 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="flex items-center gap-3 bg-rolex-green text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-rolex-gold transition-colors"
                >
                  {t("next")}{" "}
                  <ArrowRight size={16} className="rtl:rotate-180" />
                </button>
              ) : (
                <button
                  onClick={calculatePrice}
                  className="flex items-center gap-3 bg-rolex-gold text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-rolex-green transition-colors shadow-lg"
                >
                  {t("step5.viewResult")}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
