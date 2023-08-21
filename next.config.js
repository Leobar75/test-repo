/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/data',
  assetPrefix: '/data',
  async redirects() {
    return [{ source: '/', destination: '/data', basePath: false, permanent: true }];
  },
};

module.exports = nextConfig;
