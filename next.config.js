/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.ASSETS_CDN,
  async rewrites() {
    return [
      /** ASSET PREFIX */
      {
        source: `${process.env.ASSETS_CDN}/_next/:path*`,
        destination: '_next/:path*',
      },
      /** IMAGE PREFIX */
      {
        source: `${process.env.ASSETS_CDN}/images/:query*`,
        destination: '/_next/image/:query*',
      },
      /** API PREFIX */
      {
        source: `${process.env.ASSETS_CDN}/api/:path*`,
        destination: '/api/:path*',
      },
    ];
  },
};

console.log(process.env.ASSETS_CDN);

module.exports = nextConfig;
