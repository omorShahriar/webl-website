module.exports = {
  images: {
    domains: ['cdn.sanity.io']
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
