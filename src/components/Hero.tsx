import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    // اعتمدنا لون البراند الأساسي bg-rolex-green صراحةً هنا
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-rolex-green">
      {/* ================== طبقة الأشكال الهندسية الإبداعية (The Shapes) ================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* تأثير الـ Vignette (تظليل الحواف للأسود) لإعطاء عمق 3D بدون تشويه اللون الأساسي */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.7)_100%)]"></div>

        {/* الشكل 1: مخطط هندسي ذهبي كبير يدور ببطء شديد في الخلفية */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vh] h-[150vh] opacity-15 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-rolex-gold fill-none stroke-[0.2]"
          >
            <circle cx="50" cy="50" r="45" />
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              transform="rotate(45 50 50)"
            />
            <polygon points="50,5 95,50 50,95 5,50" />
          </svg>
        </div>

        {/* الشكل 2: شكل سداسي (إشارة لخلية النحل/الدقة) يدور بالعكس */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[80vh] h-[80vh] opacity-10 animate-spin-reverse-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-white fill-none stroke-[0.1]"
          >
            <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" />
          </svg>
        </div>

        {/* الشكل 3: كريستالات خضراء عائمة (Floating Abstract Gems) */}
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-white/5 backdrop-blur-md rounded-3xl rotate-12 animate-float ring-1 ring-white/10"></div>
        <div className="absolute bottom-[25%] right-[20%] w-24 h-24 bg-rolex-gold/10 backdrop-blur-md rounded-full animate-float animation-delay-2000 blur-sm"></div>

        {/* الشكل 4: نبض ضوئي ذهبي في المركز (تم تخفيفه جداً لكي لا يصفر الأخضر) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rolex-gold/10 blur-[120px] rounded-full animate-pulse-gold"></div>

        {/* طبقة "ضوضاء" خفيفة جداً (تم إلغاء mix-blend للحفاظ على اللون الأصلي) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJYdWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-[0.03]"></div>
      </div>
      {/* ================================================================================ */}

      {/* المحتوى (Foreground) */}
      <div className="relative z-20 text-center px-4 mt-10">
        {/* العنوان مع ظل قوي ليبرز فوق الأشكال */}
        <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none whitespace-pre-line drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          {t("title")}
        </h1>

        {/* النص الفرعي */}
        <p className="text-rolex-gold/90 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
          {t("subtitle")}
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* زر فخم مع تأثير لمعان */}
          <button className="group relative overflow-hidden bg-rolex-gold text-white px-12 py-6 font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-500 rounded-sm">
            <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] skew-x-12"></span>
            <span className="relative">{t("cta")}</span>
          </button>

          {/* زر ثانوي زجاجي */}
          <button className="group px-12 py-6 font-bold uppercase tracking-widest text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-rolex-gold/50 transition-all duration-500 rounded-sm">
            <span className="group-hover:text-rolex-gold transition-colors">
              {t("viewCollection")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
