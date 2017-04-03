/* eslint-disable no-extraneous-dependencies */

const webpack = require('webpack');
const resolve = require('path').resolve;

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
    ],
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': 'window',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc',
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     dead_code: true,
    //     unused: true,
    //     warnings: false,
    //   },
    // }),
  ],
};

/* eslint-enable no-extraneous-dependencies */
