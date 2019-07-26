const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
import VueLoaderPlugin from 'vue-loader/lib/plugin'

module.exports = {
  mode: 'production',
  entry: `./${process.env.SRC}/${process.env.SRC_SCRIPTS_ENTRY}`,
  output: {
    filename: process.env.DEST_OUTPUT_SCRIPT_NAME
  },
  /* Uglify JS in production */
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
