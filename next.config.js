/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.ASSETS_CDN ?? undefined,
};

console.log(process.env.ASSETS_CDN)

module.exports = nextConfig;
