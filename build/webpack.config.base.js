'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        'app': './src/main.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
                exclude: /node_modules/,
                loader: 'url-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin()
    ]
};