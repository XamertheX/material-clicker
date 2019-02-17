const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const keyPath = path.join(__dirname, '$verifyKey');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      // Some package within or used by @material-ui/core uses
      // `global` instead of `window`.
      global: 'window',

      // Environment
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),

      // Version information on about page
      '$About.CompileTime': JSON.stringify(Date.now()),
      '$About.Version': JSON.stringify(require('../package.json').version
      ),

      '$verifyKey': JSON.stringify(
        fs.existsSync(keyPath)
          ? fs.readFileSync(keyPath).toString()
          // eslint-disable-next-line no-console
          : console.warn(
            '\nWARNING: Your savefile may be corrupt due to missing the $verifyKey file.'
          ) || 'no key.'
      ),
    }),
  ],
  output: {
    publicPath: '../',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(wav|mp3|webm|png|svg)?$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'none',
};
