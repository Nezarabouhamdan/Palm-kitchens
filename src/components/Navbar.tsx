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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-[800ms] ease-in-out ${
          scrolled || isMobileMenuOpen
            ? "bg-[#f2f0ef] shadow-sm py-2"
            : "bg-[#f2f0ef]/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* ================= 1. قسم اللوغو ================= */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="relative flex items-center group">
              <div className="relative h-12 w-28 md:h-16 md:w-36 transition-transform duration-[800ms] group-hover:scale-105">
                <Image
                  src="https://i.ibb.co/tpzN5x5K/IMG-2984-1-1.png"
                  alt="Palm Kitchens Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* ================= 2. قسم الروابط (ديسكتوب في المنتصف) ================= */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div
              className={`flex gap-8 lg:gap-12 transition-all duration-300 text-rolex-green ${
                locale === "ar"
                  ? "text-xs font-bold tracking-normal"
                  : "font-montserrat text-[10px] font-bold uppercase tracking-[0.15em]"
              }`}
            >
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
          </div>

          {/* ================= 3. قسم الأزرار والهامبرغر ================= */}
          <div className="flex justify-end items-center gap-3 md:gap-6 z-50 flex-shrink-0">
            <button
              onClick={toggleLanguage}
              className={`hidden md:block text-rolex-green font-bold border-b border-rolex-green pb-0.5 hover:text-rolex-gold hover:border-rolex-gold transition-colors duration-300 ${
                locale === "ar"
                  ? "text-xs"
                  : "font-montserrat text-[10px] tracking-widest"
              }`}
            >
              {t("changeLang")}
            </button>

            <Link
              href="/contact"
              className={`bg-rolex-gold text-white px-5 py-2.5 hover:bg-rolex-green transition-all duration-300 rounded-sm ${
                locale === "ar"
                  ? "text-xs font-bold tracking-normal"
                  : "font-montserrat text-[9px] font-black uppercase tracking-widest"
              }`}
            >
              {t("enquire")}
            </Link>

            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none ms-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`block w-7 h-[2px] bg-rolex-green transition-all duration-700 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-7 h-[2px] bg-rolex-green transition-all duration-700 ease-in-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-7 h-[2px] bg-rolex-green transition-all duration-700 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== القائمة المنسدلة للموبايل (Mobile Overlay) ==================== */}
      <div
        className={`fixed inset-0 bg-[#f2f0ef] z-40 flex flex-col justify-center items-center transition-all duration-[600ms] ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-10 text-rolex-green mt-16 ${
            locale === "ar"
              ? "text-2xl font-bold tracking-normal"
              : "font-montserrat text-xl font-black uppercase tracking-[0.2em]"
          }`}
        >
          <Link
            href="/concept"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-rolex-gold transition-colors duration-500"
          >
            {t("concept")}
          </Link>
          <Link
            href="/bespoke"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-rolex-gold transition-colors duration-500"
          >
            {t("bespoke")}
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-rolex-gold transition-colors duration-500"
          >
            {t("portfolio")}
          </Link>

          <div className="w-16 h-[1px] bg-rolex-gold/30 my-2"></div>

          <button
            onClick={toggleLanguage}
            className={`text-rolex-gold hover:text-rolex-green transition-colors duration-500 ${
              locale === "ar"
                ? "text-lg font-bold"
                : "text-sm font-black tracking-widest"
            }`}
          >
            {t("changeLang")}
          </button>
        </div>
      </div>
    </>
  );
}
