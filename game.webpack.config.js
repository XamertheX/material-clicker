const path = require('path');

module.exports = {
    // entry: path.join(__dirname, './src/game/index.js'),
    plugins: [

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
};