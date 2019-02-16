const webpack = require('webpack');

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
      '$About.Version': JSON.stringify(
        process.env.UPDATER_ONLY
          ? '0.0.0'
          : require('../package.json').version
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
};
