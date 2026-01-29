import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use "@/styles/resources" as *;`,
  },
};

export default nextConfig;
