const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000,
        https: false,
        hot: true,
        historyApiFallback: true,
    },
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'js/[name].[chunkhash].js',
        clean: true,
        publicPath: '/',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
});