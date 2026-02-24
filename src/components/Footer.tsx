import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");

  return (
    // الخلفية أوف-وايت، والحد العلوي صار أنعم
    <footer className="bg-[#f2f0ef] pt-24 pb-8 border-t border-rolex-green/10">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* ================= القسم العلوي: الأعمدة ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* العمود الأول: اللوغو والوصف */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="relative h-16 w-36 mb-8 block hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://i.ibb.co/tpzN5x5K/IMG-2984-1-1.png"
                alt="Palm Kitchens Logo"
                fill
                className="object-contain"
              />
            </Link>
            {/* النص صار أخضر ليتناسب مع الخلفية الفاتحة */}
            <p className="text-rolex-green/80 text-sm md:text-base leading-relaxed max-w-sm font-light">
              {t("description")}
            </p>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="md:col-span-3">
            <h4 className="text-rolex-gold font-montserrat text-xs font-bold uppercase tracking-widest mb-8">
              {t("explore")}
            </h4>
            <ul className="flex flex-col gap-4 text-rolex-green/90 text-sm font-bold">
              <li>
                <Link
                  href="/concept"
                  className="hover:text-rolex-gold transition-colors duration-300"
                >
                  {navT("concept")}
                </Link>
              </li>
              <li>
                <Link
                  href="/bespoke"
                  className="hover:text-rolex-gold transition-colors duration-300"
                >
                  {navT("bespoke")}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-rolex-gold transition-colors duration-300"
                >
                  {navT("portfolio")}
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التواصل */}
          <div className="md:col-span-4">
            <h4 className="text-rolex-gold font-montserrat text-xs font-bold uppercase tracking-widest mb-8">
              {t("contact")}
            </h4>
            <ul className="flex flex-col gap-4 text-rolex-green/90 text-sm font-semibold">
              <li className="hover:text-rolex-gold transition-colors duration-300 cursor-default">
                {t("address")}
              </li>
              <li>
                <a
                  href="mailto:info@palmkitchens.ae"
                  className="hover:text-rolex-gold transition-colors duration-300"
                >
                  info@palmkitchens.ae
                </a>
              </li>
              <li>
                <a
                  href="tel:+971501234567"
                  className="hover:text-rolex-gold transition-colors duration-300"
                  dir="ltr"
                >
                  +971 50 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= القسم السفلي: الحقوق ================= */}
        <div className="pt-8 border-t border-rolex-green/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-rolex-green/60 font-semibold">
          <p>
            © {new Date().getFullYear()} Palm Kitchens. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-rolex-gold transition-colors duration-300"
            >
              {t("privacy")}
            </Link>
            <div className="flex gap-4 border-s border-rolex-green/20 ps-6">
              <a
                href="#"
                className="hover:text-rolex-gold transition-colors duration-300 font-montserrat tracking-wider"
              >
                IG
              </a>
              <a
                href="#"
                className="hover:text-rolex-gold transition-colors duration-300 font-montserrat tracking-wider"
              >
                IN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
