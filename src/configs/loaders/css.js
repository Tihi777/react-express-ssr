const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  client: {
    test: /\.(s[ac]|c)ss/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: { publicPath: '' },
      },
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
}