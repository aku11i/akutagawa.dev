const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/articles.rss",
        destination: "https://feed.akutagawa.dev/articles.rss",
      },
    ];
  },
};

module.exports = withBundleAnalyzer(config);
