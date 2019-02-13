 const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../'
                  }
                }, 
                "css-loader",
              ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chaitanya',
            chunks: ['main', 'shared']
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProgressPlugin(),
    ],
})