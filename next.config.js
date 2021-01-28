const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  webpack(config, { isServer }) {
    if (process.env.BUNDLE_ANALYZER === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
