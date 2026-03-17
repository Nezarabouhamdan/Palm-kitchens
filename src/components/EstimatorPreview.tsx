import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  LayoutDashboard,
  PaintBucket,
  Ruler,
  Calculator,
  ArrowRight,
} from "lucide-react";

export default function EstimatorPreview() {
  const t = useTranslations("EstimatorPreview");

  const steps = [
    {
      num: "01",
      title: t("steps.step1.title"),
      desc: t("steps.step1.desc"),
      icon: <LayoutDashboard size={32} strokeWidth={1.2} />,
    },
    {
      num: "02",
      title: t("steps.step2.title"),
      desc: t("steps.step2.desc"),
      icon: <PaintBucket size={32} strokeWidth={1.2} />,
    },
    {
      num: "03",
      title: t("steps.step3.title"),
      desc: t("steps.step3.desc"),
      icon: <Ruler size={32} strokeWidth={1.2} />,
    },
    {
      num: "04",
      title: t("steps.step4.title"),
      desc: t("steps.step4.desc"),
      icon: <Calculator size={32} strokeWidth={1.2} />,
    },
  ];

  return (
    <section className="bg-[#f2f0ef] py-24 md:py-32 relative overflow-hidden border-y border-[#ebe9e5]">
      {/* إضاءة خلفية ذهبية خفيفة جداً بتعطي دفء للمكان */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rolex-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* ==================== الجانب الأيسر: ثابت (Sticky) ==================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-rolex-gold"></span>
              <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-[0.2em] text-xs">
                {t("badge")}
              </span>
            </div>

            <h2 className="text-rolex-green text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide leading-[1.1] mb-6">
              {t("title1")} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rolex-gold to-rolex-green">
                {t("title2")}
              </span>
            </h2>

            <p className="text-rolex-green/70 font-light text-lg leading-relaxed mb-10 max-w-md">
              {t("description")}
            </p>

            <Link
              href="/estimator"
              className="group inline-flex items-center gap-4 bg-rolex-green text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-rolex-gold transition-all duration-300 rounded-sm shadow-[0_10px_30px_-10px_rgba(0,40,23,0.3)]"
            >
              {t("cta")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>

          {/* ==================== الجانب الأيمن: كروت الخطوات الفخمة ==================== */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white p-8 md:p-10 rounded-sm border border-rolex-green/5 hover:border-rolex-gold/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,96,57,0.1)] transition-all duration-500 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* رقم مائي عملاق في الخلفية (Watermark) */}
                <div className="absolute -right-6 -bottom-8 text-[140px] font-black text-rolex-green/[0.03] group-hover:text-rolex-gold/[0.05] transition-colors duration-500 pointer-events-none rtl:right-auto rtl:-left-6 select-none">
                  {step.num}
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* الدائرة اللي فيها الأيقونة */}
                  <div className="w-16 h-16 bg-[#f2f0ef] text-rolex-green rounded-full flex items-center justify-center shrink-0 group-hover:bg-rolex-gold group-hover:text-white transition-colors duration-500">
                    {step.icon}
                  </div>

                  {/* النصوص */}
                  <div>
                    <h3 className="text-rolex-green text-2xl font-bold mb-3 flex items-center gap-3">
                      <span className="text-rolex-gold font-montserrat text-lg">
                        {step.num}.
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-rolex-green/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
