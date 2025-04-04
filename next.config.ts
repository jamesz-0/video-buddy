import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/video-buddy/' : '',
  basePath: isProd ? '/video-buddy' : '',
  output: 'export'
};

export default nextConfig;