// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone",
//   /* config options here */
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   reactStrictMode: false,
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Change this from 'standalone' to 'export'
  basePath: "/Portfolio", // Required so CSS/JS files load from the right folder
  images: {
    unoptimized: true,   // GitHub Pages doesn't support Next.js Image Optimization
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
