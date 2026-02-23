"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "../i18n/routing";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-2" // أبيض صريح مع ظل فخم عند النزول
          : "bg-white/95 backdrop-blur-sm py-4" // أبيض شبه كامل في البداية لضمان قراءة اللوغو فوق الفيديو
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* اللوغو - الآن سيظهر بألوانه الأصلية وبكامل فخامته */}
        <Link href="/" className="relative flex items-center gap-3 group">
          <div className="relative h-14 w-32 md:h-16 md:w-36 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="https://i.ibb.co/tpzN5x5K/IMG-2984-1-1.png"
              alt="Palm Kitchens Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* الروابط - تم تغيير اللون إلى الأخضر الملكي (rolex-green) */}
        <div className="hidden md:flex gap-8 text-rolex-green font-montserrat text-[10px] font-bold uppercase tracking-widest">
          <Link
            href="/concept"
            className="hover:text-rolex-gold transition-colors duration-300"
          >
            {t("concept")}
          </Link>
          <Link
            href="/bespoke"
            className="hover:text-rolex-gold transition-colors duration-300"
          >
            {t("bespoke")}
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-rolex-gold transition-colors duration-300"
          >
            {t("portfolio")}
          </Link>
        </div>

        {/* الأزرار وتغيير اللغة */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="text-rolex-green font-montserrat text-xs font-bold border-b border-rolex-green pb-0.5 hover:text-rolex-gold hover:border-rolex-gold transition-colors duration-300"
          >
            {t("changeLang")}
          </button>
          <Link
            href="/contact"
            className="bg-rolex-gold text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-rolex-green transition-all duration-300 rounded-sm"
          >
            {t("enquire")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
