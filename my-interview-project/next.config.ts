import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: '/:path*',
          destination: process.env.API_URL + '/:path*',
        },
      ],
      fallback: [],
    };
  },
  /* other config options here */
};

export default nextConfig;
