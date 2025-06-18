import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/dpqbnre7s/image/**")],
  },
};

export default nextConfig;
