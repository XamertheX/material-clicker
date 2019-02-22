const webpack = require('webpack');

module.exports = {
  entry: './src/main/main.js',
  module: {
    rules: [
      {
        test: /\.(wav|mp3|webm|png|svg)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        use: [
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['script:src', 'link:href'],
              minimize: true,
            },
          }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // Environment
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devtool: 'none',
};
