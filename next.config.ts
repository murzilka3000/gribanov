import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  sassOptions: {
    prependData: `@use "@/styles/resources" as *;`,
  },
};

export default nextConfig;