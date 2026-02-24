import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-rolex-green">
      {/* ================== خلفية الفيديو ================== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-rolex-green/25 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] z-10"></div>
      {/* ================================================================================ */}

      {/* المحتوى (Foreground) */}
      <div className="relative z-20 text-center px-4 w-full mt-10">
        {/* العنوان: صغرناه للموبايل text-4xl وكبرناه للديسكتوب md:text-7xl */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-wide leading-tight whitespace-pre-line drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          {t("title")}
        </h1>

        {/* النص الفرعي: أصلحنا كلاس الديسكتوب md:text-xl وصغرناه للموبايل text-base */}
        <p className="text-white/95 mt-6 max-w-2xl mx-auto text-base md:text-xl font-medium tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,1)] px-2">
          {t("subtitle")}
        </p>

        {/* الأزرار: مسافات متجاوبة وعرض كامل على الموبايل w-full sm:w-auto */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
          {/* الزر الذهبي: padding متجاوب px-8 py-4 للموبايل و px-12 py-6 للديسكتوب */}
          <button className="w-full sm:w-auto group relative overflow-hidden bg-rolex-gold text-white px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-500 rounded-sm">
            <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] skew-x-12"></span>
            <span className="relative">{t("cta")}</span>
          </button>

          {/* الزر الزجاجي */}
          <button className="w-full sm:w-auto group px-8 py-4 md:px-12 md:py-6 text-sm md:text-base font-bold uppercase tracking-widest text-white border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-rolex-gold transition-all duration-500 rounded-sm">
            <span className="group-hover:text-rolex-gold transition-colors">
              {t("viewCollection")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
