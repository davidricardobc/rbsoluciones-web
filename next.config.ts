import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: 'https://rbsoluciones.co',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;