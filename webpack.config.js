const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        bundle: './js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 10000,
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'html/index.html'),
            inject: true,
            filename: path.join(__dirname, 'build/index.html')
        }),
        new UglifyjsPlugin()
    ]
};
module.exports = config;