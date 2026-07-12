import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All tools run client-side; nothing here needs server runtime config.
  reactStrictMode: true,
};

export default nextConfig;
