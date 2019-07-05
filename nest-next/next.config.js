const withTypescript = require('@zeit/next-typescript');
const path = require('path');

module.exports = withTypescript({
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
