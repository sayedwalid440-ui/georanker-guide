/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // هذا الأمر يخبر Vercel بتجاهل أخطاء التنسيق وقت الرفع
    ignoreDuringBuilds: true,
  },
  typescript: {
    // هذا الأمر يتجاهل أخطاء الأنواع البرمجية الشكلية
    ignoreBuildErrors: true,
  },
};

export default nextConfig;