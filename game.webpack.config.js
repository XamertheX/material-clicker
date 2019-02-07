const webpack = require('webpack');

module.exports = {
    // entry: path.join(__dirname, './src/game/index.js'),
    plugins: [
        new webpack.DefinePlugin({
            // Some package within or used by @material-ui/core uses
            // `global` instead of `window`.
            global: 'window',
        })
    ],
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
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
};