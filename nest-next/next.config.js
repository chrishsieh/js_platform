const withSass = require('@zeit/next-sass');
const path = require('path');
module.exports = withSass({
  useFileSystemPublicRoutes: false,
  webpack: function (config, { buildId, dev }) {
    const originalEntry = config.entry;

    config.resolve = {
      ...config.resolve,
      ...{
        alias: {
          ...config.resolve.alias,
          '@src': path.resolve(__dirname, 'client'),
        }
      },
    };

    config.watchOptions = {
        ignored: [
          /\.git\//,
          /\.next\//,
          /node_modules/
        ]
    }

    return config
  }
});
