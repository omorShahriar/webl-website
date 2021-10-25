module.exports = {
  generateBuildId: () => 'build',
  images: {
    domains: ['cdn.sanity.io'],
    minimumCacheTTL: 60
  },

  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
