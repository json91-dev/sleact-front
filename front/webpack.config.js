"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
var webpack_1 = __importDefault(require("webpack"));
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
// interface Configuration extends WebpackConfiguration {
//     devServer?: WebpackDevServerConfiguration;
// }
var isDevelopment = process.env.NODE_ENV !== 'production';
var config = {
    name: 'sleact',
    mode: isDevelopment ? 'development' : 'production',
    devtool: !isDevelopment ? 'hidden-source-map' : 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@hooks': path_1.default.resolve(__dirname, 'hooks'),
            '@components': path_1.default.resolve(__dirname, 'components'),
            '@layouts': path_1.default.resolve(__dirname, 'layouts'),
            '@pages': path_1.default.resolve(__dirname, 'pages'),
            '@utils': path_1.default.resolve(__dirname, 'utils'),
            '@typings': path_1.default.resolve(__dirname, 'typings'),
        },
    },
    entry: {
        app: './client',
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 chrome versions'] },
                                debug: isDevelopment,
                            },
                        ],
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        // new ForkTsCheckerWebpackPlugin({
        //     async: false,
        //     // eslint: {
        //     //   files: "./src/**/*",
        //     // },
        // }),
        new webpack_1.default.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
    ],
    output: {
        path: path_1.default.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    // devServer: {
    //     historyApiFallback: true,
    //     port: 3090,
    //     devMiddleware: { publicPath: '/dist/' },
    //     static: { directory: path.resolve(__dirname) },
    //     proxy: {
    //         '/api/': {
    //             target: 'http://localhost:3095',
    //             changeOrigin: true,
    //             ws: true,
    //         },
    //     },
    // },
};
// if (isDevelopment && config.plugins) {
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());
//     config.plugins.push(
//         new ReactRefreshWebpackPlugin({
//             overlay: {
//                 useURLPolyfill: true,
//             },
//         }),
//     );
//     config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
// }
// if (!isDevelopment && config.plugins) {
//     config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
//     config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
// }
exports.default = config;
//# sourceMappingURL=webpack.config.js.map