import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

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

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
