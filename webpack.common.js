const path = require('path');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');


module.exports = {
    settings: {
        htmlWebpackPlugin: {
            template: "./src/html/index.html",
            inject: "body",
        },
    },
    config: {
        devtool: false,
        entry: {
            sample_videojs: './src/ts/main/index',
        },
        plugins: [
            // TODO あまり見やすくないので止めた。そのうちtemplate直せれば。
            // new TypedocWebpackPlugin({
            //     out: './api_docs/',
            //     toc: [
            //         'EntryClass',
            //         'ImportantInterface',
            //     ],
            //     module: 'esnext',
            //     target: 'esnext',
            //     includes: './src/ts/',
            //     exclude: [
            //         '**/*.test.ts',
            //         '**/node_modules/**/*.*',
            //     ],
            //     experimentalDecorators: true,
            //     excludeNotExported: true,
            //     excludeExternals: true,
            //     excludePrivate: true,
            //     ignoreCompilerErrors: true,
            //     theme: 'minimal',
            // }, './src/ts'),
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    use: [
                        // 下から処理
                        { loader: 'babel-loader' },
                        { loader: 'ts-loader' },
                    ],
                    include: [
                        path.resolve('src'),
                        path.resolve('test'),
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(jpg|jpeg|png)$/,
                    loader: 'url-loader',
                },
                {
                    test: /\.html$/,
                    loader: "html-loader",
                },
            ],
        },
        devServer: {
            host: '0.0.0.0',
            port: 40080,
            allowedHosts: ['.local'],
        },
    }
};
