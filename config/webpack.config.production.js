const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/js'
  },
  output: {
    path: path.resolve(__dirname, './../dist'),
    filename: 'js/bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.js'],
    modules: ['node_modules', path.resolve(__dirname, 'src/js')]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: path.resolve(__dirname, 'dist/js')
        })
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
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
      WEBGL_RENDERER: true,
      CANVAS_RENDERER: false
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
      },
      output: {
          comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    })
  ]
}
