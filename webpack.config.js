const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config()

const ENV = process.env.APP_ENV;
const isDevelopment = ENV === 'development';
const isProduction = ENV === 'production';

const setDevTool = () => {
    if (isDevelopment) {
        return 'eval'
    } else if (isProduction) {
        return 'source-map'
    } else {
        return 'inline-source-map'
    }
}

module.exports = {
    entry: [
        __dirname + "/client/src/index.jsx",
    ],
    output: {
        path: __dirname + "/client/dist",
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
                use: 'file-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/client/public/index.html",
            inject: 'body'
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            API_KEY: JSON.stringify(process.env.API_KEY)
        }),
        new webpack.HotModuleReplacementPlugin()

    ],
    resolve: {
        extensions: [' ', '.js', '.jsx'],
        alias: {
            Assets: path.resolve(__dirname, './client/src/assets'),
            Utils: path.resolve(__dirname, './client/src/utils'),
            Actions: path.resolve(__dirname, './client/src/actions'),
            Routes: path.resolve(__dirname, './client/src/Routes'),
            Public: path.resolve(__dirname, './client/public'),
            Components: path.resolve(__dirname, './client/src/components'),
            HomePage: path.resolve(__dirname, './client/src/components/homepage'),
            Forms: path.resolve(__dirname, './client/src/components/forms'),
            General: path.resolve(__dirname, './client/src/components/general')
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: '127.0.0.1',
        contentBase: '/client/public',
        port: 3000
    },
    devtool: setDevTool()
}