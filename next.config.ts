import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // رابط اللوغو
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // رابط صورة المطبخ المؤقتة
      },
    ],
  },
};

export default withNextIntl(nextConfig);
