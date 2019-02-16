const webpack = require('webpack');

module.exports = {
  entry: './src/main/main.js',
  module: {
    rules: [
      {
        test: /\.(wav|mp3|webm|png|svg)?$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // Environment
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
