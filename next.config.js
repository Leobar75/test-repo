BASE_PREFIX_APP = '/data'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: BASE_PREFIX_APP,
  async rewrites() {
    return [
      /** ASSET PREFIX */
      {
        source: `${BASE_PREFIX_APP}/_next/:path*`,
        destination: '/_next/:path*',
      },
      /** IMAGE PREFIX */
      {
        source: `${BASE_PREFIX_APP}/images/:query*`,
        destination: '/_next/image/:query*',
      },
      /** API PREFIX */
      {
        source: `${BASE_PREFIX_APP}/api/:path*`,
        destination: '/api/:path*',
      },
    ];
  },
};

console.log(process.env.ASSETS_CDN);

module.exports = nextConfig;
