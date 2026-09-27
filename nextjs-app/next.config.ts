import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from Blogger/Google CDN
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
