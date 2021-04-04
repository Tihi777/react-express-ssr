const { resolve, join } = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

const jsLoader = require('../loaders/javascript.js')
const cssLoader = require('../loaders/css.js')
const fileLoader = require('../loaders/file.js')

const DEV = 'development';

const NODE_ENV = process.env.NODE_ENV || DEV;

const isDevelopment = NODE_ENV === DEV;

const SRC_DIR = join(__dirname, '../../../src');
const DIST_DIR = resolve(__dirname, '../../../dist');

module.exports = {
  mode: NODE_ENV,
  target: 'web',
  entry: resolve(SRC_DIR, 'client/index.js'),
  module: {
    rules: [ jsLoader.client, cssLoader.client, fileLoader.client]
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new LoadablePlugin(),
    !isDevelopment && new CompressionPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src']
  },
  devtool: isDevelopment ? 'source-map' : false,
  stats: 'errors-warnings',
}
