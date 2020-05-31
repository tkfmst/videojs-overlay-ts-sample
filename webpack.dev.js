const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = merge.smart(common.config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                use: [
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign(
                common.settings.htmlWebpackPlugin,
                {
                    // inlineSource: '.(js|css)$',
                }
            )
        ),
        new HtmlWebpackInlineSourcePlugin(),
    ],
});
