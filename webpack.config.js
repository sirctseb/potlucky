const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});

const StyleLintPlugin = require('stylelint-webpack-plugin');

const StyleLintPluginConfig = new StyleLintPlugin({
    config: {
        extends: 'stylelint-config-standard',
        rules: {
            indentation: 4,
        },
    },
});

module.exports = {
    devServer: {
        port: 7000,
        historyApiFallback: true,
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react'],
                            plugins: ['transform-object-rest-spread'],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePath: ['./node_modules'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
        StyleLintPluginConfig,
    ],
};
