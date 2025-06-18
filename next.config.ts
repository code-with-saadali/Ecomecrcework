import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "storage.googleapis.com",
      "ik.imagekit.io",
    ],
  },
};

export default nextConfig;
