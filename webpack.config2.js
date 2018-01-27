const dotEnv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

dotEnv.load();

module.exports = (env) => {
    const production = {
        devtool: 'source-map',
        devServer: {},
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                sourceMap: true,
                comments: false,
                compress: {
                    warnings: false,
                    drop_console: true
                },
            }),
        ]
    };

    const development = {
        devtool: 'eval',
        devServer: {
            contentBase: path.resolve(__dirname, './client/public'),
            historyApiFallback: true,
            hot: true,
            inline: true,
            host: '127.0.0.1',
            port: 3000,
            proxy: {
                '/api/*': {
                    target: 'http://127.0.0.1:5000',
                    secure: false,
                    changeOrigin: true
                },
            },
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    };

    const configOpts = env === 'production' ? production : development;
    configOpts.plugins.push(
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        }),
        new ExtractTextPlugin('bundle.css')
    );

    const webpackConfig = {
        entry: [
            './client/src/index.jsx',
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '/client/dist')
        },
        devtool: configOpts.devtool,
        resolve: {
            extensions: [' ', '.js', '.jsx']
        },
        devServer: configOpts.devServer,
        module: {
            rules: [{
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader']
                    }),
                },
                {
                    test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
                    exclude: /node_modules/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    /*include: [
                        path.join(__dirname, 'client'),
                        path.join(__dirname, './template')
                    ],*/
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        },
                    },
                },
            ],
        },
        plugins: configOpts.plugins,
        node: {
            dns: 'empty',
            net: 'empty',
            fs: 'empty'
        }
    };
    return webpackConfig;
};