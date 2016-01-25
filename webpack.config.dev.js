var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    './app/app.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/,
        loaders: [ 'style', 'css', 'postcss' ]
      },
      { test: /\.scss$/,
        loaders: [ 'style', 'css', 'postcss', 'sass' ]
      },
      /*{ test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },*/
      { test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000'
      },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]'}
    ]
  },
  postcss: [ autoprefixer ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('development'),
     }
})
  ]
};
