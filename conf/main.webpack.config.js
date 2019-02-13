const webpack = require('webpack');

module.exports = {
  entry: './src/main/main.js',
  plugins: [
    new webpack.DefinePlugin({
      // Environment
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
