import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages deployment
  output: "standalone",

  // Allow images from Blogger/Google CDN
  images: {
    unoptimized: true, // Required for Cloudflare Workers (no image optimization server)
    remotePatterns: [
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Compress responses
  compress: true,

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Faster builds
  poweredByHeader: false,
};

export default nextConfig;
