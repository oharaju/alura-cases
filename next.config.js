module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};
