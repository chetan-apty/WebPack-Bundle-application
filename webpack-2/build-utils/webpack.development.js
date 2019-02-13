const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CK',
            chunks: ['main', 'shared']
        }),
        new webpack.ProgressPlugin(),
    ],
})
