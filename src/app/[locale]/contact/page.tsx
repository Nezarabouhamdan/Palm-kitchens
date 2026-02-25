"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  // كلاس موحد للحقول عشان ما نكرر الكود ويكون شكلهم أنيق وواضح
  const inputClasses =
    "w-full bg-transparent border border-rolex-green/20 focus:border-rolex-gold focus:ring-1 focus:ring-rolex-gold rounded-sm p-4 text-rolex-green outline-none transition-all placeholder:text-rolex-green/30";

  return (
    <main className="bg-[#f2f0ef] min-h-screen pt-40 md:pt-56 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* ==================== 1. الترويسة ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-rolex-gold"></span>
            <span className="text-rolex-gold font-montserrat font-bold uppercase tracking-widest text-xs">
              {t("badge")}
            </span>
            <span className="w-12 h-[1px] bg-rolex-gold"></span>
          </div>
          <h1 className="text-rolex-green text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-rolex-green/70 font-light text-lg md:text-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* ==================== 2. معلومات الاتصال ==================== */}
          <div className="lg:col-span-5 animate-fade-in-up delay-100">
            <h3 className="text-rolex-green text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-rolex-gold inline-block"></span>
              {t("contactInfo")}
            </h3>

            <div className="space-y-8 mt-12">
              {/* بطاقة الموقع */}
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white rounded-sm border border-rolex-green/5 text-rolex-green group-hover:bg-rolex-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-rolex-gold font-montserrat text-[10px] font-bold uppercase tracking-widest mb-2">
                    {t("labels.location")}
                  </h4>
                  <p className="text-rolex-green font-semibold text-lg max-w-[250px]">
                    {t("location")}
                  </p>
                </div>
              </div>

              {/* بطاقة الهاتف */}
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white rounded-sm border border-rolex-green/5 text-rolex-green group-hover:bg-rolex-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-rolex-gold font-montserrat text-[10px] font-bold uppercase tracking-widest mb-2">
                    {t("labels.phone")}
                  </h4>
                  <a
                    href={`tel:${t("phone").replace(/\s/g, "")}`}
                    className="text-rolex-green font-semibold text-lg hover:text-rolex-gold transition-colors block"
                    dir="ltr"
                  >
                    {t("phone")}
                  </a>
                </div>
              </div>

              {/* بطاقة الإيميل */}
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white rounded-sm border border-rolex-green/5 text-rolex-green group-hover:bg-rolex-gold group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-rolex-gold font-montserrat text-[10px] font-bold uppercase tracking-widest mb-2">
                    {t("labels.email")}
                  </h4>
                  <a
                    href={`mailto:${t("email")}`}
                    className="text-rolex-green font-semibold text-lg hover:text-rolex-gold transition-colors"
                  >
                    {t("email")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 3. نموذج التواصل (الفورم) ==================== */}
          <div className="lg:col-span-7 animate-fade-in-up delay-200">
            <form className="bg-white p-8 md:p-12 rounded-sm border border-rolex-green/5 shadow-[0_20px_40px_-15px_rgba(0,96,57,0.05)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-rolex-green/70 text-sm font-semibold mb-3">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-rolex-green/70 text-sm font-semibold mb-3">
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    className={`${inputClasses} text-left`}
                    dir="ltr"
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-rolex-green/70 text-sm font-semibold mb-3">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  className={`${inputClasses} text-left`}
                  dir="ltr"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mb-8">
                <label className="block text-rolex-green/70 text-sm font-semibold mb-3">
                  {t("form.service")}
                </label>
                <div className="relative">
                  <select
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="new">{t("form.options.new")}</option>
                    <option value="renovation">
                      {t("form.options.renovation")}
                    </option>
                    <option value="consultation">
                      {t("form.options.consultation")}
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none rtl:right-auto rtl:left-4">
                    <svg
                      className="w-4 h-4 text-rolex-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-rolex-green/70 text-sm font-semibold mb-3">
                  {t("form.message")}
                </label>
                <textarea
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-rolex-green text-white py-5 font-bold uppercase tracking-widest text-sm hover:bg-rolex-gold transition-colors duration-300 rounded-sm"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
