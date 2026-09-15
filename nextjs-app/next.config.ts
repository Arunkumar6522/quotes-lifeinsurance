import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from Blogger/Google CDN
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Compress responses
  compress: true,

  // Faster page loads — inline critical fonts
  experimental: {
    optimizeCss: false, // keep off to avoid critters dep issues
  },
};

export default nextConfig;
