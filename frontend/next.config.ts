import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }], // Add Cloudinary's domain here
},
};

export default nextConfig;
