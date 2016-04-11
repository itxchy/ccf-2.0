var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'bootstrap-loader',
    './app/app.js',
    'bootstrap-loader/extractStyles'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } },
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ]},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader', 'sass-loader')},
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000'},
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]'}
    ]
  },
  postcss: [ autoprefixer ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("/style/styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ]
};
