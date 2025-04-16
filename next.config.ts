import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during builds (use with caution)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Customize Webpack configuration to only display errors in the build logs
  webpack: (config, { isServer, dev }) => {
    config.stats = "errors-only";
    return config;
  },
};

export default nextConfig;
