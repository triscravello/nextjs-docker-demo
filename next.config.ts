import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables output file tracing for minimal Docker images
  output: "standalone",
};

export default nextConfig;
