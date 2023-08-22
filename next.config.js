/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/data',
  async rewrites() {
    return [{ source: '/data/:path*', destination: '/:path*' }];
  },
};

module.exports = nextConfig;
