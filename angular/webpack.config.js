let path    = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  metadata:{
    title:"Home | E-Shopper"
  },
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new CopyWebpackPlugin([
      {
        from: 'client/assets/images',
        to: 'img/'
      }
    ], {
      copyUnmodified: true
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
