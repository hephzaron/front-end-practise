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
        extensions: [' ', '.js', '.jsx']
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