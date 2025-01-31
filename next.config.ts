/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site export
  // basePath: "/Code-Visual-React", // Ensures correct page routing
  // assetPrefix: "/Code-Visual-React/", // Ensures assets load correctly
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  trailingSlash: true, // Ensures correct paths for static deployment
};

export default nextConfig;
