/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/qr-code-generator/", // <=== replace with your repo name (must start with a /)
  assetPrefix: "/qr-code-generator/", // <=== replace with your repo name (must end with a /)
  images: {
    unoptimized: true, // Disables Next.js image optimization which requires a server
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
