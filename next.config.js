/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ipfs.nftstorage.link",
      },
    ],
  },
};

module.exports = nextConfig;
