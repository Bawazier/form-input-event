/* eslint-disable no-unused-vars */
module.exports = {
  // basePath: "/about",
  poweredByHeader: false,
  generateEtags: false,
  distDir: "build",
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};