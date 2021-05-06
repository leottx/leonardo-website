const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates 'style' nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }, 
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
}