const { parsed: localEnv } = require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
};
