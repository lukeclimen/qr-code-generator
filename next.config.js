/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disables Next.js image optimization which requires a server
  },
  basePath: "/qr-code-generator",
  assetPrefix: "/qr-code-generator",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
