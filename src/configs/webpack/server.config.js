const { join, resolve } = require('path')

const nodeExternals = require('webpack-node-externals')

const jsLoader = require('../loaders/javascript.js')
const cssLoader = require('../loaders/css.js')
const fileLoader = require('../loaders/file.js')

const SRC_DIR = join(__dirname, '../../../src');
const DIST_DIR = resolve(__dirname, '../../../dist');

module.exports = {
  name: 'server',
  target: 'node',
  entry: join(SRC_DIR, 'server/server.js'),
  module: {
    rules: [fileLoader.server, cssLoader.server, jsLoader.server],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/static/',
  },
  resolve: {
    modules: [resolve('src'), resolve('node_modules')],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  optimization: { nodeEnv: false },
};
