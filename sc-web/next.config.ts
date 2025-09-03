import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      'http://192.168.100.76:3000', // your LAN IP and port
    ],
  },
};

export default nextConfig;
