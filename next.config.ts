import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/janseva',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
