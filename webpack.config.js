const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devtool: 'inline-source-map',
    output: {
        path: distDir,
        filename: 'main_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },


    plugins: [
        new CleanWebpackPlugin([ distDir ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};