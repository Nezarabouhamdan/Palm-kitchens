import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-rolex-green">
      {/* ================== خلفية الفيديو ================== */}
      {/* تأكد من تغيير مسار الفيديو إذا سميته اسم مختلف */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        {/* رسالة تظهر إذا المتصفح ما بيدعم الفيديو */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay: طبقة خضراء شفافة (50%) مع تظليل خفيف للأطراف عشان النص يبرز والفيديو يندمج مع البراند */}
      <div className="absolute inset-0 bg-rolex-green/35 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] z-10"></div>
      {/* ================================================================================ */}

      {/* المحتوى (Foreground) - الـ z-index صار 20 عشان يكون فوق الفيديو والـ Overlay */}
      <div className="relative z-20 text-center px-4 mt-10">
        {/* العنوان مع ظل قوي ليبرز */}
        <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none whitespace-pre-line drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
          {t("title")}
        </h1>

        {/* النص الفرعي */}
        <p className="text-rolex-gold mt-8 max-w-2xl mx-auto text-lg md:text-xl font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {t("subtitle")}
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* زر فخم مع تأثير لمعان */}
          <button className="group relative overflow-hidden bg-rolex-gold text-white px-12 py-6 font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-500 rounded-sm">
            <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out] skew-x-12"></span>
            <span className="relative">{t("cta")}</span>
          </button>

          {/* زر ثانوي زجاجي */}
          <button className="group px-12 py-6 font-bold uppercase tracking-widest text-white border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-rolex-gold transition-all duration-500 rounded-sm">
            <span className="group-hover:text-rolex-gold transition-colors">
              {t("viewCollection")}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
