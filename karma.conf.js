const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['src/**/*.test.jsx'],
    exclude: ['node_modules'],
    preprocessors: {
      '**/*.test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
  });
};
