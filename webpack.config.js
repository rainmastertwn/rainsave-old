const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './script.js',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  output: {
    clean: true,
    publicPath: '_old',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
}
