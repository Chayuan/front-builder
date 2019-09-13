import VueLoaderPlugin from 'vue-loader/lib/plugin'
import webpack from 'webpack'

module.exports = {
  mode: 'development',
  entry: `./${process.env.SRC}/${process.env.SRC_SCRIPTS_ENTRY}`,
  output: {
    filename: process.env.DEST_OUTPUT_SCRIPT_NAME
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
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
        loaders: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: 'app.js.map',
      exclude: ['vendor.js']
    })
  ]
}
