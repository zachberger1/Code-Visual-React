/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Code-Visual-React" : "", // Use basePath only in production
  images: {
    unoptimized: true, // Fixes image loading on GitHub Pages
  },
  trailingSlash: true, // Ensures correct static paths
};

export default nextConfig;
