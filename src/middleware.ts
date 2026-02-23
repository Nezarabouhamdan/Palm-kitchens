import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing"; // المسار أصبح نظيفاً ومباشراً

export default createMiddleware(routing);

export const config = {
  // هذا الـ Matcher هو "السحر" الذي سيجبر الموقع على التوجيه ويمنع التكرار
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
