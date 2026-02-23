import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

// تصدير الدوال الجديدة المتوافقة مع الإصدار الأخير
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
