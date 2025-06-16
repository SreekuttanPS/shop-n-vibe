import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/dpqbnre7s/image/**")],
  },
};

export default nextConfig;
