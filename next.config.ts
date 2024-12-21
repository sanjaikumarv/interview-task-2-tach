import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  /* config options here */
};

export default nextConfig;
