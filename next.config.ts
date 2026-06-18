import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "nayepankh-redesign";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? `/${repoName}` : "",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
