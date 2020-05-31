const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = merge(common.config, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign(
                common.settings.htmlWebpackPlugin,
                {
                    inlineSource: '.(js|css)$',
                    minify: {
                        collapseWhitespace: true,
                        removeComments: true,
                        // removeRedundantAttributes: true,
                        // removeScriptTypeAttributes: true,
                        // removeStyleLinkTypeAttributes: true,
                        // useShortDoctype: true
                    }
                }
            )
        ),
        new HtmlWebpackInlineSourcePlugin(),
    ],
});
