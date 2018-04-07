const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'js/bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src/js')]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { 
        test: /phaser-split\.js$/,
        use: ['expose-loader?Phaser'] 
      },
      { 
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader' 
      }
    ]
  },
  devServer: {
    compress: true,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
      WEBGL_RENDERER: true,
      CANVAS_RENDERER: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    })
  ]
}
